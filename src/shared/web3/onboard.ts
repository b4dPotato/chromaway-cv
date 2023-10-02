import init from "@web3-onboard/core"
import networks from "../../constants/networks"
import wallets from "./wallets"

const onboard = init({
  wallets,
  notify: { enabled: false },
  chains: networks.map(network => ({
    id: network.chainId,
    token: network.token,
    label: network.networkName,
    rpcUrl: network.rpcUrl
  })),
  appMetadata: {
    name: 'Transfer',
    icon: '<svg><svg/>',
    description: 'Transfer your crypto in one click'
  }
})

export default onboard
