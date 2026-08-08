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
  "Harness Engineering",
  "RAG Systems",
  "Knowledge Graphs",
  "Multimodal AI",
  "Computer Vision",
  "Model Evaluation",
  "LangSmith",
  "LLM Fine-tuning",
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
                      <span className="home-role-line">
                        <span className="home-role-with">with</span> product{" "}
                        <em>thinking</em>
                      </span>
                    </p>

                    <p className="home-open-to-work">
                      Open to startups, full-time roles and good ideas.
                    </p>

                    <p className="home-bio home-bio--profile">
                      AI Systems Engineer building reliable AI systems with agents, eval loops,
                      multimodal tools, and RAG pipelines. Working on{" "}
                      <em>enhancing the harness for better AI behavior</em>.
                    </p>

                    <div className="home-skillset home-skillset--profile">
                      <p className="home-skillset-heading">capabilities</p>
                      <div className="home-skill-tags">
                        {skills.map((skill) => (
                          <span key={skill} className="home-skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="home-profile-banners">
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
                      <p className="home-bio home-bio--center">
                        AI Systems Engineer building reliable AI systems with agents, eval loops,
                        multimodal tools, and RAG pipelines. Working on{" "}
                        <em>enhancing the harness for better AI behavior</em>.
                      </p>

                      <div className="home-skillset home-skillset--center">
                        <p className="home-skillset-heading">capabilities</p>
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

                    <div className="home-side-column">
                      <div className="home-weather-block home-weather-block--desktop">
                        <div className="home-gif-wrap">
                          <WeatherGif />
                        </div>
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
                </section>
              </div>
            </div>

            <aside className="home-col home-col-right">
              <div className="home-right-tabs" role="tablist" aria-label="Projects, experience, and community">
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
                  data-label="Experience"
                  className={`home-right-tab${rightPanel === "work" ? " is-active" : ""}`}
                  onClick={() => setRightPanel("work")}
                >
                  <span className="home-right-tab-label">Experience</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={rightPanel === "more"}
                  data-label="Community"
                  className={`home-right-tab${rightPanel === "more" ? " is-active" : ""}`}
                  onClick={() => setRightPanel("more")}
                >
                  <span className="home-right-tab-label">Community</span>
                </button>
              </div>

              <div className="home-right-panel" role="tabpanel">
                {rightPanel === "projects" ? (
                  <ul className="home-projects-list">
                    {projects.map((project) => {
                      const opensOnProjectsPage = Boolean(project.projectPage);
                      const content = (
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
                      );

                      return (
                        <li key={project.id}>
                          {opensOnProjectsPage ? (
                            <Link to={`/projects#${project.id}`} className="home-project-item">
                              {content}
                            </Link>
                          ) : (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="home-project-item"
                            >
                              {content}
                            </a>
                          )}
                        </li>
                      );
                    })}
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
            </aside>

            <div className="home-weather-block home-weather-block--mobile">
              <div className="home-gif-wrap">
                <WeatherGif />
              </div>
            </div>

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
