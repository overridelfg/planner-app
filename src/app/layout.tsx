import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { QueryClient, QueryClientProvider } from "react-query";

import "./globals.scss";
import { SITE_NAME } from "@/constants/seo.constants";
import StoreProvider from "./StoreProvider";

import cn from "clsx";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_NAME,
  description: `%s | ${SITE_NAME}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex flex-col relative items-center min-h-screen justify-between",
        )}
      >
        <Providers>
          <StoreProvider>{children}</StoreProvider>
        </Providers>
      </body>
    </html>
  );
}
