import { MetadataRoute } from "next";
import { personalInfo } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} — Portfolio`,
    short_name: personalInfo.name,
    description: personalInfo.shortBio,
    start_url: "/",
    display: "standalone",
    background_color: "#1a1024",
    theme_color: "#1a1024",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
