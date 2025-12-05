import { create } from "zustand"

type SampleDialogState = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useSampleDialog = create<SampleDialogState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
