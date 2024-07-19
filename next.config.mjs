/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: [
                new URL("http://localhost:3000").host,
                new URL("https://3jd0cntg-3000.brs.devtunnels.ms").host,
            ],
        },
    },
};

export default nextConfig;

/*
const nextConfig = {
    async rewrites() {
        return process.env.NODE_ENV !== 'production' ? [
          {
            source: '/api/:path*',
            destination: 'http://localhost:8000/:path*',
          },
          {
            source: '/media/:path*',
            destination: 'http://localhost:9000/:path*',
          },
        ] : []
    },
    images: {
      remotePatterns: process.env.NODE_ENV !== 'production' ? [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '',
          pathname: '/media/**',
        },
      ] : [
        {
          protocol: 'https',
          hostname: 'qa.myappdomain.au',
          port: '',
          pathname: '/media/**',
        },        
      ],
    },
    experimental: {
      serverActions: {
        allowedOrigins: [
          'http://localhost',
          'https://qa.myappdomain.au/api',
        ]
      }
    }
}
*/
