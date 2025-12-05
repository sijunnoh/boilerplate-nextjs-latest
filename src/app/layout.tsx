import { THEME_DEFAULT_THEME, THEME_ENABLE_SYSTEM } from "@/constants/theme"
import { QueryClientProvider } from "@/providers/query-client-provider"
import { ThemeProvider } from "@/providers/theme-provider"

import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="flex flex-col">
        <QueryClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme={THEME_DEFAULT_THEME}
            enableSystem={THEME_ENABLE_SYSTEM}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
