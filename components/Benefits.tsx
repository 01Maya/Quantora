"use client";
import Words from "./Words";
import { benefits } from "@/lib/content";
import { delay } from "@/lib/utils";

export default function Benefits() {
  return (
    <section>
      <div className="wrap">
        <h2 className="words">
          <Words text="AI purpose-built for financial research" />
        </h2>
        <div className="cols">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <div className="rv" style={delay(i * 120)} key={title}>
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
        h2 {
          text-align: center;
          margin-bottom: 56px;
        }
        .cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          text-align: center;
        }
        article {
          padding: 12px;
        }
        .ic {
          width: 52px;
          height: 52px;
          margin: 0 auto 18px;
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
          font-size: clamp(24px, 2.2vw, 28px);
          margin-bottom: 10px;
        }
        p {
          max-width: 300px;
          margin: auto;
          font-size: 15px;
          opacity: 0.78;
        }
        @media (max-width: 900px) {
          .cols {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
