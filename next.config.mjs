const isGithubPages = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/aimanAlii.github.io" : "",
  assetPrefix: isGithubPages ? "/aimanAlii.github.io/" : "",
  trailingSlash: true,
};

export default nextConfig;