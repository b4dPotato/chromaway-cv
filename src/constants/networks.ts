import { INetwork } from "src/types/networks"

const networks: INetwork[] = [
  {
    chainId: '0x1',
    token: 'ETH',
    networkName: 'Ethereum Mainnet',
    rpcUrl: 'https://eth.drpc.org',
    logo: './networks/etherscan-logo.svg'
  },
  {
    chainId: '0x61',
    networkName: 'Binance Smart Chain Testnet',
    token: 'tBNB',
    rpcUrl: 'https://bsc-testnet.publicnode.com',
    logo: './networks/bnb-logo.svg'
  }
]

export default networks