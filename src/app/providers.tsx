"use client";
import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";
import { theme } from "@/styles/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>{children}</SidebarDrawerProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
