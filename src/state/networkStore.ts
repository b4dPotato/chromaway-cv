import { networks } from 'src/constants/networks'
import { INetwork } from 'src/types/networks'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface NetworkState {
  network: INetwork
  setNetwork: (value: INetwork) => void 
}

export const NETWORK_STORAGE = 'network-storage'

export const useNetworkStore = create<NetworkState>()(
  persist(
    (set) => ({
      network: networks[0],
      setNetwork: (value: INetwork) => set({ network: value })
    }),
    {
      name: NETWORK_STORAGE,
      storage: createJSONStorage(() => localStorage),
    }
  )
)