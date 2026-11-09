import { useEffect } from "react";

type PageMeta = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
  robots?: string;
};

const KEYS = {
  description: 'meta[name="description"]',
  ogTitle: 'meta[property="og:title"]',
  ogDescription: 'meta[property="og:description"]',
  twitterCard: 'meta[name="twitter:card"]',
  robots: 'meta[name="robots"]',
} as const;

function setMeta(selector: string, attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

/** Client-side replacement for per-route `head()` — sets the title and meta tags for a page. */
export function usePageMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  twitterCard,
  robots,
}: PageMeta) {
  useEffect(() => {
    document.title = title;
    if (description) setMeta(KEYS.description, "name", "description", description);
    if (ogTitle) setMeta(KEYS.ogTitle, "property", "og:title", ogTitle);
    if (ogDescription) setMeta(KEYS.ogDescription, "property", "og:description", ogDescription);
    if (twitterCard) setMeta(KEYS.twitterCard, "name", "twitter:card", twitterCard);

    // robots is only set on pages that opt in; remove it again when leaving the page.
    let robotsEl: HTMLMetaElement | null = null;
    if (robots) {
      setMeta(KEYS.robots, "name", "robots", robots);
      robotsEl = document.head.querySelector<HTMLMetaElement>(KEYS.robots);
    }
    return () => {
      robotsEl?.remove();
    };
  }, [title, description, ogTitle, ogDescription, twitterCard, robots]);
}
