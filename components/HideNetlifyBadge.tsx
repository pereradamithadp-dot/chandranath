"use client";

import { useEffect } from "react";

/**
 * Removes the Netlify free-tier badge (#nl-badge). The badge is injected
 * after page load and can re-insert itself, so we watch the DOM and remove
 * it whenever it appears.
 */
export default function HideNetlifyBadge() {
  useEffect(() => {
    const remove = () => document.getElementById("nl-badge")?.remove();
    remove();
    const observer = new MutationObserver(remove);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
