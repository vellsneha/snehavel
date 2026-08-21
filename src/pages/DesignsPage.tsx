import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import NdaGate from "../components/NdaGate";
import SafariMacBookFrame from "../components/SafariMacBookFrame";
import SafariBrowserFrame from "../components/SafariBrowserFrame";
import DesignCardFrame from "../components/DesignCardFrame";
import PhoneMockupFrame from "../components/PhoneMockupFrame";
import {
  designContentById,
  type DesignContentSection,
  type DesignContextNote,
  type DesignPressNote,
  type DesignScreen,
  type DesignScreenFrame,
  type DesignScreenLayout,
} from "../data/designContent";
import { designItems, type DesignItem } from "../data/designItems";
import { useNdaAccess } from "../hooks/useNdaAccess";
import "./DesignsPage.css";

function resolveDesignIdFromHash(hash: string): string | null {
  const id = hash.replace(/^#/, "");
  return designItems.some((item) => item.id === id) ? id : null;
}

function DesignPlaceholderFrame({
  label = "Coming soon",
  caption,
}: {
  label?: string;
  caption?: string;
}) {
  return (
    <div className="design-placeholder-frame" aria-label={caption ?? label}>
      <div className="design-placeholder-frame__surface">
        <span className="design-placeholder-frame__label">{label}</span>
        {caption ? (
          <span className="design-placeholder-frame__caption">{caption}</span>
        ) : null}
      </div>
    </div>
  );
}

function DesignStrip({
  item,
  index,
  isExpanded,
  onSelect,
}: {
  item: DesignItem;
  index: number;
  isExpanded: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={isExpanded ? -1 : 0}
      className={`designs-strip${isExpanded ? " is-expanded" : ""}`}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      aria-expanded={isExpanded}
      aria-label={`${item.title}, ${item.date}${item.ndaProtected ? ", NDA protected" : ""}`}
    >
      <span className="designs-strip-spine" aria-hidden="true">
        <span className="designs-strip-spine-label">{item.title}</span>
      </span>

      <div className="designs-strip-panel" aria-hidden={!isExpanded}>
        <div className="designs-strip-preview">
          <span className="designs-strip-preview-title">{item.title}</span>
        </div>

        <div className="designs-strip-body">
          <time className="designs-strip-date" dateTime={item.date}>
            {item.date}
          </time>
        </div>
      </div>

      <span className="designs-strip-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

function DesignScreenFrame({
  screen,
  layout = "full",
}: {
  screen: DesignScreen;
  layout?: DesignScreenLayout;
}) {
  if (screen.placeholder) {
    return (
      <DesignPlaceholderFrame
        label={screen.placeholderLabel}
        caption={screen.caption}
      />
    );
  }

  const frame: DesignScreenFrame =
    screen.frame ??
    (layout === "phones-mockup"
      ? "phone"
      : layout === "phones"
        ? "phone-flat"
        : layout === "explorer"
          ? "browser"
          : "macbook");

  switch (frame) {
    case "browser":
      return (
        <SafariBrowserFrame
          src={screen.src!}
          alt={screen.alt ?? screen.caption ?? ""}
          url={screen.url}
          compact={screen.compact}
          fullHeight={screen.fullHeight}
          mediaType={screen.mediaType}
          poster={screen.poster}
        />
      );
    case "card":
      return <DesignCardFrame src={screen.src!} alt={screen.alt ?? screen.caption ?? ""} />;
    case "phone-flat":
      return (
        <div className="designs-gallery-frame designs-gallery-frame--phone">
          <img
            src={screen.src!}
            alt={screen.alt ?? screen.caption ?? ""}
            className="designs-gallery-media"
            loading="lazy"
          />
        </div>
      );
    case "phone":
      return <PhoneMockupFrame src={screen.src!} alt={screen.alt ?? screen.caption ?? ""} />;
    case "macbook":
    default:
      return (
        <SafariMacBookFrame
          src={screen.src!}
          alt={screen.alt ?? screen.caption ?? ""}
          url={screen.url}
          mediaType={screen.mediaType}
          poster={screen.poster}
        />
      );
  }
}

const DESIGN_STRIP_TRANSITION_MS = 780;
const SCROLLABLE_MOCKUP_SELECTOR = ".safari-content, .phone-mockup__viewport";

function resetScrollInContainer(root: ParentNode) {
  root.querySelectorAll<HTMLElement>(SCROLLABLE_MOCKUP_SELECTOR).forEach((element) => {
    element.scrollTop = 0;
  });
}

function scrollElementToPageTop(element: Element, offset = 12) {
  const top = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: Math.max(0, top - offset), behavior: "auto" });
}

function runAfterLayout(callback: () => void) {
  requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}

function DesignScreenExplorer({
  screens,
  layout = "explorer",
  centerImages = false,
}: {
  screens: NonNullable<DesignContentSection["screens"]>;
  layout?: DesignScreenLayout;
  centerImages?: boolean;
}) {
  const listId = useId();
  const navRef = useRef<HTMLDivElement>(null);
  const explorerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = screens[activeIndex] ?? screens[0];
  const skipExplorerScrollRef = useRef(true);

  useEffect(() => {
    setActiveIndex(0);
    skipExplorerScrollRef.current = true;
  }, [screens]);

  useEffect(() => {
    if (skipExplorerScrollRef.current) {
      skipExplorerScrollRef.current = false;
      return;
    }

    runAfterLayout(() => {
      const explorer = explorerRef.current;
      if (!explorer) return;

      resetScrollInContainer(explorer);
      scrollElementToPageTop(explorer);
    });
  }, [activeIndex]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || !nav.contains(document.activeElement)) return;
    const activeTab = document.getElementById(`${listId}-tab-${activeIndex}`);
    activeTab?.focus();
  }, [activeIndex, listId]);

  if (!activeScreen) return null;

  const wrapCenter = (node: ReactNode) =>
    centerImages ? <div className="designs-visual-page-center">{node}</div> : node;

  const goTo = (index: number) => {
    const next = (index + screens.length) % screens.length;
    setActiveIndex(next);
  };

  return (
    <div ref={explorerRef} className="designs-explorer">
      <div
        ref={navRef}
        className="designs-explorer-nav"
        role="tablist"
        aria-label="Product pages"
        aria-orientation="vertical"
      >
        {screens.map((screen, index) => {
          const title = screen.caption ?? `Page ${index + 1}`;
          const isActive = index === activeIndex;
          const tabId = `${listId}-tab-${index}`;
          const panelId = `${listId}-panel`;

          return (
            <button
              key={`${screen.src ?? "screen"}-${title}`}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className={`designs-explorer-tab${isActive ? " is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                  event.preventDefault();
                  goTo(index + 1);
                } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                  event.preventDefault();
                  goTo(index - 1);
                } else if (event.key === "Home") {
                  event.preventDefault();
                  setActiveIndex(0);
                } else if (event.key === "End") {
                  event.preventDefault();
                  setActiveIndex(screens.length - 1);
                }
              }}
            >
              <span className="designs-explorer-tab-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="designs-explorer-tab-label">{title}</span>
            </button>
          );
        })}
      </div>

      <figure
        className="designs-explorer-stage"
        role="tabpanel"
        id={`${listId}-panel`}
        aria-labelledby={`${listId}-tab-${activeIndex}`}
      >
        {wrapCenter(
          <div className="designs-explorer-frame">
            <DesignScreenFrame
              key={`${activeScreen.src ?? "placeholder"}-${activeIndex}`}
              screen={activeScreen}
              layout={layout}
            />
          </div>,
        )}
        {activeScreen.caption ? (
          <figcaption
            className="designs-gallery-caption designs-explorer-caption"
            key={`${activeScreen.caption}-${activeScreen.url ?? ""}`}
          >
            {activeScreen.caption}
            {activeScreen.url ? (
              <span className="designs-explorer-url">{activeScreen.url}</span>
            ) : null}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}

function DesignScreenGallery({
  screens,
  layout = "full",
  centerImages = false,
}: {
  screens: NonNullable<DesignContentSection["screens"]>;
  layout?: DesignScreenLayout;
  centerImages?: boolean;
}) {
  if (layout === "explorer") {
    return (
      <DesignScreenExplorer
        screens={screens}
        layout={layout}
        centerImages={centerImages}
      />
    );
  }

  const wrapCenter = (node: ReactNode) =>
    centerImages ? <div className="designs-visual-page-center">{node}</div> : node;

  const renderItem = (screen: (typeof screens)[number], index: number) => {
    const caption = screen.caption;
    const [captionTitle, captionDetail] = caption?.includes(": ")
      ? (caption.split(": ") as [string, string])
      : [caption, undefined];

    return (
      <figure
        key={`${screen.src ?? "placeholder"}-${screen.caption ?? ""}`}
        className="designs-gallery-item"
      >
        {wrapCenter(<DesignScreenFrame screen={screen} layout={layout} />)}
        {caption ? (
          <figcaption className="designs-gallery-caption">
            {layout === "full" ? (
              <span className="designs-gallery-caption-index">
                {String(index + 1).padStart(2, "0")}
              </span>
            ) : null}
            <span>
              {captionTitle}
              {captionDetail ? (
                <span className="designs-gallery-caption-detail">{captionDetail}</span>
              ) : null}
            </span>
          </figcaption>
        ) : null}
      </figure>
    );
  };

  if (layout === "columns") {
    const leftScreens = screens.filter((_, index) => index % 2 === 0);
    const rightScreens = screens.filter((_, index) => index % 2 === 1);

    return (
      <div className="designs-gallery designs-gallery--columns">
        <div className="designs-gallery-column">
          {leftScreens.map((screen, index) => renderItem(screen, index * 2))}
        </div>
        <div className="designs-gallery-column">
          {rightScreens.map((screen, index) => renderItem(screen, index * 2 + 1))}
        </div>
      </div>
    );
  }

  return (
    <div className={`designs-gallery designs-gallery--${layout}`}>
      {screens.map((screen, index) => renderItem(screen, index))}
    </div>
  );
}

function renderMarkedText(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function DesignSectionBlock({
  section,
  centerImages = false,
}: {
  section: DesignContentSection;
  centerImages?: boolean;
}) {
  return (
    <section className="designs-detail-section">
      <header className="designs-detail-section-header">
        <span className="designs-detail-section-label">{section.label}</span>
        {section.title ? <h3 className="designs-detail-section-title">{section.title}</h3> : null}
      </header>
      {section.body ? (
        <p className="designs-detail-body">{renderMarkedText(section.body)}</p>
      ) : null}
      {section.points?.length ? (
        <ul className="designs-detail-points">
          {section.points.map((point) => (
            <li key={point}>{renderMarkedText(point)}</li>
          ))}
        </ul>
      ) : null}
      {section.screens?.length ? (
        <DesignScreenGallery
          screens={section.screens}
          layout={section.layout}
          centerImages={centerImages}
        />
      ) : null}
    </section>
  );
}

function DesignPressBlock({ note }: { note: DesignPressNote }) {
  const image = note.src ? (
    <img
      src={note.src}
      alt={note.alt ?? note.headline}
      className="designs-press-image"
      loading="lazy"
    />
  ) : null;
  const extraImage = note.extraSrc ? (
    <img
      src={note.extraSrc}
      alt={note.extraAlt ?? note.headline}
      className="designs-press-image"
      loading="lazy"
    />
  ) : null;

  return (
    <aside className="designs-press" aria-label="Press context">
      {note.src ? (
        <>
          {note.href ? (
            <a
              href={note.href}
              target="_blank"
              rel="noopener noreferrer"
              className="designs-press-media"
            >
              {image}
            </a>
          ) : (
            <div className="designs-press-media">{image}</div>
          )}
          {extraImage ? <div className="designs-press-media">{extraImage}</div> : null}
        </>
      ) : (
        <>
          <div className="designs-press-meta">
            <span className="designs-press-source">{note.source}</span>
            {note.section ? (
              <>
                <span className="designs-press-sep" aria-hidden="true">
                  ·
                </span>
                <span className="designs-press-section">{note.section}</span>
              </>
            ) : null}
          </div>
          <h2 className="designs-press-headline">
            {note.href ? (
              <a
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                className="designs-press-headline-link"
              >
                {note.headline}
              </a>
            ) : (
              note.headline
            )}
          </h2>
          {note.points?.length ? (
            <ul className="designs-press-points">
              {note.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </>
      )}
    </aside>
  );
}

function DesignProjectLink({ projectId, projectLabel }: { projectId: string; projectLabel: string }) {
  return (
    <p className="designs-detail-context">
      See{" "}
      <Link to={`/projects#${projectId}`} className="designs-detail-context-link">
        {projectLabel}
      </Link>{" "}
      for the engineering build.
    </p>
  );
}

function DesignReadMoreLink({ href, label }: { href: string; label: string }) {
  return (
    <p className="designs-detail-context">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="designs-detail-context-link"
      >
        {label}
      </a>
    </p>
  );
}

function DesignContextBlock({ note }: { note: DesignContextNote }) {
  return (
    <p className="designs-detail-context">
      {note.before}
      {note.linkDesignId && note.linkLabel ? (
        <Link to={`/designs#${note.linkDesignId}`} className="designs-detail-context-link">
          {note.linkLabel}
        </Link>
      ) : null}
      {note.after ?? null}
    </p>
  );
}

function DesignIntroColumn({
  label,
  title,
  body,
  titleId,
}: {
  label: string;
  title: string;
  body: string;
  titleId?: string;
}) {
  return (
    <div className="designs-detail-column">
      <span className="designs-detail-section-label">{label}</span>
      {titleId ? (
        <h2 className="designs-detail-column-title" id={titleId}>
          {title}
        </h2>
      ) : (
        <h3 className="designs-detail-column-title">{title}</h3>
      )}
      <p className="designs-detail-body">{body}</p>
    </div>
  );
}

function DesignDetail({
  item,
  centerImages = false,
  scrollToken = 0,
  isLocked = false,
  onUnlock,
  unlockError,
  onClearUnlockError,
}: {
  item: DesignItem;
  centerImages?: boolean;
  scrollToken?: number;
  isLocked?: boolean;
  onUnlock: (password: string) => Promise<boolean>;
  unlockError: string | null;
  onClearUnlockError: () => void;
}) {
  const detailRef = useRef<HTMLElement>(null);
  const content = designContentById[item.id];
  const columnIntroCount = content?.columnIntroCount ?? 0;
  const columnSections =
    columnIntroCount > 0 ? content!.sections.slice(0, columnIntroCount) : [];
  const restSections =
    columnIntroCount > 0 ? content!.sections.slice(columnIntroCount) : content?.sections ?? [];

  useEffect(() => {
    if (scrollToken === 0 || isLocked) return;

    const detail = detailRef.current;
    if (!detail) return;

    const resetDetailView = () => {
      resetScrollInContainer(detail);
      scrollElementToPageTop(detail);
    };

    const timeout = window.setTimeout(() => {
      runAfterLayout(resetDetailView);
    }, DESIGN_STRIP_TRANSITION_MS);

    return () => window.clearTimeout(timeout);
  }, [item.id, scrollToken, isLocked]);

  if (isLocked) {
    return (
      <section
        ref={detailRef}
        className="designs-detail designs-detail--nda"
        aria-labelledby={`design-detail-${item.id}`}
      >
        <NdaGate
          title={item.title}
          summary={item.overview}
          skills={item.skills}
          onUnlock={onUnlock}
          error={unlockError}
          onClearError={onClearUnlockError}
        />
      </section>
    );
  }

  return (
    <section
      ref={detailRef}
      className={`designs-detail${centerImages ? " designs-detail--centered" : ""}`}
      aria-labelledby={`design-detail-${item.id}`}
    >
      <header className="designs-detail-intro">
        <p className="designs-detail-eyebrow">{item.title}</p>
        <h2 className="designs-detail-headline" id={`design-detail-${item.id}`}>
          {item.overviewTitle}
        </h2>
        <p className="designs-detail-lead-copy">{item.overview}</p>
      </header>

      <div className="designs-detail-meta">
        <div className="designs-detail-field">
          <span className="designs-detail-label">Role</span>
          <p className="designs-detail-value">{item.role}</p>
        </div>
        <div className="designs-detail-field">
          <span className="designs-detail-label">Timeline</span>
          <p className="designs-detail-value">{item.timeline}</p>
        </div>
        <div className="designs-detail-field">
          <span className="designs-detail-label">Team</span>
          <p className="designs-detail-value">{item.team}</p>
        </div>
        <div className="designs-detail-field">
          <span className="designs-detail-label">Skills</span>
          <ul className="designs-detail-skills">
            {item.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {content?.lead ? (
        <div className={`designs-detail-lead${centerImages ? " designs-detail-lead--page-center" : ""}`}>
          <DesignScreenFrame screen={content.lead} />
        </div>
      ) : null}

      {content?.press ? <DesignPressBlock note={content.press} /> : null}

      {item.projectId && item.projectLabel ? (
        <DesignProjectLink projectId={item.projectId} projectLabel={item.projectLabel} />
      ) : null}

      {item.readMoreHref && item.readMoreLabel ? (
        <DesignReadMoreLink href={item.readMoreHref} label={item.readMoreLabel} />
      ) : null}

      {content?.context ? <DesignContextBlock note={content.context} /> : null}

      {columnSections.length > 0 ? (
        <div className="designs-detail-columns">
          {columnSections.map((section) => (
            <DesignIntroColumn
              key={section.label}
              label={section.label}
              title={section.title ?? ""}
              body={section.body ?? ""}
            />
          ))}
        </div>
      ) : null}

      {restSections.map((section) => (
        <DesignSectionBlock
          key={`${section.label}-${section.title ?? ""}`}
          section={section}
          centerImages={centerImages}
        />
      ))}
    </section>
  );
}

export default function DesignsPage() {
  const location = useLocation();
  const [mobilePickerOpen, setMobilePickerOpen] = useState(false);
  const [activeId, setActiveId] = useState(() => {
    const fromHash = resolveDesignIdFromHash(window.location.hash);
    return fromHash ?? designItems[0]?.id ?? "";
  });
  const [scrollToken, setScrollToken] = useState(() =>
    resolveDesignIdFromHash(window.location.hash) ? 1 : 0,
  );
  const activeItem = designItems.find((item) => item.id === activeId) ?? designItems[0];
  const activeContent = activeItem ? designContentById[activeItem.id] : undefined;
  const isCentered = Boolean(activeContent?.centered);
  const { isUnlocked, unlock, error: unlockError, clearError: clearUnlockError } = useNdaAccess();
  const isActiveLocked = Boolean(activeItem?.ndaProtected && !isUnlocked);

  useEffect(() => {
    const fromHash = resolveDesignIdFromHash(location.hash);
    if (!fromHash) return;

    setActiveId((current) => {
      if (current !== fromHash) setScrollToken((token) => token + 1);
      return fromHash;
    });
  }, [location.hash]);

  const selectDesign = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    setScrollToken((token) => token + 1);
    setMobilePickerOpen(false);
    window.history.replaceState(null, "", `#${id}`);
  };

  const stripColumns = useMemo(
    () =>
      designItems
        .map((item) =>
          item.id === activeId
            ? "minmax(200px, 5fr)"
            : "minmax(52px, 0.45fr)",
        )
        .join(" "),
    [activeId],
  );

  const stripRows = useMemo(
    () =>
      designItems
        .map((item) =>
          item.id === activeId
            ? "minmax(280px, 1fr)"
            : "minmax(52px, auto)",
        )
        .join(" "),
    [activeId],
  );

  return (
    <PageLayout className="page page-designs">
      <div className="designs-page">
        <header className="designs-page-header">
          <Link to="/" className="designs-page-back">
            ← back
          </Link>
          <h1 className="designs-page-title">designs</h1>
          <p className="designs-page-hint">interfaces, systems, and product thinking</p>
        </header>

        <div className={`designs-layout${isCentered ? " designs-layout--wide" : ""}`}>
          <aside className="designs-intro">
            <p className="designs-intro-lead">
              I enjoy planning and designing interfaces.
            </p>
          </aside>

          <div className="designs-main">
            <div className={`designs-mobile-picker${mobilePickerOpen ? " is-open" : ""}`}>
              <button
                type="button"
                className="designs-mobile-picker-toggle"
                aria-expanded={mobilePickerOpen}
                aria-controls="designs-mobile-picker-list"
                onClick={() => setMobilePickerOpen((open) => !open)}
              >
                <span className="designs-mobile-picker-label">View</span>
                <span className="designs-mobile-picker-title">{activeItem?.title}</span>
              </button>

              <div id="designs-mobile-picker-list" className="designs-mobile-picker-menu">
                {designItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`designs-mobile-picker-option${item.id === activeId ? " is-active" : ""}`}
                    onClick={() => selectDesign(item.id)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="designs-accordion"
              style={
                {
                  "--strip-columns": stripColumns,
                  "--strip-rows": stripRows,
                } as React.CSSProperties
              }
            >
              {designItems.map((item, index) => (
                <DesignStrip
                  key={item.id}
                  item={item}
                  index={index}
                  isExpanded={activeId === item.id}
                  onSelect={() => selectDesign(item.id)}
                />
              ))}
            </div>

            {activeItem ? (
              <DesignDetail
                key={activeItem.id}
                item={activeItem}
                centerImages={isCentered}
                scrollToken={scrollToken}
                isLocked={isActiveLocked}
                onUnlock={unlock}
                unlockError={unlockError}
                onClearUnlockError={clearUnlockError}
              />
            ) : null}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
