import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AppShell } from "@/components/AppShell";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Residency Lab 驻留实验室 | 艺术驻留申请助手",
  description: "为青年艺术家匹配可信驻留机会，并提供成本判断、材料准备和申请管理工具。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={geist.variable}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
