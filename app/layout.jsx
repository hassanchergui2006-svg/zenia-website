import './globals.css';

export const metadata = {
  title: 'ZENIA — Focus & Calm',
  description:
    'ZENIA accompagne les étudiants et jeunes actifs marocains avec une routine naturelle pensée pour réduire le stress, favoriser la détente et garder le focus.',
  keywords: 'ZENIA, bien-être, gummies, anti-stress, naturel, Maroc, étudiants',
  openGraph: {
    title: 'ZENIA — Focus & Calm',
    description: 'Ton bien-être, notre priorité. Découvrez nos gummies naturels anti-stress.',
    type: 'website',
    locale: 'fr_MA',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Kalam:wght@300;400;700&family=Nunito+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
