import { create } from "zustand"

type SampleStoreState = {
  sampleData: string | null
  getSampleData: () => string | null
  setSampleData: (sample: string) => void
}

export const useSampleStore = create<SampleStoreState>((set, get) => ({
  sampleData: null,
  getSampleData: () => {
    return get().sampleData
  },
  setSampleData: (sampleData: string) => {
    set({ sampleData })
  },
}))
