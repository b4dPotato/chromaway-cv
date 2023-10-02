import injectedModule from '@web3-onboard/injected-wallets'
import coinbaseWalletModule from '@web3-onboard/coinbase'

const injected = injectedModule()
const coinbase = coinbaseWalletModule()

const wallets = [injected, coinbase]

export default wallets