import { networks } from "src/constants/networks";
import { NETWORK_STORAGE } from "src/state";

export default function getLastUsedNetworkId () {
  const defaultChainId = networks[0].chainId 
  const localStorageState = localStorage.getItem(NETWORK_STORAGE)
  if (localStorageState) {
    const chainId =  JSON.parse(localStorageState).state?.network?.chainId
    return chainId ?? defaultChainId
  }
  return defaultChainId
}