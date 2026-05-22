/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Comprime respostas em produção
  compress: true,

  // Remove header "X-Powered-By: Next.js"
  poweredByHeader: false,

  // Otimizações de imagem (quando começar a usar)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Adicione aqui domínios externos quando precisar
      // { protocol: 'https', hostname: 'cdn.exemplo.com' },
    ],
  },

  // Headers de segurança e performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirecionamentos das URLs antigas (.html) → novas rotas Next.js
  async redirects() {
    return [
      { source: '/Reative Systems Site.html', destination: '/', permanent: true },
      { source: '/Servico Automacao.html', destination: '/servicos/automacao', permanent: true },
      { source: '/Servico Sites e Sistemas.html', destination: '/servicos/sites', permanent: true },
      { source: '/Servico Suporte.html', destination: '/servicos/suporte', permanent: true },
      { source: '/Servico Consultoria.html', destination: '/servicos/consultoria', permanent: true },
      { source: '/Privacidade.html', destination: '/privacidade', permanent: true },
      { source: '/Termos.html', destination: '/termos', permanent: true },
      { source: '/Blog Post.html', destination: '/blog/planilha-virou-sistema', permanent: true },
    ];
  },
};

export default nextConfig;
