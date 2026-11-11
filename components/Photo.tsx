"use client";
import Image from "next/image";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  ratio?: string;
  position?: string;
  flat?: boolean;
  priority?: boolean;
  sizes?: string;
};

/** Image frame with scroll reveal and hover zoom. Fills its parent unless `ratio` is given. */
export default function Photo({
  src,
  alt,
  ratio,
  position = "50% 50%",
  flat,
  priority,
  sizes = "(max-width: 900px) 100vw, 50vw",
}: Props) {
  return (
    <div
      className="rv frame"
      style={
        {
          "--r": flat ? "0" : "14px",
          ...(ratio ? { aspectRatio: ratio, height: "auto" } : {}),
        } as CSSProperties
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition: position }}
      />
      <style jsx>{`
        .frame {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          border-radius: var(--r);
          background: rgba(25, 43, 61, 0.14);
        }
        .frame :global(img) {
          transition: transform 1.1s var(--ease);
        }
        .frame:hover :global(img) {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
}
