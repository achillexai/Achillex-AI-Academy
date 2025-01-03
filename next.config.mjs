/** @type {import('next').NextConfig} */
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "img.icons8.com",
      "res.cloudinary.com",
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Development mode optimizations
    if (dev && !isServer) {
      // Disable state persistence in development
      config.optimization.runtimeChunk = false;
      config.optimization.splitChunks = false;
    }

    // Add SVGR support
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    // Add fallback for node modules not handled by Webpack
    config.resolve.fallback = {
      ...config.resolve.fallback,
      async_hooks: false, // Ignore async_hooks for Webpack
    };

    return config;
  },
};

export default withNextra(nextConfig);
