import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Graduation Invitation",
  description: "Graduation Invitation - Hoan Thu Thuy",
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
