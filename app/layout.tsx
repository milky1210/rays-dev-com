import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rays-dev.com'),
  title: 'RAYS — やってみたいを、つくってみる。',
  icons: { icon: '/favicon.svg' },
  description:
    'RAYSのポートフォリオ。ゲーム、数学、Webアプリを、触って遊べる形にしています。',
  openGraph: {
    title: 'RAYS — やってみたいを、つくってみる。',
    description:
      'ゲーム、数学、Webアプリを、触って遊べる形にしています。',
    url: 'https://rays-dev.com',
    siteName: 'RAYS',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-rays.png',
        width: 1734,
        height: 907,
        alt: 'RAYS — やってみたいを、つくってみる。',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAYS — やってみたいを、つくってみる。',
    description:
      'ゲーム、数学、Webアプリを、触って遊べる形にしています。',
    images: ['/og-rays.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
