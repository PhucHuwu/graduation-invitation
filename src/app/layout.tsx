import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Thiệp mời tốt nghiệp - Hoàng Thu Thủy",
  description: "Sự hiện diện của bạn là niềm vui to lớn đối với mình!",
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
