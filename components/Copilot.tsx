"use client";
import Words from "./Words";
import { analysts } from "@/lib/content";

/** "Built for every analyst": sticky heading with a stack of role cards. */
export default function Copilot() {
  return (
    <section id="analysts">
      <div className="wrap grid">
        <div className="stick">
          <h2 className="words">
            <Words text="The only copilot built for every analyst" />
          </h2>
        </div>
        <div className="stack">
          {analysts.map(({ icon: Icon, title, text }, i) => (
            <div
              className="rv slot"
              style={{ "--n": i } as React.CSSProperties}
              key={title}
            >
              <article>
                <div className="ic">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        section {
          background: color-mix(in srgb, var(--pow) 55%, var(--warm));
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .stick {
          position: sticky;
          top: 120px;
        }
        .stack {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .slot {
          position: sticky;
          top: calc(110px + var(--n) * 14px);
        }
        article {
          padding: 26px;
          background: var(--warm);
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(36, 59, 83, 0.06);
          transition: box-shadow 0.4s;
        }
        article:hover {
          box-shadow: 0 22px 50px rgba(36, 59, 83, 0.16);
        }
        .ic {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--pow);
          color: var(--or);
          transition:
            transform 0.5s,
            background 0.4s,
            color 0.4s;
        }
        article:hover .ic {
          transform: scale(1.1);
          background: var(--or);
          color: var(--warm);
        }
        h3 {
          margin: 40px 0 10px;
          font-size: clamp(24px, 2.2vw, 28px);
        }
        p {
          font-size: 15px;
          opacity: 0.78;
        }
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .stick {
            position: static;
          }
        }
      `}</style>
    </section>
  );
}
