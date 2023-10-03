import { EvmChain } from '@moralisweb3/common-evm-utils';
import { INetwork } from "src/types/networks"

const networks: INetwork[] = [
  {
    chainId: EvmChain.ETHEREUM.hex,
    token: 'ETH',
    networkName: 'Ethereum Mainnet',
    rpcUrl: 'https://eth.drpc.org',
    logo: './networks/etherscan-logo.svg'
  },
  {
    chainId: EvmChain.BSC_TESTNET.hex,
    networkName: 'Binance Smart Chain Testnet',
    token: 'tBNB',
    rpcUrl: 'https://bsc-testnet.publicnode.com',
    logo: './networks/bnb-logo.svg'
  }
]

export default networks