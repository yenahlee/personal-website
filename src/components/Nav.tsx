"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-sm border-b border-divider"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className={`font-display font-bold text-sm tracking-tight transition-colors ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          YL
        </a>

        <ul className="hidden sm:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-muted" : "text-white/70"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
