import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sample Ttile",
  description: "Sample Description",
}

const SampleLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default SampleLayout
