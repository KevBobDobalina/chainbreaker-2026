import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Chainbreaker 2026 - A Charity Bike Ride";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const metalManiaFont = await fetch(
    "https://fonts.gstatic.com/s/metalmania/v22/RWmMoKWb4e8kqMfBUdPFJeXCg6UKDXlq.ttf"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Metal Mania",
        }}
      >
        {/* Top decorative line */}
        <div
          style={{
            width: 200,
            height: 2,
            background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
            marginBottom: 30,
            display: "flex",
          }}
        />

        {/* Chain */}
        <div
          style={{
            fontSize: 140,
            fontWeight: 400,
            color: "#ff4d5e",
            lineHeight: 1,
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          Chain
        </div>

        {/* Breaker */}
        <div
          style={{
            fontSize: 140,
            fontWeight: 400,
            background: "linear-gradient(180deg, #ffd700, #c9a84c, #8b6914)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            letterSpacing: "0.08em",
            marginTop: -15,
            display: "flex",
          }}
        >
          Breaker
        </div>

        {/* 2026 */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 400,
            background: "linear-gradient(180deg, #ffd700, #c9a84c, #8b6914)",
            backgroundClip: "text",
            color: "transparent",
            marginTop: 10,
            letterSpacing: "0.2em",
            display: "flex",
          }}
        >
          2026
        </div>

        {/* Bottom decorative line */}
        <div
          style={{
            width: 200,
            height: 2,
            background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
            marginTop: 30,
            marginBottom: 20,
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#a0a0a0",
            letterSpacing: "0.15em",
            display: "flex",
          }}
        >
          BREAK CHAINS. RIDE FOR CAUSE.
        </div>

        {/* Details */}
        <div
          style={{
            fontSize: 20,
            color: "#6b6b6b",
            marginTop: 15,
            letterSpacing: "0.1em",
            display: "flex",
          }}
        >
          SEPT 12, 2026 | W&OD TRAIL | HERNDON, VA
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Metal Mania",
          data: metalManiaFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
