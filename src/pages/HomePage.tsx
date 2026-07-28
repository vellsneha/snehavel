import trophyIcon from "../../icons8-trophy-100.png?url";
import { useState } from "react";
import { Link } from "react-router-dom";
import LayoutIsland from "@social/utils/LayoutIsland";
import WeatherGif from "../components/WeatherGif";
import PageLayout from "../components/PageLayout";
import { projects } from "../data/projects";
import { learningTimeline } from "../data/learningTimeline";
import LearningVideo from "../components/LearningVideo";
import ExperienceList from "../components/ExperienceList";
import { getExperienceItems } from "../data/experienceItems";
import { Social } from "../framer-components";
import "./HomePage.css";

type RightPanelTab = "projects" | "work" | "more";

const skills = [
  "Agentic AI",
  "Food",
  "Harness Engineering",
  "Semantic Search",
  "Beach",
  "Knowledge Graphs",
  "Music",
  "Computer Vision",
  "Vacation",
  "Multimodal AI",
  "Observability",
  "Nature",
  "LLM Fine-tuning",
  "Art",
];

export default function HomePage() {
  const [rightPanel, setRightPanel] = useState<RightPanelTab>("projects");
  // Toggle later: when you say "visible", flip this to true.
  const WRITING_LINKS_VISIBLE = false;

  return (
    <PageLayout className="page page-home">
      <div className="home-page">
        <div className="home-shell">
          <main className="home-grid">
            <div className="home-cluster-left">
              <div className="home-cluster-top">
                <aside className="home-col home-col-left">
              <div className="home-profile-block">
                <div className="home-profile-row">
                  <div className="home-profile-text">
                    <p className="home-greeting">
                      I&apos;m Sneha Vellelath
                    </p>
                    <p className="home-role">
                      <em>building</em> ai systems
                      <br />
                      <span className="home-role-with">with</span> design <em>thinking</em>
                    </p>

                    <p className="home-open-to-work">
                      Open to startups, full-time roles and good ideas.
                    </p>
                  </div>
                </div>
              </div>

              <nav className="home-links">
                <p
                  className={`home-links-item${WRITING_LINKS_VISIBLE ? "" : " home-links-item--hidden"}`}
                >
                  <span>Blogs</span>
                  <span className="home-links-arrow" aria-hidden="true">
                    ↗
                  </span>
                </p>
                <p
                  className={`home-links-item${WRITING_LINKS_VISIBLE ? "" : " home-links-item--hidden"}`}
                >
                  <span>Publications</span>
                  <span className="home-links-arrow" aria-hidden="true">
                    ↗
                  </span>
                </p>
              </nav>

              <div className="home-social-block home-social-block--desktop">
                <p className="home-social-lead">
                  To connect, talk, build or hire,
                </p>
                <div className="home-social-find">
                  <p className="home-social-lead-tail">find me on</p>
                  <div className="home-social-row framer-section">
                    <LayoutIsland>
                      <Social />
                    </LayoutIsland>
                  </div>
                </div>
              </div>
            </aside>

                <section className="home-col home-col-center">
                  <div className="home-center-zone">
                    <div className="home-center-top">
                      <p className="home-bio">
                        I&apos;m an AI Systems Engineer with a background in software engineering. I build
                        reliable AI systems, from multimodal agents and RAG pipelines to agentic
                        workflows.
                      </p>

                      <div className="home-skillset">
                        <p className="home-skillset-heading">words that interest me</p>
                        <div className="home-skill-tags">
                          {skills.map((skill) => (
                            <span key={skill} className="home-skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="home-col2-lower">
                      <div className="home-card-large home-placeholder-stack">
                        {learningTimeline.map((entry) => (
                          <Link
                            key={entry.id}
                            to={`/projects#${entry.id}`}
                            className="home-placeholder-item home-placeholder-link"
                          >
                            <LearningVideo
                              src={entry.media}
                              title={entry.title}
                              mediaType={entry.mediaType}
                            />
                            <div className="home-placeholder-meta">
                              <span className="home-placeholder-title">{entry.title}</span>
                              <span className="home-placeholder-date">{entry.period}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="home-side-column">
                <div className="home-weather-block">
                  <div className="home-gif-wrap">
                    <WeatherGif />
                  </div>
                  <p className="home-weather-note" aria-hidden="true">
                    <span className="home-weather-note-text">a little window</span>
                  </p>
                </div>
                <div className="home-side-stack">
                  <Link to="/designs" className="home-card home-card-banner home-card-uiux">
                    <span className="home-banner-label">
                      Designs <em className="home-banner-label-sub">for users</em>
                    </span>
                  </Link>
                  <Link to="/gallery" className="home-card home-card-banner home-card-gallery">
                    <span className="home-banner-label">
                      Gallery <em className="home-banner-label-sub">of memories</em>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <aside className="home-col home-col-right">
              <div className="home-right-tabs" role="tablist" aria-label="Projects, work, and more">
                <button
                  type="button"
                  role="tab"
                  aria-selected={rightPanel === "projects"}
                  data-label="Projects"
                  className={`home-right-tab${rightPanel === "projects" ? " is-active" : ""}`}
                  onClick={() => setRightPanel("projects")}
                >
                  <span className="home-right-tab-label">Projects</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={rightPanel === "work"}
                  data-label="Work"
                  className={`home-right-tab${rightPanel === "work" ? " is-active" : ""}`}
                  onClick={() => setRightPanel("work")}
                >
                  <span className="home-right-tab-label">Work</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={rightPanel === "more"}
                  data-label="More"
                  className={`home-right-tab${rightPanel === "more" ? " is-active" : ""}`}
                  onClick={() => setRightPanel("more")}
                >
                  <span className="home-right-tab-label">More</span>
                </button>
              </div>

              <div className="home-right-panel" role="tabpanel">
                {rightPanel === "projects" ? (
                  <ul className="home-projects-list">
                    {projects.map((project) => (
                      <li key={project.id}>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="home-project-item"
                        >
                          <div>
                            <p className="home-project-title">
                              {project.title}
                              {project.featured ? (
                                <img
                                  src={trophyIcon}
                                  alt=""
                                  className="home-project-trophy"
                                  aria-hidden="true"
                                />
                              ) : null}
                            </p>
                            <p className="home-project-desc">{project.description}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                    <li className="home-projects-footnote">
                      <p>
                        <Link to="/projects" className="home-projects-footnote-link home-projects-footnote-link--page">
                          view all projects
                        </Link>
                        {" · "}
                        find more on my{" "}
                        <a
                          href="https://github.com/vellsneha"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="home-projects-footnote-link"
                        >
                          GitHub
                        </a>
                      </p>
                    </li>
                  </ul>
                ) : (
                  <ExperienceList items={getExperienceItems(rightPanel)} />
                )}
              </div>

              <div className="home-right-banners">
                <Link to="/designs" className="home-card home-card-banner home-card-uiux">
                  <span className="home-banner-label">
                    Designs <em className="home-banner-label-sub">for users</em>
                  </span>
                </Link>
                <Link to="/gallery" className="home-card home-card-banner home-card-gallery">
                  <span className="home-banner-label">
                    Gallery <em className="home-banner-label-sub">of memories</em>
                  </span>
                </Link>
              </div>

              <div className="home-card home-card-footer">
                <span className="home-footer-text">~ amor fati</span>
              </div>
            </aside>

            <div className="home-social-block home-social-block--mobile">
              <p className="home-social-lead">
                To connect, talk, build or hire,
              </p>
              <div className="home-social-find">
                <p className="home-social-lead-tail">find me on</p>
                <div className="home-social-row framer-section">
                  <LayoutIsland>
                    <Social />
                  </LayoutIsland>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageLayout>
  );
}
