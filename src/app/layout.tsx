import "@/app/globals.css";
import { ReactNode } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { UserProvider } from "@/context/UserContext";
import { PreviousPageProvider } from "@/context/PreviousPageContext";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon/favicon.png",
    apple: "/favicon/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 bg-white flex flex-col min-h-screen">
        {/* GTM noscript trong body */}
        <PreviousPageProvider>
          <UserProvider>
            <div className="relative bg-white">{children}</div>
          </UserProvider>
        </PreviousPageProvider>
      </body>
    </html>
  );
}
