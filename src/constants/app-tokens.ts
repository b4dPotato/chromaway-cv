import { IToken } from "src/types/token"

const mainnetTokens: IToken[] = [{
  symbol: 'wETH',
  address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
},
{
  symbol: 'USDC',
  address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
},
{
  symbol: 'CHR',
  address: '0x8A2279d4A90B6fe1C4B30fa660cC9f926797bAA2'
},
]

const testnetTokens: IToken[] = [{
  symbol: 'wBNB',
  address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
},
{
  symbol: 'USDC',
  address: '0x8A2279d4A90B6fe1C4B30fa660cC9f926797bAA2'
},
{
  symbol: 'tCHR',
  address: '0x16227D60f7a0e586C66B005219dfc887D13C9531'
},
]

const tokensSymbols = ['ETH', 'USDC', 'CHR', 'BNB']

export {
  mainnetTokens,
  testnetTokens,
  tokensSymbols,
}