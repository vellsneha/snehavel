import "./DesignCardFrame.css";

type DesignCardFrameProps = {
  src: string;
  alt: string;
};

export default function DesignCardFrame({ src, alt }: DesignCardFrameProps) {
  return (
    <div className="design-card-frame">
      <img src={src} alt={alt} className="design-card-frame__media" loading="lazy" />
    </div>
  );
}
