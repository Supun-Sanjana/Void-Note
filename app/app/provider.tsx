"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/app/(components)/ui/sonner";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry: 3,
      gcTime: 5 * 60 * 1000, // 5 minutes in memory
      staleTime: 2 * 60 * 1000, // 2 minutes fresh data
    }
  }
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
