import { SafariWindow } from "./SafariWindow";
import "./SafariBrowserFrame.css";

type SafariBrowserFrameProps = {
  src: string;
  alt: string;
  url?: string;
  compact?: boolean;
  fullHeight?: boolean;
  mediaType?: "image" | "video" | "embed";
  poster?: string;
};

export default function SafariBrowserFrame({
  src,
  alt,
  url = "localhost",
  compact = false,
  fullHeight = false,
  mediaType = "image",
  poster,
}: SafariBrowserFrameProps) {
  return (
    <div
      className={`safari-browser${compact ? " safari-browser--compact" : ""}${fullHeight ? " safari-browser--full" : ""}`}
    >
      <SafariWindow
        src={src}
        alt={alt}
        url={url}
        compact={compact}
        fullHeight={fullHeight}
        mediaType={mediaType}
        poster={poster}
      />
    </div>
  );
}
