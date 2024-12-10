/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    REACT_APP_IMAGES_PATH: '/assets/images',
  },
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
