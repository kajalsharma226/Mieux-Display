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
          <span className="advisor">
            <Image
              src="/images/advisor.png"
              width={68}
              height={68}
              alt="Your display advisor"
            />
          </span>
          <span className="headset" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 13v-2a9 9 0 0 1 18 0v2" />
              <rect x="3" y="11" width="5" height="8" rx="2" />
              <rect x="16" y="11" width="5" height="8" rx="2" />
              <path d="M21 17v3a2 2 0 0 1-2 2h-6" />
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
