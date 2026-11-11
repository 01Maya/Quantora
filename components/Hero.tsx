"use client";
import { useEffect, useRef } from "react";
import Button from "./Button";
import Photo from "./Photo";
import Words from "./Words";
import { delay } from "@/lib/utils";

export default function Hero() {
  const title = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (title.current)
        title.current.style.transform = `translateY(${Math.min(window.scrollY, 700) * 0.16}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top" className="hero">
      <h1 ref={title} className="words">
        <Words text="AI for Finance" />
      </h1>
      <p className="rv" style={delay(450)}>
        The only finance research copilot designed to accelerate research and
        strengthen conviction.
      </p>
      <div className="rv" style={delay(600)}>
        <Button href="#cta">Request Demo</Button>
      </div>
      <div className="media">
        <Photo
          src="/images/hero.jpg"
          alt="Analyst at a vintage control room with a world map"
          position="42% 50%"
          flat
          priority
          sizes="100vw"
        />
      </div>
      <style jsx>{`
        .hero {
          background: var(--or);
          color: var(--warm);
          padding: 150px var(--pad) 0;
          text-align: center;
          overflow: hidden;
        }
        h1 {
          font-size: clamp(52px, 9vw, 124px);
          line-height: 0.95;
          letter-spacing: -0.025em;
          margin-bottom: 24px;
          color: var(--warm);
        }
        p {
          max-width: 500px;
          margin: 0 auto 30px;
          font-size: clamp(19px, 1.6vw, 21px);
          font-weight: 700;
          line-height: 1.5;
        }
        .media {
          height: clamp(220px, 26vw, 400px);
          margin: 56px calc(var(--pad) * -1) 0;
        }
        @media (max-width: 700px) {
          .media {
            height: clamp(190px, 50vw, 300px);
          }
        }
      `}</style>
    </header>
  );
}
