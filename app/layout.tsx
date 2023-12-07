import './globals.css';
import type { Metadata } from 'next';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Supabase Album',
  description:
    'Supabase SynthWave. The best soundtrack to build an app in a weekend and scale to billions.',
  keywords: ['synthwave', 'supabase', 'ai', 'soundtrack'],
  openGraph: {
    title: 'Supabase Album',
    url: 'https://supabase.productions/',
    images: ['/images/supabase-album-cover.png']
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
