import { ImageResponse } from "next/og";

export const alt = "Turn more inquiries into booked work with Nuerovas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#fbfaf7",
        color: "#172033",
        display: "flex",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px 80px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
        <div style={{ alignItems: "center", display: "flex", fontSize: 26, fontWeight: 700 }}>
          <div
            style={{
              alignItems: "center",
              background: "#172033",
              borderRadius: 8,
              color: "white",
              display: "flex",
              fontSize: 28,
              height: 52,
              justifyContent: "center",
              marginRight: 18,
              width: 52,
            }}
          >
            N
          </div>
          Nuerovas
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: 0, lineHeight: 1.05, marginTop: 66 }}>
          Turn more inquiries into booked work.
        </div>
        <div style={{ color: "#5b6678", fontSize: 28, lineHeight: 1.45, marginTop: 30 }}>
          Clearer websites, faster follow-up, and practical automation for local service businesses.
        </div>
      </div>
      <div style={{ alignItems: "center", display: "flex", height: 360, justifyContent: "center", width: 260 }}>
        <div style={{ background: "#dbe3ec", height: 4, position: "absolute", width: 180 }} />
        <div style={{ background: "#2f6f9f", border: "14px solid #e7f1f8", borderRadius: 999, height: 68, width: 68 }} />
        <div style={{ background: "#c87944", border: "14px solid #f8eadf", borderRadius: 999, height: 68, marginLeft: 110, width: 68 }} />
      </div>
    </div>,
    size,
  );
}
