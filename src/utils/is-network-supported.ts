import { networks } from "src/constants/networks";

export default function isNetworkSupported (chainId?: string) {
  return networks.some(network => network.chainId === chainId)
}