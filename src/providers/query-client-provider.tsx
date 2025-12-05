"use client"

import { useState } from "react"

import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { QUERY_CLIENT_CONFIG } from "@/constants/query"

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient(QUERY_CLIENT_CONFIG))

  return (
    <Provider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  )
}
