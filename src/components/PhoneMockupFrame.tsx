import "./PhoneMockupFrame.css";

type PhoneMockupFrameProps = {
  src: string;
  alt: string;
};

export default function PhoneMockupFrame({ src, alt }: PhoneMockupFrameProps) {
  return (
    <div className="phone-mockup">
      <div className="phone-mockup__device">
        <div className="phone-mockup__bezel">
          <div className="phone-mockup__screen">
            <span className="phone-mockup__island" aria-hidden="true" />
            <div className="phone-mockup__viewport">
              <img src={src} alt={alt} className="phone-mockup__media" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
