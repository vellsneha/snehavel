import type { ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={className ?? "page"}>
      <ThemeToggle />
      <div className="page-content">{children}</div>
    </div>
  );
}
