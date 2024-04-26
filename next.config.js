/** @type {import('next').NextConfig} */
const nextConfig = {
    jsc: {
        transform: {
          react: {
            throwIfNamespace: false,
          },
        },
      },
    reactStrictMode: false,
}

module.exports = nextConfig
