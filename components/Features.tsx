"use client";
import Button from "./Button";
import Photo from "./Photo";
import Words from "./Words";
import { capabilities } from "@/lib/content";
import { delay } from "@/lib/utils";

export default function Features() {
  return (
    <section id="features">
      <div className="wrap">
        <h2 className="words">
          <Words text="Optimized to handle financial data" />
        </h2>
        <div className="cards">
          {capabilities.map((c, i) => (
            <div className="rv" style={delay(i * 120)} key={c.title}>
              <article>
                <div className="img">
                  <Photo
                    src={c.img}
                    alt={c.alt}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <span className="tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            </div>
          ))}
        </div>
        <div className="more">
          <Button href="#cta" variant="outline">
            Learn more
          </Button>
        </div>
      </div>
      <style jsx>{`
        h2 {
          text-align: center;
          margin-bottom: 48px;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        article {
          height: 100%;
          padding: 12px 12px 26px;
          background: var(--pow);
          border-radius: 18px;
          transition:
            transform 0.5s,
            box-shadow 0.5s;
        }
        article:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(36, 59, 83, 0.14);
        }
        .img {
          aspect-ratio: 1 / 0.82;
          margin-bottom: 20px;
          position: relative;
        }
        .img :global(.frame) {
          position: absolute;
          inset: 0;
        }
        .tag {
          display: inline-block;
          margin: 0 8px 10px;
          padding: 2px 10px;
          border: 1px solid var(--od);
          border-radius: 99px;
          color: var(--od);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        h3,
        p {
          padding: 0 8px;
        }
        h3 {
          font-size: clamp(24px, 2.2vw, 28px);
          margin-bottom: 10px;
        }
        p {
          font-size: 14.5px;
          opacity: 0.78;
        }
        .more {
          margin-top: 36px;
          text-align: center;
        }
        @media (max-width: 900px) {
          .cards {
            grid-template-columns: 1fr;
          }
          .img {
            aspect-ratio: 16 / 10;
          }
        }
      `}</style>
    </section>
  );
}
