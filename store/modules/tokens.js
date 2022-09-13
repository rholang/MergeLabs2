import { orderBy } from 'lodash'
const axios = require('axios')

const state = {
  data: [
    {
      id: 'cosmos',
      name: 'Cosmos Hub',
      ecosystemName: 'Cosmos Hub',
      symbol: 'ATOM',
      price: {},
    },
    {
      id: 'iris-network',
      name: 'IRIS Network',
      ecosystemName: 'IRIS Hub',
      symbol: 'IRIS',
      price: {},
    },
    {
      id: 'terra-luna',
      name: 'Terra',
      ecosystemName: 'Terra',
      symbol: 'LUNA',
      price: {},
    },
    {
      id: 'terrausd',
      name: 'TerraUSD',
      ecosystemName: 'Terra',
      symbol: 'UST',
      price: {},
    },
    {
      id: 'binancecoin',
      name: 'Binance Coin',
      ecosystemName: 'Binance Chain',
      symbol: 'BNB',
      price: {},
    },
    {
      id: 'okb',
      name: 'OKB',
      ecosystemName: 'OKex Chain',
      symbol: 'OKB',
      price: {},
    },
    {
      id: 'crypto-com-chain',
      name: 'Crypto.com Coin',
      ecosystemName: 'Crypto.com',
      symbol: 'CRO',
      price: {},
    },
    {
      id: 'thorchain',
      name: 'Thorchain',
      ecosystemName: 'THORChain',
      symbol: 'RUNE',
      price: {},
    },
    {
      id: 'fetch-ai',
      name: 'Fetch.ai',
      ecosystemName: 'Fetch AI',
      symbol: 'FET',
      price: {},
    },
    {
      id: 'kucoin-shares',
      name: 'KuCoin Token',
      ecosystemName: 'KuChain',
      symbol: 'KCS',
      price: {},
    },
    {
      id: 'mirror-protocol',
      name: 'Mirror Protocol',
      ecosystemName: 'Mirror Protocol',
      symbol: 'MIR',
      price: {},
    },
    {
      id: 'kava',
      name: 'Kava.io',
      ecosystemName: 'Kava',
      symbol: 'KAVA',
      price: {},
    },
    {
      id: 'band-protocol',
      name: 'Band Protocol',
      ecosystemName: 'Band Protocol',
      symbol: 'BAND',
      price: {},
    },
    {
      id: 'oasis-network',
      name: 'Oasis Network',
      ecosystemName: 'Oasis Protocol',
      symbol: 'ROSE',
      price: {},
    },
    {
      id: 'akash-network',
      name: 'Akash Network',
      ecosystemName: 'Akash Network',
      symbol: 'AKT',
      price: {},
    },
    {
      id: 'secret',
      name: 'Secret',
      ecosystemName: 'Secret Network (prev. Enigma)',
      symbol: 'SCRT',
      price: {},
    },
    {
      id: 'anchor-protocol',
      name: 'Anchor Protocol',
      ecosystemName: 'Anchor Protocol',
      symbol: 'ANC',
      price: {},
    },
    {
      id: 'injective-protocol',
      name: 'Injective Protocol',
      ecosystemName: 'Injective Protocol',
      symbol: 'INJ',
      price: {},
    },
    {
      id: 'bluzelle',
      name: 'Bluzelle',
      ecosystemName: 'Bluzelle',
      symbol: 'BLZ',
      price: {},
    },
    {
      id: 'switcheo',
      name: 'Switcheo',
      ecosystemName: 'Switcheo TradeHub',
      symbol: 'SWTH',
      price: {},
    },
    {
      id: 'certik',
      name: 'CertiK',
      ecosystemName: 'Certik Chain',
      symbol: 'CTK',
      price: {},
    },
    {
      id: 'sentinel-group',
      name: 'Sentinel',
      ecosystemName: 'Sentinel',
      symbol: 'DVPN',
      price: {},
    },
    {
      id: 'hard-protocol',
      name: 'HARD Protocol',
      ecosystemName: 'Hard Protocol',
      symbol: 'HARD',
      price: {},
    },
    {
      id: 'oraichain-token',
      name: 'Oraichain Token',
      ecosystemName: 'Oraichain',
      symbol: 'ORAI',
      price: {},
    },
    {
      id: 'foam-protocol',
      name: 'FOAM',
      ecosystemName: 'FOAM',
      symbol: 'FOAM',
      price: {},
    },
    {
      id: 'kira-network',
      name: 'Kira Network',
      ecosystemName: 'Kira Interchain Exchange',
      symbol: 'KEX',
      price: {},
    },
    {
      id: 'e-money',
      name: 'e-Money',
      ecosystemName: 'e-Money',
      symbol: 'NGM',
      price: {},
    },
    {
      id: 'likecoin',
      name: 'LikeCoin',
      ecosystemName: 'LikeCoin',
      symbol: 'LIKE',
      price: {},
    },
    {
      id: 'starname',
      name: 'Starname',
      ecosystemName: 'Starname (iov)',
      symbol: 'IOV',
      price: {},
    },
    {
      id: 'sifchain',
      name: 'Sifchain',
      ecosystemName: 'Sifchain',
      symbol: 'EROWAN',
      price: {},
    },
    {
      id: 'bitsong',
      name: 'BitSong',
      ecosystemName: 'BitSong',
      symbol: 'BTSG',
      price: {},
    },
  ],
}

const mutations = {
  async initTokens(state) {
    // concatenate list of token ids for coingecko
    // reference: https://api.coingecko.com/api/v3/coins/list
    const tokenIdStrings = state.data.map((token) => token.id).join(',')

    // get price data from coingecko
    const prices = (
      await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${tokenIdStrings}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`
      )
    ).data

    // input price data for each token
    for (let i = 0; i < state.data.length; i++) {
      const token = state.data[i]
      const tokenPrice = prices[token.id]
      token.price = tokenPrice
    }
    state.data = []
    // order tokens by market cap
    state.data = orderBy(state.data, ['price.usd_market_cap'], ['desc'])
    // add ranks
    for (let i = 0; i < state.data.length; i++) {
      state.data[i].rank = i + 1
    }
  },
}

export default { state, mutations }
