import { useEffect, useRef, useState } from "react";

type LearningVideoProps = {
  src: string;
  title: string;
  mediaType?: "image" | "video";
};

export default function LearningVideo({ src, title, mediaType = "video" }: LearningVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (mediaType !== "video") return;
    const root = wrapRef.current;
    if (!root || typeof IntersectionObserver === "undefined") {
      setIsActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting && entry.intersectionRatio >= 0.4);
      },
      { threshold: [0, 0.4, 0.75] },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [mediaType, src]);

  useEffect(() => {
    if (mediaType !== "video") return;
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive, mediaType, src]);

  return (
    <div className="home-learning-video-wrap" ref={wrapRef}>
      {mediaType === "image" ? (
        <img
          src={src}
          alt=""
          className="home-learning-video"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      ) : (
        <video
          ref={videoRef}
          className="home-learning-video"
          src={isActive ? src : undefined}
          loop
          muted
          playsInline
          preload="none"
          aria-label={title}
        />
      )}
    </div>
  );
}
