/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
module.exports = {
  ...,
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
}
