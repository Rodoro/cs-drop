import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/containers/Navbar";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import SupportVidget from "@/components/SupportVidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mel`s Bar",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="ru">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <AppRouterCacheProvider>
            <Navbar />
            {children}
            <SupportVidget />
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
