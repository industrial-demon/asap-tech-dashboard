"use client";
import { ReactNode, useEffect, useState } from "react";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";


export const Providers = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider defaultTheme="dark" enableColorScheme={false} attribute="class">
      {/* <Theme> */}
        {children}
      {/* </Theme> */}
    </ThemeProvider>
  );
};
