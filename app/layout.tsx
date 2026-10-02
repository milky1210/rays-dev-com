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
  title: 'RAYS — Play. Build. Share.',
  description:
    'RAYSのポートフォリオ。ゲーム、Webアプリ、映像の実験をつくっています。',
  openGraph: {
    title: 'RAYS — Play. Build. Share.',
    description:
      '思いつきを、触れるものに。ゲーム、Webアプリ、映像の実験をつくっています。',
    url: 'https://rays-dev.com',
    siteName: 'RAYS',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1792,
        height: 922,
        alt: 'RAYS — Play. Build. Share.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAYS — Play. Build. Share.',
    description:
      '思いつきを、触れるものに。ゲーム、Webアプリ、映像の実験をつくっています。',
    images: ['/og.png'],
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
