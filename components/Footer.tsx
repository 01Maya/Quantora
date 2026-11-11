"use client";
import { footerCols } from "@/lib/content";

export default function Footer() {
  return (
    <footer>
      <div className="cols">
        {footerCols.map((col) => (
          <div className="col" key={col.title}>
            <b>{col.title}</b>
            {col.links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href}>
                {Icon && <Icon size={16} />}
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="mega rv">Quantora</div>

      <p>© {new Date().getFullYear()} Quantora. All rights reserved.</p>

      <style jsx>{`
        footer {
          padding: 64px var(--pad) 0;
          overflow: hidden;
          background: var(--navy);
          color: var(--warm);
        }

        .cols {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, max-content));
          justify-content: center;
          column-gap: clamp(90px, 12vw, 180px);
          margin: 0 auto 76px;
          font-size: 14px;
        }

        .col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 140px;
        }

        b {
          display: block;
          margin-bottom: 20px;
          font-size: 12px;
          font-weight: 600;
          opacity: 0.5;
        }

        a {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          padding: 8px 0;
          opacity: 0.85;
          transition:
            transform 0.3s,
            color 0.3s;
        }

        a:hover {
          transform: translateX(6px);
          color: var(--or);
        }

        .mega {
          font-family: var(--font-serif), serif;
          font-size: clamp(60px, 18.5vw, 300px);
          line-height: 0.8;
          text-align: center;
          white-space: nowrap;
          color: var(--pow);
        }

        p {
          padding: 22px 0;
          text-align: center;
          font-size: 12px;
          opacity: 0.5;
        }

        @media (max-width: 900px) {
          .cols {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            justify-content: stretch;
            column-gap: 24px;
            margin-bottom: 56px;
            font-size: 12px;
          }

          .col {
            min-width: 0;
          }

          b {
            margin-bottom: 16px;
          }

          a {
            padding: 6px 0;
          }
        }

        @media (max-width: 480px) {
          .cols {
            gap: 12px;
          }

          a {
            gap: 6px;
          }

          a :global(svg) {
            width: 13px;
            height: 13px;
            flex-shrink: 0;
          }
        }
      `}</style>
    </footer>
  );
}
