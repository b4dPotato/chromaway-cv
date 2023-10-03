export interface GetTokensInfoResponse {
  Data: Data
  Err: Err
}

export interface Data {
  TYPE: string
  ID: number
  SYMBOL: string
  URI: string
  CREATED_ON: number
  UPDATED_ON: number
  ASSET_TYPE: string
  NAME: string
  LOGO_URL: string
  ASSET_DESCRIPTION: string
  ASSET_DESCRIPTION_SUMMARY: string
  ASSET_DESCRIPTION_SNIPPET: string
  PUBLIC_NOTICE: any
  LAUNCH_DATE: number
  HAS_SMART_CONTRACT_CAPABILITIES: number
  IS_USED_IN_DEFI: number
  IS_USED_IN_NFT: number
  WEBSITE_URL: string
  BLOG_URL: string
  WHITE_PAPER_URL: string
  OTHER_DOCUMENT_URLS: OtherDocumentUrls[]
  PROJECT_LEADERS: ProjectLeaders[]
  ASSET_INDUSTRIES: AssetIndustries[]
  ASSET_CATEGORY_TOPLISTS: any
  CONSENSUS_MECHANISMS: ConsensusMechanisms[]
  CONSENSUS_ALGORITHM_TYPES: ConsensusAlgorithmTypes[]
  HASHING_ALGORITHM_TYPES: HashingAlgorithmTypes[]
  ASSET_DECIMAL_POINTS: number
  SUPPLY_MAX: number
  SUPPLY_ISSUED: number
  SUPPLY_TOTAL: number
  SUPPLY_CIRCULATING: number
  SUPPLY_FUTURE: number
  SUPPLY_LOCKED: number
  SUPPLY_BURNT: number
  SUPPLY_STAKED: number
  TARGET_BLOCK_MINT: number
  TARGET_BLOCK_TIME: number
  LAST_BLOCK_NUMBER: number
  LAST_BLOCK_TIMESTAMP: number
  LAST_BLOCK_TIME: number
  LAST_BLOCK_SIZE: number
  LAST_BLOCK_ISSUER: any
  LAST_BLOCK_MINT: number
  LAST_BLOCK_BURN: any
  LAST_BLOCK_TRANSACTION_FEE_TOTAL: number
  LAST_BLOCK_TRANSACTION_COUNT: number
  LAST_BLOCK_HASHES_PER_SECOND: number
  LAST_BLOCK_DIFFICULTY: number
  MKT_CAP_PENALTY: any
  EXPLORER_ADDRESSES: ExplorerAddresses[]
  BURN_ADDRESSES: BurnAddresses[]
  LOCKED_ADDRESSES: LockedAddresses[]
  SUPPORTED_STANDARDS: SupportedStandards[]
  SUPPORTED_PLATFORMS: SupportedPlatforms[]
  LAYER_TWO_SOLUTIONS: LayerTwoSolutions[]
  PRIVACY_SOLUTIONS: any
  SEO_TITLE: string
  SEO_DESCRIPTION: string
  OTHER_SOCIAL_NETWORKS: OtherSocialNetworks[]
  HELD_TOKEN_SALE: number
  HELD_EQUITY_SALE: number
}

export interface OtherDocumentUrls {
  TYPE: string
  URL: string
  VERSION?: number
  COMMENT?: string
}

export interface ProjectLeaders {
  LEADER_TYPE: string
  FULL_NAME: string
  CONTACT_MEDIUM?: string
  ADDRESS: string
  COMMENTS: string
}

export interface AssetIndustries {
  ASSET_INDUSTRY: string
}

export interface ConsensusMechanisms {
  NAME: string
}

export interface ConsensusAlgorithmTypes {
  NAME: string
  DESCRIPTION: string
}

export interface HashingAlgorithmTypes {
  NAME: string
}

export interface ExplorerAddresses {
  URL: string
}

export interface BurnAddresses {
  NAME: string
  BLOCKCHAIN: string
  ADDRESS: string
  DESCRIPTION: string
}

export interface LockedAddresses {
  BLOCKCHAIN: string
  ADDRESS: string
  DESCRIPTION: string
  NAME: string
}

export interface SupportedStandards {
  NAME: string
}

export interface SupportedPlatforms {
  BLOCKCHAIN: string
  TOKEN_STANDARD: string
  BRIDGE_OPERATOR: string
  EXPLORER_URL: string
  SMART_CONTRACT_ADDRESS: string
  LAUNCH_DATE: number
  TRADING_AS: string
  DECIMALS: number
  IS_ASSET_ISSUER?: boolean
  IS_INHERITED?: boolean
  RETIRE_DATE?: number
}

export interface LayerTwoSolutions {
  NAME: string
  CATEGORY: string
  DESCRIPTION: string
  WEBSITE_URL?: string
}

export interface OtherSocialNetworks {
  NAME: string
  URL: string
}

export interface Err {}
