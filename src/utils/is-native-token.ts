import { nativeTokens } from "src/constants/app-tokens";

export default function isNativeToken (symbol: string) {
  return nativeTokens.includes(symbol)
}