import localFont from "next/font/local"

import { THEME_DEFAULT_THEME, THEME_ENABLE_SYSTEM } from "@/constants/theme"
import { QueryClientProvider } from "@/providers/query-client-provider"
import { ThemeProvider } from "@/providers/theme-provider"

import "./globals.css"

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${pretendard.variable} flex flex-col font-sans`}>
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
