/** Splits text into masked word spans for the headline reveal (styles live in globals.css). */
export default function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          {i > 0 && " "}
          <span className="w">
            <span style={{ "--i": i } as React.CSSProperties}>{w}</span>
          </span>
        </span>
      ))}
    </>
  );
}
