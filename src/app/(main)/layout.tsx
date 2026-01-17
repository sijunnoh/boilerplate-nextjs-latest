import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sample Ttile",
  description: "Sample Description",
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default MainLayout
