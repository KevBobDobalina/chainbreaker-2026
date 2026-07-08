import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 28 28">
          <circle cx="10" cy="10" r="5" fill="none" stroke="#ff4d5e" strokeWidth="2.5" />
          <circle cx="18" cy="18" r="5" fill="none" stroke="#ff4d5e" strokeWidth="2.5" />
          <line x1="13" y1="13" x2="15" y2="15" stroke="#ff4d5e" strokeWidth="2" />
          {/* Break mark */}
          <line x1="14" y1="11" x2="17" y2="8" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="14" y1="11" x2="11" y2="8" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
