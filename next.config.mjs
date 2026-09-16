import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  ...(isGitHubPages
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
