"use client";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "nav";
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "solid",
  onClick,
}: Props) {
  return (
    <a href={href} className={`btn ${variant}`} onClick={onClick}>
      {children}
      <ArrowUpRight size={16} strokeWidth={2.25} />
      <style jsx>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 26px;
          border-radius: 99px;
          border: 1px solid var(--navy);
          font-weight: 600;
          font-size: 15px;
          transition:
            transform 0.35s,
            background 0.35s,
            color 0.35s,
            border-color 0.35s;
        }
        .btn:hover {
          transform: translateY(-3px);
        }
        .btn :global(svg) {
          transition: transform 0.35s;
        }
        .btn:hover :global(svg) {
          transform: translate(2px, -2px);
        }
        .solid {
          background: var(--navy);
          color: var(--warm);
        }
        .solid:hover {
          background: var(--or);
          border-color: var(--or);
        }
        .outline {
          background: transparent;
          color: var(--navy);
        }
        .outline:hover {
          background: var(--navy);
          color: var(--warm);
        }
        .nav {
          margin-left: 10px;
          padding: 11px 22px;
          background: var(--nav-btn-bg, transparent);
          color: var(--nav-btn-fg, inherit);
          border-color: var(--nav-btn-bd, currentColor);
        }
        .nav:hover {
          background: var(--or);
          border-color: var(--or);
          color: var(--warm);
        }
        @media (max-width: 960px) {
          .nav {
            margin: 14px 0 0;
          }
        }
      `}</style>
    </a>
  );
}
