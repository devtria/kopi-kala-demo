/** @type {import('next').NextConfig} */
// Jika dijalankan di GitHub Actions (GitHub Pages), set basePath ke nama repository
const isGitHubActions = process.env.GITHUB_ACTIONS || false;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGitHubActions ? '/kopi-kala-demo' : '');

const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  // trailingSlash memastikan rute statis pada GitHub Pages dimuat tanpa 404
  trailingSlash: true,
};

export default nextConfig;
