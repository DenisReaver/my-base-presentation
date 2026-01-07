// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top 10 BASE ecosystem projects', 
  description: 'Presentation of the best projects of the Base ecosystem',
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <bo
