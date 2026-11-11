"use client";
import { useEffect, useRef } from "react";
import { expectations } from "@/lib/content";

/** Pinned section: oversized words drift apart while the cards shuffle to the back of the deck. */
export default function Expectations() {
  const section = useRef<HTMLElement>(null);
  const top = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const n = expectations.length;
    const tick = () => {
      const s = section.current;
      if (!s) return;
      const vh = window.innerHeight;
      const r = s.getBoundingClientRect();
      const t = Math.min(1, Math.max(0, -r.top / (r.height - vh)));
      if (top.current) top.current.style.transform = `translateX(${t * -5}vw)`;
      if (bottom.current)
        bottom.current.style.transform = `translateX(${t * 5}vw)`;
      const p = t * (n - 1);
      const idx = Math.min(Math.floor(p), n - 2);
      const f = p - idx;
      cards.current.forEach((c, i) => {
        if (!c) return;
        const k = (i - idx + n) % n;
        const rot = ((i % 3) - 1) * 2.5;
        let d: number,
          x = 0,
          rt = rot,
          z: number;
        if (k === 0) {
          // front card flies out, then lands at the back
          const s2 = Math.sin(f * Math.PI);
          d = f * (n - 1);
          x = s2 * (i % 2 ? -1 : 1) * Math.min(300, window.innerWidth * 0.42);
          rt = rot + s2 * (i % 2 ? -16 : 16);
          z = f < 0.5 ? n + 1 : 0;
        } else {
          d = k - f;
          z = n - k;
        }
        c.style.zIndex = String(z);
        c.style.transform = `translate(${x}px, ${d * 16}px) rotate(${rt}deg) scale(${1 - d * 0.045})`;
        c.style.opacity = String(
          d > n - 1.2 ? Math.max(0, ((n - d) / 1.2) * 0.9) : 1,
        );
      });
    };
    tick();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, []);

  return (
    <section ref={section} id="expect">
      <div className="pin">
        <div className="big top" ref={top}>
          What You
        </div>
        <div className="big bottom" ref={bottom}>
          Can Expect
        </div>
        <div className="deck">
          {expectations.map(({ icon: Icon, title, text }, i) => (
            <div
              className="card"
              key={title}
              ref={(el) => {
                cards.current[i] = el;
              }}
            >
              <div className="ic">
                <Icon size={24} strokeWidth={1.75} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        section {
          height: 440vh;
          padding: 0;
          background: var(--or);
          color: var(--warm);
        }
        .pin {
          position: sticky;
          top: 0;
          height: 100vh;
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        .big {
          position: absolute;
          left: 0;
          right: 0;
          text-align: center;
          white-space: nowrap;
          font-family: var(--font-serif), serif;
          font-size: clamp(56px, 14.5vw, 250px);
          line-height: 0.9;
          color: rgba(25, 43, 61, 0.32);
        }
        .top {
          top: 15%;
        }
        .bottom {
          bottom: 13%;
        }
        .deck {
          position: relative;
          z-index: 2;
          width: min(360px, 80vw);
          height: 230px;
        }
        .card {
          position: absolute;
          inset: 0;
          padding: 24px;
          background: var(--warm);
          color: var(--navy);
          border-radius: 18px;
          box-shadow: 0 24px 60px rgba(25, 43, 61, 0.35);
          will-change: transform;
        }
        .ic {
          width: 40px;
          height: 40px;
          margin-bottom: 30px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--pow);
          color: var(--or);
        }
        h3 {
          margin-bottom: 6px;
          font-size: 28px;
        }
        p {
          font-size: 14px;
          opacity: 0.75;
        }
        @media (max-width: 700px) {
          section {
            height: 400vh;
          }
          .top {
            top: 20%;
          }
          .bottom {
            bottom: 18%;
          }
          .deck {
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
}
