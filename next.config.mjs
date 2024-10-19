/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value: "",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
