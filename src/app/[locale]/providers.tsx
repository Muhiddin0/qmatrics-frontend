"use client";

import { ThemeProvider } from "next-themes";
import ReactQueryProvider from "./ReactQueryProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
}
