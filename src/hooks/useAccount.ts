import { useWallets } from '@web3-onboard/react'

const useAccount = () => {
  const [wallets] = useWallets()
  return wallets?.accounts[0]?.address
}

export default useAccount 