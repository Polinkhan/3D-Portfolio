import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { StarsCanvas } from "@/components/layout/star-background";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polin Khan | Software Engineer",
  authors: {
    name: "Polin Khan",
    url: "https://polinkhan.com",
  },
  keywords: [
    "Polin Khan",
    "software engineer",
    "full stack development",
    "React",
    "Node.js",
    "DevOps",
    "cloud infrastructure",
    "Stamford University Bangladesh",
    "Brotecs Technologies Ltd.",
  ],
  icons: {
    icon: [
      {
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
  },
  description:
    "Polin Khan is a skilled software engineer specializing in full stack development, React, Node.js, and cloud infrastructure. Currently enhancing expertise in DevOps, Polin is committed to building secure, scalable applications.",

  openGraph: {
    title: "Polin Khan | Software Engineer",
    description:
      "Polin Khan is a skilled software engineer specializing in full stack development, React, Node.js, and cloud infrastructure. Currently enhancing expertise in DevOps, Polin is committed to building secure, scalable applications.",
    images: [
      {
        url: "https://polinkhan.com/images/polinkhan.png",
        width: 475,
        alt: "Polin Khan's profile mockup",
      },
    ],
    type: "website",
  },
  applicationName: "Polin Khan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://polinkhan.com" />
        <link
          rel="preload"
          href="/fonts/GeistVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMonoVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Polin Khan",
              url: "https://polinkhan.com",
              image: "https://polinkhan.com/images/polinkhan.png",
              jobTitle: "Software Engineer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                postalCode: "1362",
                addressCountry: "Bangladesh",
              },
              sameAs: [
                "https://github.com/Polinkhan",
                "https://www.linkedin.com/in/abusayedpolin",
                "https://www.instagram.com/abusayedpolin",
                "https://www.facebook.com/abusayedpolin",
              ],
              description:
                "Polin Khan is a skilled software engineer specializing in full stack development, React, Node.js, and cloud infrastructure. Currently enhancing expertise in DevOps, Polin is committed to building secure, scalable applications.",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Stamford University Bangladesh",
                url: "https://www.stamforduniversity.edu.bd",
              },
              worksFor: {
                "@type": "Organization",
                name: "Brotecs Technologies Ltd.",
                url: "https://brotecs.com",
              },
              knowsAbout: ["React.js", "Node.js", "DevOps", "AWS", "Docker"],
              birthDate: "1999-11-10",
            }),
          }}
        />
      </head>
      <body className={cn("bg-[#030014] overflow-y-scroll overflow-x-hidden", inter.className)}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
