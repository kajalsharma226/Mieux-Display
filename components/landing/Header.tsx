"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const links = [
  ["01", "Who we are", "#about"],
  ["02", "Our products", "#products"],
  ["03", "Why Mieux", "#why-mieux"],
  ["04", "Case study", "#case-study"],
  ["05", "Get in touch", "#contact"],
];

export function Header() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const close = () => {
    dialog.current?.close();
    setOpen(false);
  };

  return (
    <>
      <header className="header" id="top">
        <div className="grid-lines" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
        <a className="wordmark" href="#top" aria-label="Mieux home">
          Mieux
        </a>
        <button
          className="menu-trigger mono"
          type="button"
          aria-controls="main-menu"
          aria-expanded={open}
          onClick={() => {
            dialog.current?.showModal();
            setOpen(true);
          }}
        >
          +MENU
        </button>
        <a className="header-consultation" href="#contact">
          <span className="consultation-copy mono">
            A 30 MINUTE CALL TO CLARIFY YOUR
            <br />
            NEXT STEPS. <strong>ZERO OBLIGATIONS</strong>
          </span>
          <Image
            src="/images/advisor.png"
            width={64}
            height={64}
            alt="Your display advisor"
            className="advisor"
          />
          <span className="headset" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 13v-2a8 8 0 0 1 16 0v2M4 12H3v6h4v-6H4Zm16 0h1v6h-4v-6h3Zm0 6c0 3-3 3-6 3" />
              <path d="M10 20h4v2h-4" />
            </svg>
          </span>
        </a>
      </header>
      <dialog
        ref={dialog}
        id="main-menu"
        className="menu-dialog"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialog.current) close();
        }}
      >
        <div className="menu-panel">
          <div className="menu-top">
            <span className="wordmark">Mieux</span>
            <button className="mono menu-close" onClick={close} type="button">
              CLOSE ×
            </button>
          </div>
          <nav aria-label="Main navigation">
            {links.map(([number, title, href]) => (
              <a href={href} onClick={close} key={href}>
                <span className="mono">/{number}</span>
                {title}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          <p className="mono">SMART DISPLAY SOLUTIONS FOR YOUR BUSINESS.</p>
        </div>
      </dialog>
    </>
  );
}
