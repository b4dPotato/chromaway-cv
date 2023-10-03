import { INetwork } from "src/types/networks"

enum SupportedNetworks {
  Ethereum = '0x1',
  BscTestnet = '0x61'
}

const networks: INetwork[] = [
  {
    chainId: SupportedNetworks.Ethereum,
    token: 'ETH',
    networkName: 'Ethereum Mainnet',
    rpcUrl: 'https://eth.drpc.org',
    logo: './networks/etherscan-logo.svg',
  },
  {
    chainId: SupportedNetworks.BscTestnet,
    networkName: 'Binance Smart Chain Testnet',
    token: 'tBNB',
    rpcUrl: 'https://bsc-testnet.publicnode.com',
    logo: './networks/bnb-logo.svg',
  }
]

export { networks, SupportedNetworks }