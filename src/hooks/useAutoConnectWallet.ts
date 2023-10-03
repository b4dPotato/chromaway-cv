import { useEffect } from "react"
import onboard from "src/shared/web3/onboard"
import { useWalletStore } from "../state"

const useAutoConnectWallet = () => {
  const { lastUsedWallet, isAuthorized } = useWalletStore()

  useEffect(() => {
    const { wallets } = onboard.state.get()

    if (wallets.length === 0 && lastUsedWallet && isAuthorized) {
      onboard.connectWallet({ autoSelect: { label: lastUsedWallet, disableModals: false } })
    }
  }, [isAuthorized, lastUsedWallet])
}

export default useAutoConnectWallet