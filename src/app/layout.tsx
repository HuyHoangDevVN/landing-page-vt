import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HTX Nông Nghiệp Công Nghệ Cao Vạn Thắng | Cây Chè Hữu Cơ",
  description:
    "Hợp tác xã nông nghiệp công nghệ cao Vạn Thắng - Tiên phong trong sản xuất cây chè hữu cơ với công nghệ AI, IoT và quy trình minh bạch 100%. Nông nghiệp tuần hoàn, phân hữu cơ vi sinh.",
  keywords: [
    "cây chè hữu cơ",
    "nông nghiệp công nghệ cao",
    "Vạn Thắng",
    "nông nghiệp tuần hoàn",
    "phân hữu cơ vi sinh",
    "AI nông nghiệp",
    "IoT nông nghiệp",
    "chè Khánh Hòa",
  ],
  authors: [{ name: "HTX Vạn Thắng" }],
  creator: "HTX Nông Nghiệp Công Nghệ Cao Vạn Thắng",
  publisher: "HTX Vạn Thắng",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    url: "https://vanthang-tea.vn",
    siteName: "HTX Vạn Thắng",
    title: "HTX Nông Nghiệp Công Nghệ Cao Vạn Thắng | Cây Chè Hữu Cơ",
    description:
      "Sản xuất cây chè hữu cơ với công nghệ AI, IoT và quy trình minh bạch 100%",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HTX Vạn Thắng Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTX Nông Nghiệp Công Nghệ Cao Vạn Thắng",
    description: "Sản xuất cây chè hữu cơ với công nghệ AI, IoT",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
