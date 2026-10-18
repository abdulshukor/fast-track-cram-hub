import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Fast-Track Cram Hub", description: "Dynamic certification study hub" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
