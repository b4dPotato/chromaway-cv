import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface WalletState {
  isAuthorized: boolean
  lastUsedWallet: string | null
  setLastUsedWallet : (walletLabel: string) => void
  clearWallet: () => void
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      isAuthorized: false,
      lastUsedWallet: null,
      setLastUsedWallet: (wallet) => set({ lastUsedWallet: wallet, isAuthorized: true }),
      clearWallet: () => set({ lastUsedWallet: null, isAuthorized: false })
    }),
    {
      name: 'wallet-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)