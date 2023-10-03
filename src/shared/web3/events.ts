import { BigNumber, ethers } from 'ethers';
import ERC20Abi from '../abis/ERC20Abi.json'
import { SupportedNetworks } from 'src/constants/networks';
import { INFURA_PROJECT_ID } from 'src/constants/env';
import getLastUsedNetworkId from 'src/utils/get-last-used-network';

const mainnetProvider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`)
const testnetProvider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/')

type Address = string

const transferToken = async (to: Address) => {
  return null
}

const metamask = (window as any).ethereum as any

const transferNativeToken = async (from: Address, to: Address, amount: number) => {
  const chainId = getLastUsedNetworkId()
  const provider = chainId === SupportedNetworks.Ethereum ? mainnetProvider : testnetProvider

  const gasPrice = provider.getGasPrice()
  const txDetails = {
    "from": from,
    "to": to,
    "value": ethers.utils.parseEther(amount.toString()).toHexString(),
    "gasPrice": (await gasPrice).toHexString(),
    "gasLimit": ethers.utils.hexlify(100000)
  }

  return metamask.request({
    method: 'eth_sendTransaction',
    params: JSON.parse(JSON.stringify([txDetails])),
  })
}

const balanceOf = (token: Address, owner: Address, id?: string): Promise<BigNumber> => {
  const chainId = getLastUsedNetworkId()
  const provider = chainId === SupportedNetworks.Ethereum ? mainnetProvider : testnetProvider
  const contract = new ethers.Contract(token, ERC20Abi, provider)
  const balance = contract['balanceOf'](owner)
  return balance
}

const balanceOfNativeToken = (owner: Address): Promise<BigNumber> => {
  const chainId = getLastUsedNetworkId()
  const provider = chainId === SupportedNetworks.Ethereum ? mainnetProvider : testnetProvider
  const balance =  provider.getBalance(owner)
  return balance
}

export {
  balanceOf,
  balanceOfNativeToken,
  transferToken,
  transferNativeToken
}