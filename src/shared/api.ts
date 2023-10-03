import axios from 'axios';
import { GetTokensInfoResponse } from 'src/types/responses';

const API_URL = 'https://data-api.cryptocompare.com'

const getTokensInfo = async (tokensSymbols: string[]): Promise<GetTokensInfoResponse[]> => {
  const response = await Promise.all(tokensSymbols.map(symbol => axios.get(`${API_URL}/asset/v1/data/by/symbol?asset_symbol=${symbol}`).then(res => res.data)))
  return response
};

export {
  getTokensInfo
};

