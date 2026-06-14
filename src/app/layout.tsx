import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Thiệp mời tốt nghiệp - Hoàng Thu Thủy",
  description: "Hãy cùng nhau kỷ niệm thành tựu này và chia sẻ niềm vui trong ngày đặc biệt này!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
