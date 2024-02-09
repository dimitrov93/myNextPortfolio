import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import { SnackbarProvider } from "./context/SnackbarContext";

export const metadata: Metadata = {
  title: "Tsvetomir's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800" suppressHydrationWarning={true}>
        <SnackbarProvider>
          <NavBar />
          <main>{children}</main>
        </SnackbarProvider>
      </body>
    </html>
  );
}
