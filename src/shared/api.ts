import Moralis from 'moralis';
import { API_KEY } from 'src/constants/env';
import { MToken } from 'src/types/moralis';

Moralis.start({
  apiKey: API_KEY,
});

const getTokensMetadata = async (tokensAdresses: string[], chainId: string): Promise<MToken[]> => {
  const response = await Moralis.EvmApi.token.getTokenMetadata({
    addresses: tokensAdresses,
    chain: chainId,
  });

  return response.toJSON()
};

export {
  getTokensMetadata
}
