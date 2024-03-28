import { Container, Theme, } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from './auth/Provider';
import "./globals.css";
import NavBar from "./NavBar";
import './theme-config.css';
import QueryClientProvider from "./QueryClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "uconquer",
  description: "Online codeing arina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme>
              <nav>
                <NavBar></NavBar>
              </nav>
              <main className='p-8'>
                <Container>
                  {children}
                </Container>
              </main>
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>

    </html>
  );
}
