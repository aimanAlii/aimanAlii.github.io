import { Metadata } from "next";
import { personalInfo } from "@/data/profile";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aimanalii.github.io/";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-image.png",
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "" ? title : `${title} | ${personalInfo.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: `${personalInfo.name} — Portfolio`,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    url: SITE_URL,
    email: personalInfo.email,
    address: personalInfo.location,
    sameAs: personalInfo.socials
      .filter((s) => s.icon !== "email" && s.icon !== "whatsapp")
      .map((s) => s.url),
  };
}
