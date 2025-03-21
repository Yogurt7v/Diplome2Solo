import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Diplom work + Nest backend',
  description: 'Generated by create next app + Nest backend',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
