import { EvmChain } from '@moralisweb3/common-evm-utils';
import { useCallback, useEffect, useState } from "react";
import { mainnetTokens, testnetTokens } from 'src/constants/app-tokens';
import { getTokensMetadata } from "src/shared/api";
import { useNetworkStore } from "src/state";
import { MToken } from 'src/types/moralis';


const useTokens = () => {
  const [loading, setLoading] = useState(false)
  const [tokens, setTokens] = useState<MToken[]>([])

  const { network } = useNetworkStore();
  
  const refetch = useCallback(async () => {
    let tokensAddresses = network?.chainId === EvmChain.ETHEREUM.hex ? mainnetTokens : testnetTokens

    try {
      setLoading(true)
      const tokens = await getTokensMetadata(tokensAddresses, network?.chainId)
      setTokens(tokens)
    } finally {
      setLoading(false)
    }
  }, [network?.chainId])

  useEffect(() => {
    if (loading) return
    refetch()
  }, [loading, network, refetch])

  return {
    tokens,
    loading,
    refetch
  }
}

export default useTokens