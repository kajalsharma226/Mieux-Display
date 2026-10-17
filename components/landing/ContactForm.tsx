"use client";

import { useState } from "react";

export function ContactForm() {
  const [enquiry, setEnquiry] = useState<string | null>(null);

  function prepareEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `MIEUX DISPLAY — DISPLAY ENQUIRY\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\nRequirements:\n${data.get("message")}\n`;
    setEnquiry(text);
  }

  function downloadEnquiry() {
    if (!enquiry) return;
    const url = URL.createObjectURL(
      new Blob([enquiry], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "mieux-display-enquiry.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <form className="contact-form" data-reveal data-reveal-delay={2} onSubmit={prepareEnquiry}>
      <label htmlFor="name">
        NAME
        <input
          id="name"
          name="name"
          placeholder="NAME HERE"
          autoComplete="name"
          maxLength={100}
          required
        />
      </label>
      <label htmlFor="phone">
        PHONE
        <input
          id="phone"
          name="phone"
          placeholder="+91"
          type="tel"
          autoComplete="tel"
          maxLength={30}
          required
        />
      </label>
      <label htmlFor="email">
        EMAIL
        <input
          id="email"
          name="email"
          placeholder="EMAIL@ADDRESS.COM"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
        />
      </label>
      <label htmlFor="message">
        MESSAGE
        <textarea
          id="message"
          name="message"
          placeholder="HOW CAN WE ASSIST YOU?"
          rows={1}
          maxLength={3000}
          required
        />
      </label>
      <button className="button button-primary send-button" type="submit">
        SEND
      </button>
      {!enquiry && (
        <p className="form-note">
          Prepare your enquiry here, then choose email or download.
        </p>
      )}
      {enquiry && (
        <div className="enquiry-result" role="status">
          <p>Your enquiry is ready. Choose how to send it.</p>
          <a
            href={`mailto:info@ienetmail.com?subject=${encodeURIComponent("Display solution enquiry")}&body=${encodeURIComponent(enquiry)}`}
          >
            Open email draft ↗
          </a>
          <button type="button" onClick={downloadEnquiry}>
            Download enquiry ↓
          </button>
          <small>No message has been sent from this page.</small>
        </div>
      )}
    </form>
  );
}
