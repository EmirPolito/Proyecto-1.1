import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"; // Usamos next-themes directamente
import { AnimatedHeader } from "@/components/animated-header";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RALQ",
  description: "Plataforma RA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="es" suppressHydrationWarning>
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@300;400;500;700&family=Krub:wght@200;300;400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </head>

        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <ThemeProvider
            attribute="data-theme" // importante: data-theme para que tus variables CSS se apliquen
            defaultTheme="system"
            enableSystem
          >
            <AnimatedHeader />

            {/* BOTONES DE AUTENTICACIÓN */}
            <header className="fixed top-0 right-0 z-50 flex items-center justify-end px-5 h-20">
              <SignedOut>
                <SignInButton>
                  <button className="cursor-pointer bg-white text-gray-800 rounded-full font-medium text-sm h-10 px-4 border border-gray-300 hover:bg-gray-100">
                    Sign In
                  </button>
                </SignInButton>

                <SignUpButton>
                  <button className="cursor-pointer ml-4 bg-[#155dc9] text-white rounded-full font-medium text-sm h-10 px-4">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center justify-center rounded-full border-gray-200 p-1 shadow-sm hover:shadow-md transition">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-9 h-9",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </header>

            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
