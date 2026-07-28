import { useEffect, useRef, useState } from "react";
import "./SafariWindow.css";

type SafariWindowProps = {
  src: string;
  alt: string;
  url?: string;
  compact?: boolean;
  fullHeight?: boolean;
  mediaType?: "image" | "video";
  poster?: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function SafariWindow({
  src,
  alt,
  url = "localhost",
  compact = false,
  fullHeight = false,
  mediaType = "image",
  poster,
}: SafariWindowProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    root.scrollTop = 0;
  }, [src]);

  useEffect(() => {
    if (mediaType !== "video") return;
    const root = containerRef.current;
    if (!root || typeof IntersectionObserver === "undefined") {
      setIsActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      { threshold: [0, 0.35, 0.6] },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [mediaType, src]);

  useEffect(() => {
    if (mediaType !== "video") return;
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onDuration = () => setDuration(video.duration || 0);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("durationchange", onDuration);
    video.addEventListener("loadedmetadata", onDuration);

    if (isActive) {
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("durationchange", onDuration);
      video.removeEventListener("loadedmetadata", onDuration);
    };
  }, [src, mediaType, isActive]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const seekBy = (delta: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(Math.max(0, video.currentTime + delta), video.duration || 0);
  };

  const seekTo = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <>
      <div className="safari-toolbar">
        <div className="safari-toolbar__traffic" aria-hidden="true">
          <span className="safari-toolbar__light safari-toolbar__light--close" />
          <span className="safari-toolbar__light safari-toolbar__light--minimize" />
          <span className="safari-toolbar__light safari-toolbar__light--maximize" />
        </div>

        <div className="safari-toolbar__nav" aria-hidden="true">
          <span className="safari-toolbar__nav-btn" />
          <span className="safari-toolbar__nav-btn safari-toolbar__nav-btn--forward" />
        </div>

        <div className="safari-toolbar__address">
          <span className="safari-toolbar__lock" aria-hidden="true">
            <svg viewBox="0 0 12 14" width="10" height="12" focusable="false">
              <path
                d="M3 6V4.5C3 2.57 4.57 1 6.5 1S10 2.57 10 4.5V6h.5c.28 0 .5.22.5.5v6c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5H3Zm1 0h4V4.5C8 3.12 7.38 2 6.5 2S5 3.12 5 4.5V6Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="safari-toolbar__url">{url}</span>
        </div>

        <div className="safari-toolbar__actions" aria-hidden="true">
          <span className="safari-toolbar__action" />
          <span className="safari-toolbar__action safari-toolbar__action--share" />
          <span className="safari-toolbar__action safari-toolbar__action--tabs" />
        </div>
      </div>

      <div
        ref={containerRef}
        className={`safari-content${compact ? " safari-content--compact" : ""}${fullHeight ? " safari-content--full" : ""}${mediaType === "video" ? " safari-content--video" : ""}`}
      >
        {mediaType === "video" ? (
          <div className="safari-video">
            <video
              key={src}
              ref={videoRef}
              src={isActive ? src : undefined}
              poster={poster}
              className="safari-content__media"
              loop
              muted
              playsInline
              preload="none"
              aria-label={alt}
              onClick={togglePlay}
            />
            <div className="safari-video-controls" role="group" aria-label="Video controls">
              <button
                type="button"
                className="safari-video-btn"
                onClick={() => seekBy(-5)}
                aria-label="Back 5 seconds"
              >
                −5s
              </button>
              <button
                type="button"
                className="safari-video-btn safari-video-btn--play"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                type="button"
                className="safari-video-btn"
                onClick={() => seekBy(5)}
                aria-label="Forward 5 seconds"
              >
                +5s
              </button>
              <input
                type="range"
                className="safari-video-seek"
                min={0}
                max={duration || 0}
                step={0.1}
                value={Math.min(currentTime, duration || 0)}
                onChange={(event) => seekTo(Number(event.target.value))}
                aria-label="Seek"
              />
              <span className="safari-video-time">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className="safari-content__media"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
    </>
  );
}
