import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { galleryItems, type GalleryItem } from "../data/galleryItems";
import "./GalleryPage.css";

function GalleryMasonryItem({
  item,
  index,
}: {
  item: GalleryItem;
  index: number;
}) {
  const itemRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(!item.image);

  useEffect(() => {
    const node = itemRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { rootMargin: "120px 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    if (image.complete && image.naturalWidth > 0) setLoaded(true);
  }, [item.image]);

  const revealed = inView && loaded;

  return (
    <article
      ref={itemRef}
      className={`gallery-masonry-item${revealed ? " is-revealed" : ""}`}
      style={
        {
          "--reveal-delay": `${Math.min(index % 6, 5) * 70}ms`,
          "--media-aspect": String(item.aspectRatio),
        } as CSSProperties
      }
    >
      {item.image ? (
        <img
          ref={imageRef}
          src={item.image}
          alt=""
          className="gallery-masonry-media"
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      ) : (
        <div
          className="gallery-masonry-media gallery-masonry-media--placeholder"
          style={
            {
              "--placeholder-color": `hsl(${item.hue}, 58%, 82%)`,
              "--placeholder-color-dark": `hsl(${item.hue}, 42%, 32%)`,
            } as CSSProperties
          }
          aria-hidden="true"
        />
      )}
      <h2 className="gallery-masonry-title">{item.title}</h2>
      <p className="gallery-masonry-meta">{item.meta}</p>
    </article>
  );
}

export default function GalleryPage() {
  return (
    <PageLayout className="page page-gallery">
      <div className="gallery-page">
        <header className="gallery-page-header">
          <Link to="/" className="gallery-page-back">
            ← back
          </Link>
          <h1 className="gallery-page-title">gallery</h1>
          <p className="gallery-page-hint">memories, builds, and moments</p>
        </header>

        <div className="gallery-masonry">
          {galleryItems.map((item, index) => (
            <GalleryMasonryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
