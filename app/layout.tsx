import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { rootMetadata, viewport } from "./_lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = rootMetadata;
export { viewport };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", inter.variable)}>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
