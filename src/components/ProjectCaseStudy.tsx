import type { ReactNode } from "react";
import type {
  ProjectContentSection,
  ProjectGridCard,
  ProjectSubsection,
} from "../data/projectContent";
import type { ProjectItem } from "../data/projectItems";
import { Link } from "react-router-dom";
import ProjectGithubLink from "./ProjectGithubLink";
import "../styles/projectHero.css";
import "./ProjectCaseStudy.css";

/** Supports ***bold italic***, **bold**, and *italic* in case-study copy. */
function formatInlineText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("***") && token.endsWith("***")) {
      nodes.push(
        <strong key={key}>
          <em>{token.slice(3, -3)}</em>
        </strong>,
      );
    } else if (token.startsWith("**") && token.endsWith("**")) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else {
      nodes.push(<em key={key}>{token.slice(1, -1)}</em>);
    }

    key += 1;
    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function ProjectChipRows({ rows }: { rows: string[][] }) {
  return (
    <div className="case-chip-rows">
      {rows.map((row) => (
        <ul key={row.join("|")} className="case-chip-row">
          {row.map((chip) => (
            <li key={chip} className="case-chip">
              {chip}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

function ProjectStats({ stats }: { stats: NonNullable<ProjectContentSection["stats"]> }) {
  return (
    <div className="case-stats">
      {stats.map((stat) => (
        <div key={stat.label} className="case-stat">
          <span className="case-stat-value">{stat.value}</span>
          <span className="case-stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectTable({ table }: { table: NonNullable<ProjectContentSection["table"]> }) {
  return (
    <div className="case-table-block">
      {table.title ? <h4 className="case-table-title">{table.title}</h4> : null}
      <div className="case-table-wrap">
        <table className="case-table">
          <thead>
            <tr>
              {table.headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  const text = typeof cell === "string" ? cell : cell.text;
                  const tone = typeof cell === "string" ? undefined : cell.tone;
                  return (
                    <td
                      key={cellIndex}
                      className={tone ? `case-table-cell--${tone}` : undefined}
                    >
                      {text}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProjectSteps({ steps }: { steps: NonNullable<ProjectContentSection["steps"]> }) {
  return (
    <ol className="case-steps">
      {steps.map((step, index) => (
        <li key={step.label} className="case-step">
          <span className="case-step-index">{String(index + 1).padStart(2, "0")}</span>
          <div className="case-step-body">
            <span className="case-step-label">{step.label}</span>
            {step.description ? (
              <p className="case-step-desc">{step.description}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

function ProjectGridCardBlock({ card, fullWidth }: { card: ProjectGridCard; fullWidth?: boolean }) {
  return (
    <div className={`case-grid-card${fullWidth ? " case-grid-card--full" : ""}`}>
      <h4 className="case-grid-card-title">{card.title}</h4>
      {card.description ? (
        <p className="case-grid-card-desc">{card.description}</p>
      ) : null}
      <ul className="case-grid-card-list">
        {card.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectGrid({
  grid,
  footer,
}: {
  grid: ProjectGridCard[];
  footer?: ProjectGridCard;
}) {
  return (
    <div className="case-grid-wrap">
      <div className="case-grid">
        {grid.map((card) => (
          <ProjectGridCardBlock key={card.title} card={card} />
        ))}
      </div>
      {footer ? <ProjectGridCardBlock card={footer} fullWidth /> : null}
    </div>
  );
}

function ProjectCode({ code }: { code: string }) {
  return <pre className="case-code">{code}</pre>;
}

function ProjectList({ items }: { items: string[] }) {
  return (
    <ul className="case-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ProjectSubsectionBlock({
  subsection,
  prominent = false,
}: {
  subsection: ProjectSubsection;
  prominent?: boolean;
}) {
  return (
    <div className={`case-subsection${prominent ? " case-subsection--prominent" : ""}`}>
      <h3 className={prominent ? "case-section-title" : "case-subsection-title"}>
        {subsection.title}
      </h3>
      {subsection.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="case-body">
          {formatInlineText(paragraph)}
        </p>
      ))}
      {subsection.bullets ? <ProjectList items={subsection.bullets} /> : null}
      {subsection.code ? <ProjectCode code={subsection.code} /> : null}
    </div>
  );
}

function ProjectSectionBlock({ section }: { section: ProjectContentSection }) {
  const isCallout = section.variant === "callout";

  return (
    <article
      className={`case-section${isCallout ? " case-section--callout" : ""}${
        section.variant === "stats" ? " case-section--stats" : ""
      }${section.variant === "phases" ? " case-section--phases" : ""}`}
    >
      <header className="case-section-header">
        <span className="case-section-label">{section.label}</span>
        {section.title ? <h3 className="case-section-title">{section.title}</h3> : null}
      </header>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="case-body">
          {formatInlineText(paragraph)}
        </p>
      ))}

      {section.stats ? <ProjectStats stats={section.stats} /> : null}
      {section.table ? <ProjectTable table={section.table} /> : null}
      {section.steps ? <ProjectSteps steps={section.steps} /> : null}
      {section.grid ? (
        <ProjectGrid grid={section.grid} footer={section.gridFooter} />
      ) : null}
      {section.bullets ? <ProjectList items={section.bullets} /> : null}
      {section.chipRows ? <ProjectChipRows rows={section.chipRows} /> : null}
      {section.image ? (
        <figure className="case-figure">
          <img
            src={section.image}
            alt={section.imageAlt ?? ""}
            className="case-figure-media"
            loading="lazy"
          />
        </figure>
      ) : null}
      {section.code ? <ProjectCode code={section.code} /> : null}

      {section.subsections?.map((subsection) => (
        <ProjectSubsectionBlock
          key={subsection.title}
          subsection={subsection}
          prominent={section.variant === "phases"}
        />
      ))}
    </article>
  );
}

export default function ProjectCaseStudy({ item }: { item: ProjectItem }) {
  const eyebrow = `${item.tags.slice(0, 2).join(" · ").toUpperCase()} · ${item.status.toUpperCase()}`;

  return (
    <section className="case-study" aria-labelledby={`project-detail-${item.id}`}>
      <header className="case-study-intro">
        <p className="case-study-eyebrow">{eyebrow}</p>
        <h2 className="case-study-headline" id={`project-detail-${item.id}`}>
          {item.overviewTitle}
        </h2>
        <div className="case-study-lead-row">
          <p className="case-study-lead">{formatInlineText(item.overview)}</p>
          <ProjectGithubLink url={item.url} title={item.title} />
        </div>
      </header>

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

      <div className="case-study-meta">
        <div className="case-study-meta-field">
          <span className="case-study-meta-label">Role</span>
          <p className="case-study-meta-value">{item.role}</p>
        </div>
        <div className="case-study-meta-field">
          <span className="case-study-meta-label">Timeline</span>
          <p className="case-study-meta-value">{item.timeline}</p>
        </div>
        <div className="case-study-meta-field">
          <span className="case-study-meta-label">Team</span>
          <p className="case-study-meta-value">{item.team}</p>
        </div>
        <div className="case-study-meta-field">
          <span className="case-study-meta-label">Skills</span>
          <ul className="case-study-meta-skills">
            {item.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="case-study-article">
        {item.sections?.map((section) => (
          <ProjectSectionBlock key={section.label} section={section} />
        ))}
      </div>

      <footer className="case-study-footer">
        <div className="case-study-footer-links">
          {item.designId ? (
            <Link to={`/designs#${item.designId}`} className="case-study-link">
              {item.designLabel ?? "View design"} design →
            </Link>
          ) : null}
          {item.readMoreHref && item.readMoreLabel ? (
            <a
              href={item.readMoreHref}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-link"
            >
              {item.readMoreLabel} ↗
            </a>
          ) : null}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="case-study-link"
          >
            View project ↗
          </a>
        </div>
      </footer>
    </section>
  );
}
