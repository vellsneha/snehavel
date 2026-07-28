type ProjectGithubLinkProps = {
  url: string;
  title: string;
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58
          0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73
          1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93
          0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4
          c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49
          5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12
          24 5.37 18.63 0 12 0z"
      />
    </svg>
  );
}

function DevpostIcon() {
  // Regular flat-top hexagon: equal sides, flat top/bottom, points left/right
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18 3.5 22 12l-4 8.5H6L2 12l4-8.5z"
      />
      <path
        fill="var(--bg-base)"
        fillRule="evenodd"
        d="M8.7 7.15h3.7c3.05 0 4.75 1.75 4.75 4.35s-1.7 4.35-4.75 4.35H8.7zm1.5 1.4v5.9h2c2.1 0 3.15-1.2 3.15-2.95S14.3 8.55 12.2 8.55z"
      />
    </svg>
  );
}

export default function ProjectGithubLink({ url, title }: ProjectGithubLinkProps) {
  if (!url) return null;

  const isGithub = url.includes("github.com");
  const isDevpost = url.includes("devpost.com");

  return (
    <a
      href={url}
      className="project-hero-github"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        isGithub ? `${title} on GitHub` : isDevpost ? `${title} on Devpost` : `View ${title}`
      }
      title={isGithub ? "View on GitHub" : isDevpost ? "View on Devpost" : "View project"}
    >
      {isDevpost ? <DevpostIcon /> : <GithubIcon />}
    </a>
  );
}
