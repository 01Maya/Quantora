"use client";
import Button from "./Button";
import Photo from "./Photo";
import Words from "./Words";

export default function CTA() {
  return (
    <section id="cta">
      <div className="side left">
        <Photo
          src="/images/robot.jpg"
          alt="Robot in a business suit"
          position="38% 30%"
          flat
          sizes="30vw"
        />
      </div>
      <div className="content">
        <h2 className="words">
          <Words text="Get started with the most powerful investment AI today" />
        </h2>
        <Button href="#top">Get started</Button>
      </div>
      <div className="side right">
        <Photo
          src="/images/analyst.jpg"
          alt="Smiling analyst looking upward"
          position="55% 25%"
          flat
          sizes="30vw"
        />
      </div>
      <style jsx>{`
        section {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 380px;
          overflow: hidden;
          background: var(--pow);
          text-align: center;
        }
        .content {
          position: relative;
          max-width: 520px;
        }
        h2 {
          margin-bottom: 26px;
        }
        .side {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 28%;
        }
        .left {
          left: 0;
        }
        .right {
          right: 0;
        }
        .side :global(.frame) {
          position: absolute;
          inset: 0;
        }
        @media (max-width: 700px) {
          section {
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            min-height: 0;
            padding: 0 0 56px;
          }
          .side {
            position: relative;
            flex: 0 0 50%;
            width: 50%;
            height: 190px;
          }
          .content {
            flex: 0 0 100%;
            max-width: none;
            padding: 44px var(--pad) 0;
          }
          .right {
            order: 1;
          }
          .content {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
}
