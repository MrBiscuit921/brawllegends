// next.config.mjs
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          {
            key: "Permissions-Policy",
            value: "geolocation=(self), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};
