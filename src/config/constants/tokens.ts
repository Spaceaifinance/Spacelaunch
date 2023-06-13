import { ChainId, Token } from '@pancakeswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}
export const mainnetTokens = {
  // wsats: new Token(
  //   MAINNET,
  //   '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  //   18,
  //   'WETH',
  //   'Wrapped ETH',
  //   'https://www.binance.com/',
  // ),
  // rise: new Token(
  //   MAINNET,
  //   '0xa4e8f898e6a6abe8e3c71bf62eb5fef025353a01',
  //   18,
  //   'SpAI',
  //   'Sparco Bank',
  //   'https://defi.sparco.network/',
  // ),
  // sparco: new Token(
  //   MAINNET,
  //   '0xa4e8f898e6a6abe8e3c71bf62eb5fef025353a01',
  //   18,
  //   'SpAI',
  //   'Sparco Bank',
  //   'https://defi.sparco.network/',
  // ),
  // sum: new Token(
  //   MAINNET,
  //   '0x279199010Fa389942654719aC62cDA7496091dE3',
  //   18,
  //   'BSUM',
  //   'BSUM Bep20',
  //   'https://defi.sparco.network/',
  // ),
  // trba: new Token(
  //   MAINNET,
  //   '0x6f702c1eeFd33908E9d80747C373158CE4eb8b52',
  //   18,
  //   'TRBA',
  //   'Tree Bank',
  //   'https://defi.sparco.network/',
  // ),
  // ada: new Token(
  //   MAINNET,
  //   '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
  //   18,
  //   'ADA',
  //   'Cardano',
  //   'https://defi.sparco.network/',
  // ),
  // btcb: new Token(
  //   MAINNET,
  //   '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
  //   18,
  //   'BTCB',
  //   'BTCB Token',
  //   'https://defi.sparco.network/',
  // ),
  // doge: new Token(
  //   MAINNET,
  //   '0xba2ae424d960c26247dd6c32edc70b295c744c43',
  //   8,
  //   'DOGE',
  //   'DOGE Token',
  //   'https://defi.sparco.network/',
  // ),
  // dot: new Token(
  //   MAINNET,
  //   '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   18,
  //   'DOT',
  //   'Polkadot',
  //   'https://defi.sparco.network/',
  // ),
  // uni: new Token(
  //   MAINNET,
  //   '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
  //   18,
  //   'UNI',
  //   'UNI TOKEN',
  //   'https://defi.sparco.network/',
  // ),
  // meta: new Token(
  //   MAINNET,
  //   '0xfe750cbc661076F917bDd73Bf38708B5768dfd24',
  //   18,
  //   'META',
  //   'Meta Index',
  //   'https://defi.sparco.network/',
  // ),
  // cake: new Token(
  //   MAINNET,
  //   '0x38f63dc0e5ea3f70a6c66dc642691be98f0e2fdc',
  //   18,
  //   'SPARCO',
  //   'SPARCO Token',
  //   'https://pancakeswap.finance/',
  // ),
  // co2: new Token(
  //   MAINNET,
  //   '0x93ae1Ea1A9Dab503C1aaae6897D90C4F3e9adFbd',
  //   18,
  //   'CO2',
  //   'CO2 Token',
  //   'https://pancakeswap.finance/',
  // ),
  // busd: new Token(
  //   MAINNET,
  //   '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   18,
  //   'BUSD',
  //   'Binance USD',
  //   'https://www.paxos.com/busd/',
  // ),
  // tether: new Token(
  //   MAINNET,
  //   '0x55d398326f99059ff775485246999027b3197955',
  //   18,
  //   'Tether-USDT',
  //   'USDT',
  //   'https://www.paxos.com/busd/',
  // ),
  // syrup: new Token(
  //   MAINNET,
  //   '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   18,
  //   'SYRUP',
  //   'SyrupBar Token',
  //   'https://pancakeswap.finance/',
  // ),
  // bake: new Token(
  //   MAINNET,
  //   '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //   18,
  //   'BAKE',
  //   'Bakeryswap Token',
  //   'https://www.bakeryswap.org/',
  // ),
  // ripple: new Token(
  //   MAINNET,
  //   '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
  //    18,
  //   'XRP',
  //   'Ripple Token',
  //   'https://www.bakeryswap.org/',
  // ),
  wsats: new Token(
    TESTNET,
    '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    18,
    'WETH',
    'Wrapped WETH',
    'https://www.bakeryswap.org/',
  ),
  stx: new Token(
    TESTNET,
    '0x358E5D2378f5Fc3fA5504aEbb728c4C568F973a4',
    18,
    'SpAI',
    'SpAI',
    'https://www.bakeryswap.org/',
  ),
  xusd: new Token(
    TESTNET,
    '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    18,
    'USDT',
    'USDT',
    'https://www.bakeryswap.org/',
  ),
  cake: new Token(
    TESTNET,
    '0x358E5D2378f5Fc3fA5504aEbb728c4C568F973a4',
    18,
    'SpAI',
    'SpAI',
    'https://www.bakeryswap.org/',
  ),
}

export const testnetTokens = {
 
  wsats: new Token(
    TESTNET,
    '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    18,
    'WETH',
    'Wrapped WETH',
    'https://www.bakeryswap.org/',
  ),
  stx: new Token(
    TESTNET,
    '0x358E5D2378f5Fc3fA5504aEbb728c4C568F973a4',
    18,
    'SpAI',
    'SpAI',
    'https://www.bakeryswap.org/',
  ),
  xusd: new Token(
    TESTNET,
    '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    18,
    'USDT',
    'USDT',
    'https://www.bakeryswap.org/',
  )
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  console.log("token.chainId : 1 : ",chainId)
  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't

  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
