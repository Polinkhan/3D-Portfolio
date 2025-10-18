import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { StarsCanvas } from "@/components/layout/star-background";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://polinkhan.com"),
  title: "Polin Khan | Software Engineer",
  applicationName: "Polin Khan Portfolio",
  authors: {
    name: "Polin Khan",
    url: "https://polinkhan.com",
  },
  description:
    "Polin Khan is a skilled software engineer specializing in full stack development, React, Node.js, and cloud infrastructure. Currently enhancing expertise in DevOps, Polin is committed to building secure, scalable applications.",
  keywords: [
    "Polin",
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
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", href: "/favicon.png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Polin Khan | Software Engineer",
    description:
      "Polin Khan is a skilled software engineer specializing in full stack development, React, Node.js, and cloud infrastructure. Currently enhancing expertise in DevOps, Polin is committed to building secure, scalable applications.",
    url: "https://polinkhan.com",
    siteName: "Polin Khan Portfolio",
    images: [
      {
        url: "https://polinkhan.com/polinkhan_cover.png",
        width: 1200,
        height: 630,
        alt: "Polin Khan's profile",
      },
      {
        url: "https://polinkhan.com/polinkhan_schema.png",
        width: 720,
        height: 720,
        alt: "Polin Khan's profile",
      },
      {
        url: "https://polinkhan.com/Polinkhan_linkedin.jpeg",
        width: 800,
        height: 800,
        alt: "Polin Khan's Linkedin profile",
      },
      {
        url: "https://polinkhan.com/Polinkhan_facebook.jpg",
        width: 800,
        height: 800,
        alt: "Polin Khan's Linkedin profile",
      }      
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polin Khan | Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Node.js, DevOps, and Cloud Infrastructure.",
    images: ["https://polinkhan.com/polinkhan_cover.png"],
    creator: "@abusayedpolin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://polinkhan.com",
    languages: {
      "en-US": "https://polinkhan.com/en-US",
    },
  },
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

        {/* Enhanced JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://polinkhan.com/#person",
              name: "Polin Khan",
              url: "https://polinkhan.com",
              image: "https://polinkhan.com/polinkhan_schema.png",
              jobTitle: "Software Engineer",
              email: "mailto:info@polinkhan.com",
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
              knowsAbout: ["React", "React.js", "Node.js","Express.js", "DevOps", "AWS", "Docker"],
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
