import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/containers/Navbar";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Footer from "@/containers/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mel`s Bar",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Providers>
            <Navbar />
            <div className="ml-4 lg:ml-8 xl:ml-44 mr-4 lg:mr-8 xl:mr-12">
              {children}
              <Footer />
            </div>
          </Providers>
        </AppRouterCacheProvider>
        <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="cs_roulette_auth_bot" data-size="large" data-radius="20" data-auth-url="https://api.cs.rodoro.ru/" data-request-access="write"></script>
      </body>
    </html>
  );
}
