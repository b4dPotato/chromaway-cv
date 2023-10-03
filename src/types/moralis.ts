export interface MToken {
  address: string;
  name: string;
  symbol: string;
  decimals: string;
  logo?: string | undefined;
  logo_hash?: string | undefined;
  thumbnail?: string | undefined;
  block_number?: string | undefined;
  validated?: string | undefined;
  possible_spam: boolean;
  verified_collection?: boolean | undefined;
}