import type { Metadata } from 'next';
import { Inter, Noto_Serif_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif-display',
});

export const metadata: Metadata = {
  title: 'COFFEETEAM',
  description: 'Dadlı anların və keyfiyyətli qəhvənin tək ünvanı.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className={cn(inter.variable, notoSerifDisplay.variable)} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
           <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
