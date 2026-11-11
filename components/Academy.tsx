"use client";
import Button from "./Button";
import Photo from "./Photo";
import Words from "./Words";
import { resources } from "@/lib/content";
import { delay } from "@/lib/utils";

export default function Academy() {
  return (
    <section id="academy">
      <div className="wrap">
        <div className="top">
          <h2 className="words">
            <Words text="Learn with Quantora Academy" />
          </h2>
          <Button href="#cta" variant="outline">
            Explore all resources
          </Button>
        </div>
        <div className="grid">
          {resources.map((r, i) => (
            <div className="rv" style={delay(i * 120)} key={r.title}>
              <a href="#" className="lc">
                <div className="img">
                  <Photo
                    src={r.img}
                    alt={r.alt}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <span className="tag">{r.tag}</span>
                <h3>{r.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
        }
        h2 {
          font-size: clamp(30px, 3.6vw, 46px);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .lc {
          display: block;
        }
        .img {
          position: relative;
          aspect-ratio: 16 / 10;
          margin-bottom: 16px;
        }
        .img :global(.frame) {
          position: absolute;
          inset: 0;
        }
        .tag {
          display: inline-block;
          margin-bottom: 10px;
          padding: 2px 10px;
          border: 1px solid var(--od);
          border-radius: 99px;
          color: var(--od);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        h3 {
          font-size: clamp(22px, 2vw, 26px);
          line-height: 1.12;
          transition: color 0.3s;
        }
        .lc:hover h3 {
          color: var(--or);
        }
        @media (max-width: 900px) {
          .top {
            flex-direction: column;
            align-items: flex-start;
          }
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
