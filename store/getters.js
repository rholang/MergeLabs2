export const apps = (state) => state.apps.data
export const marketcap = (state) => {
  let usdCap = 0
  state.tokens.data.map((token) => (usdCap += token.price.usd_market_cap))
  return Number(usdCap / 1000 / 1000 / 1000).toFixed(2)
}
export const tokens = (state) => state.tokens.data
export const wallets = (state) => state.wallets.data
