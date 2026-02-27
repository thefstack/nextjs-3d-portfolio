import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Raj Sharma — Full Stack Developer | nextjs-3d-portfolio"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background circles decoration */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-60px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            display: "flex",
          }}
        />

        {/* Avatar circle */}
        <div
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            background: "rgba(237, 232, 245, 0.15)",
            border: "3px solid rgba(237, 232, 245, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontSize: "44px",
              fontWeight: "bold",
              color: "#EDE8F5",
              letterSpacing: "2px",
            }}
          >
            RS
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#EDE8F5",
            marginBottom: "12px",
            letterSpacing: "-1px",
          }}
        >
          Raj Sharma
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "28px",
            color: "#ADBDDA",
            marginBottom: "36px",
            letterSpacing: "1px",
          }}
        >
          Full Stack Developer
        </div>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "#EDE8F5",
            borderRadius: "2px",
            marginBottom: "36px",
            opacity: 0.6,
            display: "flex",
          }}
        />

        {/* Tech tags */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "800px",
          }}
        >
          {["Next.js 15", "Three.js", "React 19", "Framer Motion", "TypeScript"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                background: "rgba(237, 232, 245, 0.15)",
                border: "1px solid rgba(237, 232, 245, 0.3)",
                color: "#EDE8F5",
                fontSize: "18px",
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            fontSize: "18px",
            color: "rgba(237, 232, 245, 0.5)",
            letterSpacing: "1px",
          }}
        >
          github.com/thefstack
        </div>
      </div>
    ),
    { ...size }
  )
}
