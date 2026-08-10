import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { blogLinks } from "../data/blogPosts";
import "./BlogsPage.css";

export default function BlogsPage() {
  return (
    <PageLayout className="page page-blogs">
      <div className="blogs-page">
        <header className="blogs-page-header">
          <Link to="/" className="blogs-page-back">
            ← back
          </Link>
          <h1 className="blogs-page-title">blogs</h1>
          <p className="blogs-page-hint">notes on systems, agents, and building</p>
        </header>

        <ul className="blogs-list">
          {blogLinks.map((item) => (
            <li key={item.id} className="blogs-item">
              <a
                href={item.url}
                className="blogs-item-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="blogs-item-title">{item.title}</span>
                <span className="blogs-item-source">{item.source}</span>
                <span className="blogs-item-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
