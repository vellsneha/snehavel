import { FormEvent, useState } from "react";
import { NDA_ACCESS_MAILTO } from "../data/site";
import "./NdaGate.css";

type NdaGateProps = {
  title: string;
  summary: string;
  onUnlock: (password: string) => Promise<boolean>;
  error: string | null;
  onClearError: () => void;
};

export default function NdaGate({
  title,
  summary,
  onUnlock,
  error,
  onClearError,
}: NdaGateProps) {
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onUnlock(password.trim());
  };

  return (
    <div className="nda-gate" aria-labelledby="nda-gate-title">
      <div className="nda-gate-card">
        <div className="nda-gate-badge" aria-hidden="true">
          <span className="nda-gate-badge-icon">◌</span>
          <span>NDA protected</span>
        </div>

        <h2 className="nda-gate-title" id="nda-gate-title">
          {title}
        </h2>

        <p className="nda-gate-lead">
          This work is under a signed NDA. Screens, process, and case study details stay
          behind a password. If you are a recruiter or collaborator who needs access, email me
          and I will share it.
        </p>

        <div className="nda-gate-preview">
          <div className="nda-gate-preview-block">
            <p className="nda-gate-preview-label">What I learned</p>
            <p className="nda-gate-preview-text">{summary}</p>
          </div>
        </div>

        <form className="nda-gate-form" onSubmit={handleSubmit}>
          <label className="nda-gate-label" htmlFor="nda-gate-password">
            Access password
          </label>
          <div className="nda-gate-input-row">
            <input
              id="nda-gate-password"
              className="nda-gate-input"
              type="password"
              name="password"
              value={password}
              autoComplete="current-password"
              placeholder="Enter password"
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) onClearError();
              }}
            />
            <button className="nda-gate-submit" type="submit">
              Unlock
            </button>
          </div>
          {error ? (
            <p className="nda-gate-error" role="alert">
              {error}
            </p>
          ) : null}
        </form>

        <div className="nda-gate-divider" aria-hidden="true" />

        <div className="nda-gate-request">
          <p className="nda-gate-request-text">Need access?</p>
          <a className="nda-gate-email" href={NDA_ACCESS_MAILTO}>
            Email me for the password
          </a>
        </div>
      </div>
    </div>
  );
}
