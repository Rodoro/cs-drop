import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/containers/Navbar";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Footer from "@/containers/Footer";
import { auth } from "@/utils/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mel`s Bar",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log(session)
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Navbar />
          <div className="ml-4 lg:ml-8 xl:ml-40 mr-4 lg:mr-8 xl:mr-12">
            {children}
            <Footer />
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
