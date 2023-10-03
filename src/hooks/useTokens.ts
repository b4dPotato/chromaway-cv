import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { mainnetTokens, testnetTokens, tokensSymbols } from 'src/constants/app-tokens';
import { SupportedNetworks } from "src/constants/networks";
import { getTokensInfo } from "src/shared/api";
import { useNetworkStore } from "src/state";
import { GetTokensInfoResponse } from "src/types/responses";
import { IToken } from "src/types/token";


const useTokens = () => {
  const fetchedOnce = useRef(false)

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<GetTokensInfoResponse[]>([])

  const { network } = useNetworkStore();
  
  const refetch = useCallback(async () => {
    try {
      setLoading(true)
      const tokens = await getTokensInfo(tokensSymbols)
      setData(tokens)
      fetchedOnce.current = true
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (loading || data.length || fetchedOnce.current) return
    refetch()
  }, [loading, refetch, data.length])

  const tokens: IToken[] = useMemo(() => {
    if (loading && !data.length) return []
    const networkTokens = network.chainId === SupportedNetworks.Ethereum ? mainnetTokens : testnetTokens
    const expandedTokens = []

    for (let value of data) {
      const tokenData = value.Data
      const knownTokenAddress = networkTokens.find(token => token.symbol.includes(tokenData.SYMBOL))?.address
      if (!knownTokenAddress) continue;

      expandedTokens.push({
        address: knownTokenAddress,
        symbol: tokenData.SYMBOL,
        name: tokenData.NAME,
        decimals: tokenData.ASSET_DECIMAL_POINTS,
        logo: tokenData.LOGO_URL,
      })
    }
    
    return expandedTokens
  }, [data, loading, network.chainId])

  return {
    tokens,
    loading,
    refetch
  }
}

export default useTokens