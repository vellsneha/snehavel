import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "../data/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    path: "/",
  },
  "/projects": {
    title: `Projects | ${SITE_NAME}`,
    description:
      "Projects by Sneha Vellelath — AI systems, agents, RAG pipelines, multimodal tools, and product engineering work.",
    path: "/projects",
  },
  "/designs": {
    title: `Designs | ${SITE_NAME}`,
    description:
      "Interface and product design work by Sneha Vellelath — planning and designing clear, calm interfaces.",
    path: "/designs",
  },
  "/gallery": {
    title: `Gallery | ${SITE_NAME}`,
    description: `Visual gallery from ${SITE_NAME}'s portfolio.`,
    path: "/gallery",
  },
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = PAGE_SEO[pathname] ?? PAGE_SEO["/"];
    const url = `${SITE_URL}${page.path === "/" ? "/" : page.path}`;

    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertLink("canonical", url);
  }, [pathname]);

  return null;
}
