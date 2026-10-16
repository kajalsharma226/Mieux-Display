"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// The upstream color parser uses document. Load only in the browser.
const MicroSlats = dynamic(() => import("./MicroSlats"), { ssr: false });

export function HeroBackground() {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webgl, setWebgl] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    const narrow = window.matchMedia("(max-width: 700px)");
    const updateSize = () => setCompact(narrow.matches);
    updateSize();
    narrow.addEventListener("change", updateSize);
    try {
      const context = document.createElement("canvas").getContext("webgl2");
      setWebgl(Boolean(context));
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      setWebgl(false);
    }
    return () => {
      media.removeEventListener("change", update);
      narrow.removeEventListener("change", updateSize);
    };
  }, []);

  return (
    <>
      <div className="hero-background" aria-hidden="true">
        <div className="slats-fallback" />
        {webgl && (
          <MicroSlats
            key={String(reducedMotion)}
            color="#6d3281"
            glintColor="#d5c3df"
            backgroundColor="#16111b"
            slatWidth={compact ? 4 : 10}
            slatHeight={compact ? 20 : 38}
            gap={compact ? 2 : 5}
            roundness={0.2}
            scale={1.65}
            speed={0.22}
            direction={230}
            chop={0.35}
            stretch={0.1}
            glint={0.8}
            contrast={1.2}
            perspective={0.12}
            fog={0.2}
            interactive={false}
            intro={false}
            paused={paused || reducedMotion}
          />
        )}
        <div className="hero-shade" />
      </div>
      {webgl && !reducedMotion && (
        <button
          className="motion-toggle"
          type="button"
          aria-label={
            paused ? "Play background animation" : "Pause background animation"
          }
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
        </button>
      )}
    </>
  );
}
