import { withBase } from "../utils/withBase";

/**
 * Weather GIF selection for Washington, DC
 *
 * Curated assets in /public/weathergifs:
 * - sunny.gif              → clear daytime
 * - clearnight.gif         → clear night
 * - cloudy-cum-sunnyday.gif → partly cloudy with sun
 * - cloudyday.gif          → overcast daytime
 * - day.gif                → generic daytime fallback
 * - night.gif              → unused; night uses clearnight.gif
 * - sunset.gif             → golden hour (~75 min before sunset through twilight)
 * - rainy.gif              → rain, drizzle, showers, thunderstorms
 * - mystical.gif           → fog / rime fog
 * - 50snow.gif             → light–moderate snow
 * - 100snow.gif            → heavy snow
 * - cherry.gif             → spring blossom (Mar–Apr, calm clear days)
 *
 * Priority order when picking a GIF:
 * 1. Active precipitation type (snow > rain)
 * 2. Fog / low visibility
 * 3. Cherry blossom season accent (daytime, calm weather only)
 * 4. Clear / cloudy / night buckets using WMO weather_code + is_day
 * 5. Sunset window override for codes 0–2 using today's sunrise/sunset from Open-Meteo
 * 6. Generic day.gif / clearnight.gif fallback
 */

export const WASHINGTON_DC = {
  latitude: 38.9072,
  longitude: -77.0369,
  timezone: "America/New_York",
  label: "Washington, DC",
} as const;

export type WeatherGifId =
  | "sunny"
  | "clearnight"
  | "cloudy-cum-sunnyday"
  | "cloudyday"
  | "day"
  | "night"
  | "sunset"
  | "rainy"
  | "mystical"
  | "snow-light"
  | "snow-heavy"
  | "cherry";

export const WEATHER_GIF_SRC: Record<WeatherGifId, string> = {
  sunny: withBase("weathergifs/sunny.gif"),
  clearnight: withBase("weathergifs/clearnight.gif"),
  "cloudy-cum-sunnyday": withBase("weathergifs/cloudy-cum-sunnyday.gif"),
  cloudyday: withBase("weathergifs/cloudyday.gif"),
  day: withBase("weathergifs/day.gif"),
  night: withBase("weathergifs/clearnight.gif"),
  sunset: withBase("weathergifs/sunset.gif"),
  rainy: withBase("weathergifs/rainy.gif"),
  mystical: withBase("weathergifs/mystical.gif"),
  "snow-light": withBase("weathergifs/50snow.gif"),
  "snow-heavy": withBase("weathergifs/100snow.gif"),
  cherry: withBase("weathergifs/cherry.gif"),
};

const SNOW_HEAVY_CODES = new Set([75, 86]);
const SNOW_LIGHT_CODES = new Set([71, 73, 77, 85]);
const RAIN_CODES = new Set([
  51, 52, 53, 54, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 97, 98, 99,
]);
const FOG_CODES = new Set([45, 48]);
const CHERRY_MONTHS = new Set([3, 4]);
const CHERRY_WEATHER_CODES = new Set([0, 1, 2]);

/** Minutes before sunset when golden-hour GIF starts. */
const SUNSET_WINDOW_BEFORE_MINUTES = 75;
/** Minutes after sunset when sunset GIF still applies (civil twilight). */
const SUNSET_WINDOW_AFTER_MINUTES = 25;
/** Minutes after sunset before switching to night visuals. */
const NIGHT_AFTER_SUNSET_MINUTES = 30;

/** Open-Meteo returns local times in the requested timezone without an offset. */
export function parseOpenMeteoLocalMinutes(isoLocal: string): number {
  const match = isoLocal.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (match) {
    return Number(match[4]) * 60 + Number(match[5]);
  }

  const date = new Date(isoLocal);
  return date.getHours() * 60 + date.getMinutes();
}

export function parseOpenMeteoLocalTime(isoLocal: string): {
  hour: number;
  month: number;
  minutes: number;
} {
  const minutes = parseOpenMeteoLocalMinutes(isoLocal);
  const match = isoLocal.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2})/);
  if (match) {
    return { month: Number(match[2]), hour: Number(match[4]), minutes };
  }

  const date = new Date(isoLocal);
  return {
    hour: date.getHours(),
    month: date.getMonth() + 1,
    minutes,
  };
}

