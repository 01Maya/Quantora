"use client";
import { useState } from "react";
import Button from "./Button";
import Photo from "./Photo";
import Words from "./Words";
import { accordion } from "@/lib/content";

export default function Research() {
  const [on, setOn] = useState(0);

  return (
    <section id="research">
      <div className="wrap">
        <div className="top">
          <h2 className="words">
            <Words text="Quantora's Finance Research Copilot" />
          </h2>
          <Button href="#cta" variant="outline">
            Explore Quantora
          </Button>
        </div>

        <div className="panel rv">
          <div className="img">
            <Photo
              src="/images/copilot.jpg"
              alt="Analyst working at a retro computer by a sunlit window"
            />
          </div>

          <div className="tx">
            <h3>Supercharge your investment process</h3>

            <div className="accordion">
              {accordion.map((a, i) => (
                <div
                  key={a.title}
                  className={`item ${on === i ? "on" : ""}`}
                  onMouseEnter={() => setOn(i)}
                  onClick={() => setOn(i)}
                >
                  {a.title}
                  <p>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        section {
          background: var(--pow);
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }

        h2 {
          font-size: clamp(30px, 3.6vw, 46px);
        }

        .panel {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: clamp(20px, 4vw, 56px);
          padding: clamp(14px, 2vw, 24px);
          background: var(--warm);
          border-radius: 22px;
        }

        .img {
          min-height: clamp(280px, 36vw, 440px);
          position: relative;
        }

        .img :global(.frame) {
          position: absolute;
          inset: 0;
        }

        /* FIX: was "space-between", which pushed the heading and accordion
           to opposite ends of the tall panel. Now they stay together. */
        .tx {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 32px;
          padding: 12px 8px;
        }

        h3 {
          font-size: clamp(30px, 3.4vw, 44px);
          line-height: 1.15;
          margin: 0;
        }

        .item {
          padding: 14px 0;
          border-top: 1px solid rgba(25, 43, 61, 0.15);
          font-size: 15px;
          font-weight: 600;
          opacity: 0.45;
          cursor: pointer;
          transition:
            opacity 0.3s,
            padding 0.3s;
        }

        .item.on,
        .item:hover {
          opacity: 1;
          padding-left: 8px;
        }

        .item p {
          max-height: 0;
          overflow: hidden;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.55;
          transition:
            max-height 0.5s,
            margin 0.5s;
        }

        .item.on p {
          max-height: 80px;
          margin-top: 6px;
        }

        @media (max-width: 900px) {
          .top {
            flex-direction: column;
            align-items: flex-start;
          }

          .panel {
            grid-template-columns: 1fr;
          }

          .img {
            min-height: 0;
            aspect-ratio: 16 / 10;
          }

          .tx {
            gap: 24px;
          }

          .item.on p {
            max-height: 160px;
          }
        }
      `}</style>
    </section>
  );
}