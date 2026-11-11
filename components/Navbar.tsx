"use client";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [ind, setInd] = useState({ left: 0, width: 0 });
  const links = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const mid = window.innerHeight * 0.4;
      let cur: string | null = null;
      navLinks.forEach((l) => {
        const r = document.querySelector(l.href)?.getBoundingClientRect();
        if (r && r.top <= mid && r.bottom > mid) cur = l.href;
      });
      setActive(cur);
    };
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
      onScroll();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const a =
      active &&
      links.current?.querySelector<HTMLAnchorElement>(`a[href="${active}"]`);
    if (a) setInd({ left: a.offsetLeft + 14, width: a.offsetWidth - 28 });
  }, [active]);

  const go = (href: string) => {
    setOpen(false);
    const s = document.querySelector(href);
    setTimeout(
      () =>
        s?.querySelectorAll(".words").forEach((w) => {
          w.classList.remove("in");
          void (w as HTMLElement).offsetWidth;
          w.classList.add("in");
        }),
      650,
    );
  };

  return (
    <nav className={`${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <div className="nb">
        <a className="logo" href="#top">
          <b>
            <span>Q</span>
          </b>
          Quantora
        </a>
        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <i />
          <i />
        </button>
        <div className="links" ref={links}>
          <i
            className="ind"
            style={{
              width: ind.width,
              transform: `translateX(${ind.left}px)`,
              opacity: active ? 1 : 0,
            }}
          />
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? "on" : ""}
              onClick={() => go(l.href)}
            >
              {l.label}
            </a>
          ))}
          <Button href="#cta" variant="nav" onClick={() => setOpen(false)}>
            Request Demo
          </Button>
        </div>
      </div>
      <style jsx>{`
        nav {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 50;
          padding-top: env(safe-area-inset-top, 0px);
          color: var(--warm);
          transition:
            background 0.4s,
            color 0.4s,
            box-shadow 0.4s;
        }
        nav.scrolled {
          background: rgba(248, 247, 243, 0.9);
          backdrop-filter: blur(14px);
          color: var(--navy);
          box-shadow: 0 1px 0 rgba(25, 43, 61, 0.1);
          --nav-btn-bg: var(--navy);
          --nav-btn-fg: var(--warm);
          --nav-btn-bd: var(--navy);
        }
        nav.open {
          background: var(--warm);
          color: var(--navy);
        }
        .nb {
          max-width: 1360px;
          margin: auto;
          height: 72px;
          padding: 0 var(--pad);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-serif), serif;
          font-size: clamp(25px, 2.4vw, 29px);
          line-height: 1;
          white-space: nowrap;
        }
        .logo b {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background: currentColor;
          transition: transform 0.5s;
        }
        nav.scrolled .logo b {
          background: var(--mid);
        }
        .logo b span {
          color: var(--or);
          font-size: 23px;
          line-height: 1;
          transform: translateY(-1px);
        }
        .logo:hover b {
          transform: rotate(-12deg) scale(1.06);
        }
        .links {
          position: relative;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .links a {
          position: relative;
          padding: 10px 14px;
          font-size: 14px;
          font-weight: 600;
        }
        nav:not(.scrolled) .links a {
          font-weight: 700;
        }
        .links a::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 6px;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s;
        }
        .links a:hover::after {
          transform: scaleX(1);
        }
        .ind {
          position: absolute;
          bottom: 6px;
          left: 0;
          height: 2px;
          border-radius: 2px;
          background: var(--or);
          transition:
            transform 0.45s var(--ease),
            width 0.45s var(--ease),
            opacity 0.3s;
        }
        .burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
          width: 44px;
          height: 44px;
          margin-right: -10px;
          background: none;
          border: 0;
          color: inherit;
          cursor: pointer;
        }
        .burger i {
          display: block;
          width: 24px;
          height: 2px;
          border-radius: 2px;
          background: currentColor;
          transition: transform 0.35s;
        }
        .open .burger i:first-child {
          transform: translateY(4px) rotate(45deg);
        }
        .open .burger i:last-child {
          transform: translateY(-4px) rotate(-45deg);
        }
        @media (max-width: 960px) {
          .burger {
            display: flex;
          }
          .links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 8px var(--pad) 20px;
            background: var(--warm);
            color: var(--navy);
            border-bottom: 1px solid rgba(25, 43, 61, 0.1);
            opacity: 0;
            transform: translateY(-8px);
            pointer-events: none;
            transition: 0.3s;
            --nav-btn-bg: var(--navy);
            --nav-btn-fg: var(--warm);
            --nav-btn-bd: var(--navy);
          }
          .open .links {
            opacity: 1;
            transform: none;
            pointer-events: auto;
          }
          .links a {
            padding: 14px 0;
            border-bottom: 1px solid rgba(25, 43, 61, 0.08);
          }
          .links a::after,
          .ind {
            display: none;
          }
          .links a.on {
            color: var(--od);
          }
        }
        @media (max-width: 480px) {
          .nb {
            height: 64px;
          }
        }
      `}</style>
    </nav>
  );
}
