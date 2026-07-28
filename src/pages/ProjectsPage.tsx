import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ProjectCaseStudy from "../components/ProjectCaseStudy";
import ProjectGithubLink from "../components/ProjectGithubLink";
import { projectItems, type ProjectItem } from "../data/projectItems";
import "../styles/projectHero.css";
import "./ProjectsPage.css";

const visibleProjectItems = projectItems.filter((item) => !item.hidden);

function ProjectStrip({
  item,
  index,
  isExpanded,
  onSelect,
}: {
  item: ProjectItem;
  index: number;
  isExpanded: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={isExpanded ? -1 : 0}
      className={`projects-strip${isExpanded ? " is-expanded" : ""}`}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      aria-expanded={isExpanded}
      aria-label={`${item.title}, ${item.date}`}
    >
      <span className="projects-strip-spine" aria-hidden="true">
        <span className="projects-strip-spine-label">{item.title}</span>
      </span>

      <div className="projects-strip-panel" aria-hidden={!isExpanded}>
        {isExpanded ? (
          <div className="projects-strip-preview">
            <span className="projects-strip-preview-title">{item.title}</span>
          </div>
        ) : null}

        {isExpanded ? (
          <div className="projects-strip-body">
            <time className="projects-strip-date" dateTime={item.date}>
              {item.date}
            </time>
          </div>
        ) : null}
      </div>

      <span className="projects-strip-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

function ProjectDetail({ item }: { item: ProjectItem }) {
  if (item.sections?.length) {
    return <ProjectCaseStudy item={item} />;
  }

  const eyebrow = `${item.tags.slice(0, 2).join(" · ").toUpperCase()} · ${item.status.toUpperCase()} ${item.date.split(" ").pop()}`;

  return (
    <section className="projects-detail" aria-labelledby={`project-detail-${item.id}`}>
      <p className="projects-detail-eyebrow">{eyebrow}</p>

      <h2 className="projects-detail-headline" id={`project-detail-${item.id}`}>
        {item.overviewTitle}
      </h2>

      <div className="projects-detail-lead-row">
        <p className="projects-detail-lead">{item.overview}</p>
        <ProjectGithubLink url={item.url} title={item.title} />
      </div>

      <div className="project-hero">
        {item.media ? (
          item.mediaType === "video" ? (
            <video
              key={item.media}
              src={item.media}
              className="project-hero-media"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={item.title}
            />
          ) : (
            <img
              key={item.media}
              src={item.media}
              alt=""
              className="project-hero-media"
              loading="lazy"
            />
          )
        ) : (
          <div
            className="project-hero-media project-hero-media--placeholder"
            style={
              {
                "--strip-color": `hsl(${item.hue}, 42%, 88%)`,
                "--strip-color-dark": `hsl(${item.hue}, 32%, 28%)`,
              } as React.CSSProperties
            }
            aria-hidden="true"
          />
        )}
      </div>

      <div className="projects-detail-meta">
        <div className="projects-detail-field">
          <span className="projects-detail-label">Role</span>
          <p className="projects-detail-value">{item.role}</p>
        </div>
        <div className="projects-detail-field">
          <span className="projects-detail-label">Timeline</span>
          <ul className="projects-detail-skills">
            {item.timeline.split(" · ").map((part) => (
              <li key={part.trim()}>{part.trim()}</li>
            ))}
          </ul>
        </div>
        <div className="projects-detail-field">
          <span className="projects-detail-label">Team</span>
          <ul className="projects-detail-skills">
            {item.team.split(",").map((name) => (
              <li key={name.trim()}>{name.trim()}</li>
            ))}
          </ul>
        </div>
        <div className="projects-detail-field">
          <span className="projects-detail-label">Skills</span>
          <ul className="projects-detail-skills">
            {item.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function resolveProjectIdFromHash(hash: string): string | null {
  const id = hash.replace(/^#/, "");
  return visibleProjectItems.some((item) => item.id === id) ? id : null;
}

export default function ProjectsPage() {
  const location = useLocation();
  const [mobilePickerOpen, setMobilePickerOpen] = useState(false);
  const [activeId, setActiveId] = useState(() => {
    const fromHash = resolveProjectIdFromHash(window.location.hash);
    return fromHash ?? visibleProjectItems[0]?.id ?? "";
  });
  const activeItem =
    visibleProjectItems.find((item) => item.id === activeId) ?? visibleProjectItems[0];

  useEffect(() => {
    const fromHash = resolveProjectIdFromHash(location.hash);
    if (fromHash) setActiveId(fromHash);
    setMobilePickerOpen(false);
  }, [location.hash]);

  const selectProject = (id: string) => {
    if (id === activeId) {
      setMobilePickerOpen(false);
      return;
    }
    setActiveId(id);
    setMobilePickerOpen(false);
    window.history.replaceState(null, "", `#${id}`);
  };

  // Scroll to detail only when arriving via URL hash (e.g. home learning cards), not strip clicks.
  useEffect(() => {
    if (!location.hash) return;

    requestAnimationFrame(() => {
      document
        .querySelector(".case-study, .projects-detail")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  const stripColumns = useMemo(
    () =>
      visibleProjectItems
        .map((item) =>
          item.id === activeId ? "minmax(150px, 3fr)" : "minmax(44px, 0.45fr)",
        )
        .join(" "),
    [activeId],
  );

  const stripRows = useMemo(
    () =>
      visibleProjectItems
        .map((item) =>
          item.id === activeId ? "minmax(140px, 1fr)" : "minmax(52px, auto)",
        )
        .join(" "),
    [activeId],
  );

  return (
    <PageLayout className="page page-projects">
      <div className="projects-page">
        <header className="projects-page-header">
          <Link to="/" className="projects-page-back">
            ← back
          </Link>
          <h1 className="projects-page-title">projects</h1>
          <p className="projects-page-hint">experiments, systems, side builds, and hackathons</p>
        </header>

        <div className="projects-main">
          <p className="projects-intro-lead">
            Most of this is me figuring things out, building, and learning as I go.
          </p>

          <div className={`projects-mobile-picker${mobilePickerOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="projects-mobile-picker-toggle"
              aria-expanded={mobilePickerOpen}
              aria-controls="projects-mobile-picker-list"
              onClick={() => setMobilePickerOpen((open) => !open)}
            >
              <span className="projects-mobile-picker-label">View</span>
              <span className="projects-mobile-picker-title">{activeItem?.title}</span>
            </button>

            <div id="projects-mobile-picker-list" className="projects-mobile-picker-menu">
              {visibleProjectItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`projects-mobile-picker-option${item.id === activeId ? " is-active" : ""}`}
                  onClick={() => selectProject(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div
            className="projects-accordion"
            style={
              {
                "--strip-columns": stripColumns,
                "--strip-rows": stripRows,
              } as React.CSSProperties
            }
          >
            {visibleProjectItems.map((item, index) => (
              <ProjectStrip
                key={item.id}
                item={item}
                index={index}
                isExpanded={activeId === item.id}
                onSelect={() => selectProject(item.id)}
              />
            ))}
          </div>

          {activeItem ? <ProjectDetail key={activeItem.id} item={activeItem} /> : null}
        </div>
      </div>
    </PageLayout>
  );
}
