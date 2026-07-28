import { SafariWindow } from "./SafariWindow";
import "./SafariMacBookFrame.css";

type SafariMacBookFrameProps = {
  src: string;
  alt: string;
  url?: string;
  mediaType?: "image" | "video";
  poster?: string;
};

export default function SafariMacBookFrame({
  src,
  alt,
  url = "localhost",
  mediaType = "image",
  poster,
}: SafariMacBookFrameProps) {
  return (
    <div className="safari-macbook" aria-hidden={false}>
      <div className="safari-macbook__lid">
        <div className="safari-macbook__bezel">
          <div className="safari-macbook__screen">
            <SafariWindow src={src} alt={alt} url={url} mediaType={mediaType} poster={poster} />
          </div>
        </div>
      </div>

      <div className="safari-macbook__base" aria-hidden="true">
        <span className="safari-macbook__notch" />
      </div>
    </div>
  );
}
