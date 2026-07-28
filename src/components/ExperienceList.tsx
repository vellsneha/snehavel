import { useCallback, useEffect, useRef, useState, type AnimationEvent } from "react";
import { createPortal } from "react-dom";
import type { ExperienceItem } from "../data/experienceItems";
import "./ExperienceList.css";
import { useTheme } from "../context/ThemeContext";

type ExperienceListProps = {
  items: ExperienceItem[];
};

type OverlayState = {
  id: string;
  top: number;
  left: number;
  width: number;
};

const OVERLAY_GAP = 8;
const OVERLAY_INSET = 14;
const COMPACT_LOGO_IDS = new Set(["gdsc"]);
const SMALL_LOGO_IDS = new Set<string>([]);
const UMD_LOGO_IDS = new Set([
  "tltc-math-coach",
  "aap-math-tutor",
  "umd-research",
  "umd-grad",
]);

function getLogoWrapClass(id: string) {
  if (SMALL_LOGO_IDS.has(id)) return "experience-logo-wrap experience-logo-wrap--sm";
  if (COMPACT_LOGO_IDS.has(id)) return "experience-logo-wrap";
  if (UMD_LOGO_IDS.has(id)) return "experience-logo-wrap experience-logo-wrap--umd";
  return "experience-logo-wrap experience-logo-wrap--lg";
}

function getOverlayPosition(el: HTMLElement): Omit<OverlayState, "id"> {
  const anchor = el.querySelector<HTMLElement>(".experience-summary") ?? el;
  const rect = anchor.getBoundingClientRect();

  let left = rect.left - OVERLAY_INSET;
  let width = rect.width * 1.06 + OVERLAY_INSET;

  if (left < 12) {
    width -= 12 - left;
    left = 12;
  }

  width = Math.min(width, window.innerWidth - left - 12);

  return {
    top: rect.bottom + OVERLAY_GAP,
    left,
    width,
  };
}

export default function ExperienceList({ items }: ExperienceListProps) {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [overlay, setOverlay] = useState<OverlayState | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const hideTimerRef = useRef<number | null>(null);

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const showOverlay = useCallback(
    (id: string, el: HTMLLIElement) => {
      clearHideTimer();
      setIsClosing(false);
      setOverlay({ id, ...getOverlayPosition(el) });
    },
    [clearHideTimer],
  );

  const beginClose = useCallback(() => {
    setIsClosing(true);
  }, []);

  const scheduleHide = useCallback(() => {
    clearHideTimer();
    hideTimerRef.current = window.setTimeout(beginClose, 100);
  }, [clearHideTimer, beginClose]);

  const handleOverlayAnimationEnd = useCallback((event: AnimationEvent<HTMLDivElement>) => {
    if (event.animationName !== "experience-overlay-out") return;
    setOverlay(null);
    setIsClosing(false);
  }, []);

  const activeItem = overlay ? items.find((item) => item.id === overlay.id) : null;

  useEffect(() => {
    const media = window.matchMedia("(max-width: 720px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!overlay) return;

    const updatePosition = () => {
      const el = listRef.current?.querySelector<HTMLLIElement>(`[data-id="${overlay.id}"]`);
      if (!el) return;
      setOverlay({ id: overlay.id, ...getOverlayPosition(el) });
    };

    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [overlay]);

  useEffect(() => () => clearHideTimer(), [clearHideTimer]);

  useEffect(() => {
    if (!isMobile) {
      setExpandedId(null);
      return;
    }

    setOverlay(null);
    setIsClosing(false);
  }, [isMobile]);

  return (
    <>
      <ul ref={listRef} className="experience-list">
        {items.map((item) => (
          <li
            key={item.id}
            data-id={item.id}
            className={`experience-item${overlay?.id === item.id || expandedId === item.id ? " is-active" : ""}`}
            tabIndex={0}
            onClick={() => {
              if (!isMobile) return;
              setExpandedId((current) => (current === item.id ? null : item.id));
            }}
            onMouseEnter={(event) => {
              if (isMobile) return;
              showOverlay(item.id, event.currentTarget);
            }}
            onMouseLeave={() => {
              if (isMobile) return;
              scheduleHide();
            }}
            onFocus={(event) => {
              if (isMobile) return;
              showOverlay(item.id, event.currentTarget);
            }}
            onBlur={(event) => {
              if (isMobile) return;
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                scheduleHide();
              }
            }}
          >
            <div className="experience-summary">
              <p className="experience-heading">
                <span className="experience-role">{item.role}</span>
                <span className="experience-at">{" at\u00A0"}</span>
                  <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  <span className={getLogoWrapClass(item.id)}>
                    <img
                      src={theme === "dark" && item.logoDark ? item.logoDark : item.logo}
                      alt=""
                      className="experience-logo"
                      loading="lazy"
                    />
                  </span>
                  <span className="experience-company">{item.company}</span>
                </a>
              </p>
              <time className="experience-period" dateTime={item.period}>
                {item.period}
              </time>
            </div>
            {isMobile && expandedId === item.id ? (
              <div className="experience-desc-inline">
                <p className="experience-desc">{item.description}</p>
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      {!isMobile && activeItem && overlay
        ? createPortal(
            <div
              className={`experience-desc-overlay${isClosing ? " is-leaving" : " is-entering"}`}
              style={{
                top: overlay.top,
                left: overlay.left,
                width: overlay.width,
              }}
              onMouseEnter={() => {
                clearHideTimer();
                setIsClosing(false);
              }}
              onMouseLeave={scheduleHide}
              onAnimationEnd={handleOverlayAnimationEnd}
            >
              <p className="experience-desc">{activeItem.description}</p>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
