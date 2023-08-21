/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    LOCAL_API_URL: 'http://startril-backend.test/',
    API_URL: 'https://api.startril.com.br/public/',
    META_PIXEL: '289858882437346',
    BLOG_URL: 'https://graphql.datocms.com/',
    BLOG_TOKEN: '59c0973154505046d9f8f4b1ccf7c4',
  },
}

module.exports = nextConfig
