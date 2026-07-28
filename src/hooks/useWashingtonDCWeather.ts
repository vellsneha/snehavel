import { useEffect, useState } from "react";
import {
  WASHINGTON_DC,
  celsiusToFahrenheit,
  getSunTimesForDate,
  pickWeatherGif,
  parseOpenMeteoLocalTime,
  weatherCodeLabel,
  WEATHER_GIF_SRC,
  type WeatherGifId,
} from "../data/weatherGifs";

type WeatherState = {
  status: "loading" | "ready" | "error";
  gifId: WeatherGifId;
  gifSrc: string;
  temperatureF: number | null;
  condition: string;
  isDay: boolean;
  weatherCode: number | null;
  observedAt: string | null;
};

const OPEN_METEO_URL = "https://api.open-meteo.com/v1/forecast";
const CACHE_KEY = "portfolio-dc-weather-v1";
const CACHE_TTL_MS = 30 * 60 * 1000;

type WeatherCache = {
  savedAt: number;
  gifId: WeatherGifId;
  temperatureF: number;
  condition: string;
  isDay: boolean;
  weatherCode: number;
  observedAt: string;
};

function getDcLocalTimeParts(): { hour: number; month: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: WASHINGTON_DC.timezone,
    hour: "numeric",
    minute: "numeric",
    month: "numeric",
    hour12: false,
  }).formatToParts(new Date());

  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  const month = Number(parts.find((part) => part.type === "month")?.value ?? 1);

  return { hour, month, minutes: hour * 60 + minute };
}

function readWeatherCache(): WeatherState | null {
  if (typeof sessionStorage === "undefined") return null;

  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const cached = JSON.parse(raw) as WeatherCache;
    if (Date.now() - cached.savedAt > CACHE_TTL_MS) return null;

    return {
      status: "ready",
      gifId: cached.gifId,
      gifSrc: WEATHER_GIF_SRC[cached.gifId],
      temperatureF: cached.temperatureF,
      condition: cached.condition,
      isDay: cached.isDay,
      weatherCode: cached.weatherCode,
      observedAt: cached.observedAt,
    };
  } catch {
    return null;
  }
}

function writeWeatherCache(state: WeatherState) {
  if (
    typeof sessionStorage === "undefined" ||
    state.status !== "ready" ||
    state.temperatureF == null ||
    state.weatherCode == null ||
    !state.observedAt
  ) {
    return;
  }

  const cached: WeatherCache = {
    savedAt: Date.now(),
    gifId: state.gifId,
    temperatureF: state.temperatureF,
    condition: state.condition,
    isDay: state.isDay,
    weatherCode: state.weatherCode,
    observedAt: state.observedAt,
  };

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(cached));
  } catch {
    // Ignore quota or privacy mode errors.
  }
}

function createTimeFallbackState(): WeatherState {
  const { hour, month, minutes } = getDcLocalTimeParts();
  const isDay = hour >= 6 && hour < 20;
  const gifId = pickWeatherGif({
    weatherCode: 0,
    isDay,
    localMinutes: minutes,
    localMonth: month,
    sunTimes: null,
  });

  return {
    status: "loading",
    gifId,
    gifSrc: WEATHER_GIF_SRC[gifId],
    temperatureF: null,
    condition: "Loading weather",
    isDay,
    weatherCode: null,
    observedAt: null,
  };
}

async function fetchWashingtonDCWeather(): Promise<WeatherState> {
  const params = new URLSearchParams({
    latitude: String(WASHINGTON_DC.latitude),
    longitude: String(WASHINGTON_DC.longitude),
    timezone: WASHINGTON_DC.timezone,
    current: "weather_code,temperature_2m,is_day",
    daily: "sunrise,sunset",
  });

  const response = await fetch(`${OPEN_METEO_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`Weather request failed (${response.status})`);
  }

  const data = (await response.json()) as {
    current?: {
      time?: string;
      weather_code?: number;
      temperature_2m?: number;
      is_day?: number;
    };
    daily?: {
      time?: string[];
      sunrise?: string[];
      sunset?: string[];
    };
  };

  const current = data.current;
  if (
    current?.weather_code == null ||
    current.temperature_2m == null ||
    current.is_day == null ||
    !current.time
  ) {
    throw new Error("Incomplete weather payload");
  }

  const { minutes: localMinutes, month: localMonth } = parseOpenMeteoLocalTime(current.time);
  const sunTimes =
    data.daily?.time && data.daily.sunrise && data.daily.sunset
      ? getSunTimesForDate(current.time, {
          time: data.daily.time,
          sunrise: data.daily.sunrise,
          sunset: data.daily.sunset,
        })
      : null;
  const gifId = pickWeatherGif({
    weatherCode: current.weather_code,
    isDay: current.is_day === 1,
    localMinutes,
    localMonth,
    sunTimes,
  });

  return {
    status: "ready",
    gifId,
    gifSrc: WEATHER_GIF_SRC[gifId],
    temperatureF: celsiusToFahrenheit(current.temperature_2m),
    condition: weatherCodeLabel(current.weather_code),
    isDay: current.is_day === 1,
    weatherCode: current.weather_code,
    observedAt: current.time,
  };
}

function preloadGif(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => reject(new Error(`Failed to preload ${src}`));
    image.src = src;
  });
}

let weatherRequest: Promise<WeatherState> | null = null;
let resolvedWeather: WeatherState | null = null;

function loadWashingtonDCWeather(): Promise<WeatherState> {
  if (resolvedWeather) {
    return Promise.resolve(resolvedWeather);
  }

  if (!weatherRequest) {
    weatherRequest = fetchWashingtonDCWeather()
      .then((result) => {
        resolvedWeather = result;
        writeWeatherCache(result);
        return result;
      })
      .catch((error) => {
        weatherRequest = null;
        throw error;
      });
  }

  return weatherRequest;
}

function createInitialWeatherState(): WeatherState {
  return readWeatherCache() ?? resolvedWeather ?? createTimeFallbackState();
}

// Start fetching as soon as this module loads so data is ready before paint when possible.
void loadWashingtonDCWeather();

export function useWashingtonDCWeather(): WeatherState {
  const [state, setState] = useState(createInitialWeatherState);

  useEffect(() => {
    let cancelled = false;

    async function syncWeather() {
      try {
        const next = await loadWashingtonDCWeather();
        if (cancelled) return;

        setState((prev) => {
          const isSame =
            prev.status === "ready" &&
            prev.gifSrc === next.gifSrc &&
            prev.temperatureF === next.temperatureF &&
            prev.weatherCode === next.weatherCode;

          if (isSame) return prev;

          if (prev.gifSrc !== next.gifSrc) {
            void preloadGif(next.gifSrc)
              .catch(() => undefined)
              .then(() => {
                if (cancelled) return;
                writeWeatherCache(next);
                setState(next);
              });

            return {
              ...prev,
              temperatureF: next.temperatureF,
              condition: next.condition,
              isDay: next.isDay,
              weatherCode: next.weatherCode,
              observedAt: next.observedAt,
              status: "ready",
            };
          }

          writeWeatherCache(next);
          return next;
        });
      } catch (error) {
        if (cancelled) return;

        setState((prev) => ({
          ...prev,
          status: prev.status === "ready" ? "ready" : "error",
          condition: prev.status === "ready" ? prev.condition : "Weather unavailable",
        }));

        console.warn("Washington DC weather fetch failed:", error);
      }
    }

    void syncWeather();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
