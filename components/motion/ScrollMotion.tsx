"use client";

import { useEffect } from "react";

const revealSelector = "[data-reveal]";

export function ScrollMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );

    if (!targets.length) return;

    const reveal = (target: HTMLElement) => {
      target.classList.add("is-revealed");
    };
    const revealAll = () => targets.forEach(reveal);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      root.dataset.motion = "reduced";
      revealAll();
      return () => {
        delete root.dataset.motion;
      };
    }

    root.dataset.motion = "ready";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.08,
      },
    );

    targets.forEach((target) => {
      const bounds = target.getBoundingClientRect();
      const isAlreadyVisible =
        bounds.top < window.innerHeight * 0.88 && bounds.bottom > 0;

      if (isAlreadyVisible) {
        reveal(target);
      } else {
        observer.observe(target);
      }
    });

    const respectReducedMotion = (event: MediaQueryListEvent) => {
      if (!event.matches) return;

      root.dataset.motion = "reduced";
      observer.disconnect();
      revealAll();
    };

    reducedMotion.addEventListener("change", respectReducedMotion);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", respectReducedMotion);
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
