import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechFolkSolution — Web, Mobile & Software Development Agency",
  description:
    "We help startups and businesses build scalable digital products. Expert in Website Development, Mobile Apps, Custom Software, UI/UX Design, AI Solutions & Automation.",
  keywords:
    "software development, web development, mobile app development, UI/UX design, AI solutions, automation, digital agency",
  authors: [{ name: "TechFolkSolution" }],
  openGraph: {
    title: "TechFolkSolution — Premium Digital Agency",
    description:
      "Build powerful websites, apps & software with TechFolkSolution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-dark-900 text-white antialiased noise-overlay">
        {children}
      </body>
    </html>
  );
}
