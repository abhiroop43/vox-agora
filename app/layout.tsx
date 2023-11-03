import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vox Agora',
  description: 'A platform for real time chat, voice and video conference.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(montserrat.className, 'bg-white dark:bg-[#313338]')}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="voxagora-theme">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
