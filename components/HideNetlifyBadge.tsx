"use client";

import { useEffect } from "react";

/**
 * Removes the Netlify badge. Netlify's HUD script mounts it inside an iframe
 * (#nl-badge-frame, or #nl-hud-frame for the site owner) after page load,
 * so we watch the DOM and remove it whenever it appears.
 */
export default function HideNetlifyBadge() {
  useEffect(() => {
    const remove = () =>
      document
        .querySelectorAll("#nl-badge, #nl-badge-frame, #nl-hud-frame")
        .forEach((el) => el.remove());
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