export function getSunTimesForDate(
  currentTime: string,
  daily: { time: string[]; sunrise: string[]; sunset: string[] },
): { sunriseMinutes: number; sunsetMinutes: number } | null {
  const date = currentTime.slice(0, 10);
  const index = daily.time.indexOf(date);
  if (index === -1) return null;

  const sunrise = daily.sunrise[index];
  const sunset = daily.sunset[index];
  if (!sunrise || !sunset) return null;

  return {
    sunriseMinutes: parseOpenMeteoLocalMinutes(sunrise),
    sunsetMinutes: parseOpenMeteoLocalMinutes(sunset),
  };
}

function isNightVisual(
  localMinutes: number,
  isDay: boolean,
  sunTimes: { sunriseMinutes: number; sunsetMinutes: number } | null,
): boolean {
  if (sunTimes) {
    if (localMinutes < sunTimes.sunriseMinutes) return true;
    if (localMinutes >= sunTimes.sunsetMinutes + NIGHT_AFTER_SUNSET_MINUTES) {
      return true;
    }
    return false;
  }

  const localHour = Math.floor(localMinutes / 60);
  if (localHour >= 20 || localHour < 6) return true;
  return !isDay;
}

function isSunsetWindow(
  localMinutes: number,
  sunTimes: { sunriseMinutes: number; sunsetMinutes: number } | null,
): boolean {
  if (!sunTimes) {
    const localHour = Math.floor(localMinutes / 60);
    return localHour >= 17 && localHour <= 19;
  }

  const { sunsetMinutes } = sunTimes;
  return (
    localMinutes >= sunsetMinutes - SUNSET_WINDOW_BEFORE_MINUTES &&
    localMinutes <= sunsetMinutes + SUNSET_WINDOW_AFTER_MINUTES
  );
}

export function weatherCodeLabel(code: number): string {
  if (SNOW_HEAVY_CODES.has(code) || SNOW_LIGHT_CODES.has(code)) return "Snow";
  if (RAIN_CODES.has(code)) {
    if (code >= 95) return "Thunderstorm";
    if (code >= 80) return "Showers";
    if (code >= 61) return "Rain";
    return "Drizzle";
  }
  if (FOG_CODES.has(code)) return "Fog";
  if (code === 0) return "Clear";
  if (code === 1) return "Mainly clear";
  if (code === 2) return "Partly cloudy";
  if (code === 3) return "Overcast";
  return "Weather";
}

export function pickWeatherGif(input: {
  weatherCode: number;
  isDay: boolean;
  localMinutes: number;
  localMonth: number;
  sunTimes?: { sunriseMinutes: number; sunsetMinutes: number } | null;
}): WeatherGifId {
  const { weatherCode, isDay, localMinutes, localMonth, sunTimes = null } = input;
  const night = isNightVisual(localMinutes, isDay, sunTimes);
  const sunset = !night && isSunsetWindow(localMinutes, sunTimes);

  if (SNOW_HEAVY_CODES.has(weatherCode)) return "snow-heavy";
  if (SNOW_LIGHT_CODES.has(weatherCode)) return "snow-light";
  if (RAIN_CODES.has(weatherCode)) return "rainy";
  if (FOG_CODES.has(weatherCode)) return "mystical";

  if (
    !night &&
    CHERRY_MONTHS.has(localMonth) &&
    CHERRY_WEATHER_CODES.has(weatherCode)
  ) {
    return "cherry";
  }

  if (weatherCode === 0) {
    if (night) return "clearnight";
    return sunset ? "sunset" : "sunny";
  }

  if (weatherCode === 1) {
    if (night) return "clearnight";
    return sunset ? "sunset" : "cloudy-cum-sunnyday";
  }

  if (weatherCode === 2) {
    if (night) return "clearnight";
    return sunset ? "sunset" : "cloudy-cum-sunnyday";
  }

  if (weatherCode === 3) {
    return night ? "clearnight" : "cloudyday";
  }

  return night ? "clearnight" : "day";
}

export function celsiusToFahrenheit(celsius: number): number {
  return Math.round((celsius * 9) / 5 + 32);
}
