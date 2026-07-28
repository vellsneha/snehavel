import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { galleryItems, type GalleryItem } from "../data/galleryItems";
import "./GalleryPage.css";

function useColumnCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 560px)");
    const medium = window.matchMedia("(max-width: 900px)");

    const update = () => {
      if (narrow.matches) setCount(1);
      else if (medium.matches) setCount(2);
      else setCount(3);
    };

    update();
    narrow.addEventListener("change", update);
    medium.addEventListener("change", update);
    return () => {
      narrow.removeEventListener("change", update);
      medium.removeEventListener("change", update);
    };
  }, []);

  return count;
}

function splitIntoColumns(items: GalleryItem[], columnCount: number) {
  const columns = Array.from({ length: columnCount }, () => [] as GalleryItem[]);
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });
  return columns;
}

function GalleryMasonryItem({ item }: { item: GalleryItem }) {
  return (
    <article className="gallery-masonry-item">
      {item.image ? (
        <img
          src={item.image}
          alt=""
          className="gallery-masonry-media"
          loading="lazy"
        />
      ) : (
        <div
          className="gallery-masonry-media gallery-masonry-media--placeholder"
          style={
            {
              aspectRatio: item.aspectRatio,
              "--placeholder-color": `hsl(${item.hue}, 58%, 82%)`,
              "--placeholder-color-dark": `hsl(${item.hue}, 42%, 32%)`,
            } as React.CSSProperties
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
  const columnCount = useColumnCount();
  const columns = useMemo(
    () => splitIntoColumns(galleryItems, columnCount),
    [columnCount],
  );

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
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="gallery-masonry-column">
              {column.map((item) => (
                <GalleryMasonryItem key={item.id} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
