import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

// Image metadata
export const alt = "Lễ tốt nghiệp Hoàng Thu Thủy";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Read local fonts as buffers (Next.js ImageResponse requires TTF or OTF format, WOFF2 is not supported)
  const coldwellPath = path.join(process.cwd(), "public/FC-Coldwell-Bridges.otf");
  const coldwellData = fs.readFileSync(coldwellPath);

  const greatVibesPath = path.join(process.cwd(), "public/great-vibes.ttf");
  const greatVibesData = fs.readFileSync(greatVibesPath);

  const manropePath = path.join(process.cwd(), "public/manrope.ttf");
  const manropeData = fs.readFileSync(manropePath);

  // Read local images as base64 data URLs
  const butterflyPath = path.join(process.cwd(), "public/butterfly.png");
  const butterflyBuffer = fs.readFileSync(butterflyPath);
  const butterflyBase64 = `data:image/png;base64,${butterflyBuffer.toString("base64")}`;

  const sparklePath = path.join(process.cwd(), "public/sparkle.png");
  const sparkleBuffer = fs.readFileSync(sparklePath);
  const sparkleBase64 = `data:image/png;base64,${sparkleBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom right, #fcfcfc, #f7f5f0)",
          fontFamily: "sans-serif",
          color: "#4A4A4A",
          position: "relative",
          padding: "40px",
        }}
      >
        {/* Butterflies on the top-left */}
        <img
          src={butterflyBase64}
          alt="butterflies"
          style={{
            position: "absolute",
            left: "180px",
            top: "80px",
            width: 150,
            height: 120,
            opacity: 0.7,
          }}
        />

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <h1
            style={{
              fontFamily: "FC-Coldwell-Bridges",
              fontSize: "64px",
              letterSpacing: "12px",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Thiệp Mời
          </h1>
        </div>

        {/* Invitation Text with Sparkles */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Sparkles on the right */}
          <img
            src={sparkleBase64}
            alt="sparkle"
            style={{
              position: "absolute",
              right: "-80px",
              top: "-20px",
              width: 50,
              height: 50,
              opacity: 0.8,
            }}
          />

          <p
            style={{
              fontFamily: "Manrope",
              fontSize: "20px",
              letterSpacing: "2px",
              margin: 0,
              textAlign: "center",
              lineHeight: "1.6",
              fontWeight: 300,
            }}
          >
            Trân trọng kính mời bạn đến tham dự buổi lễ tốt nghiệp của
          </p>

          <h2
            style={{
              fontFamily: "Great Vibes",
              fontSize: "96px",
              margin: "10px 0",
              fontWeight: 400,
              color: "#4a4a4a",
            }}
          >
            Hoàng Thu Thủy
          </h2>

          <p
            style={{
              fontFamily: "Manrope",
              fontSize: "18px",
              letterSpacing: "3px",
              margin: 0,
              textAlign: "center",
              fontWeight: 300,
            }}
          >
            Đại học sư phạm Hà Nội
          </p>
        </div>

        {/* Bottom border decoration */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            width: "200px",
            height: "1px",
            backgroundColor: "#e2e2e2",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "FC-Coldwell-Bridges",
          data: coldwellData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Great Vibes",
          data: greatVibesData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Manrope",
          data: manropeData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
