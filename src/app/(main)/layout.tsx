import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sample Title",
  description: "Sample Description",
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default MainLayout
