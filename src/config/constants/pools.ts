import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()
console.log(serializedTokens,"serializedTokens")
const pools: SerializedPoolConfig[] = [
  // {
  //   sousId: 0,
  //   stakingToken: serializedTokens.sparco,
  //   earningToken: serializedTokens.sparco,
  //   contractAddress: {
  //     97: '0xc864FBF36F7C32303111a2693841dFf0B222c3CF',
  //     56: '0x72f3504446332BF563e2dE2752cd4C5888Be0FC6',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.03805175038',
  //   sortOrder: 0,
  //   isFinished: false,
  // },
  {
    sousId: 1,
    stakingToken: serializedTokens.stx,
    earningToken: serializedTokens.stx,
    contractAddress: {
      42161: '0xBb7A444dbc3EE386599632e607339E9dc43C3d43',
      56: '0x72f3504446332BF563e2dE2752cd4C5888Be0FC6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000006',
    sortOrder: 0,
    isFinished: false,
  },
  // {
  //   sousId: 2,
  //   stakingToken: serializedTokens.co2,
  //   earningToken: serializedTokens.sparco,
  //   contractAddress: {
  //     97: '0x4a58db0cd7a4a0f886042c7ece16af1be6ef868d',
  //     56: '0x6c3bD58Ab004E59eF7A91a775dd457A2f89fa74E',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.03805175038',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  // {
  //   sousId: 3,
  //   stakingToken: serializedTokens.trba,
  //   earningToken: serializedTokens.sparco,
  //   contractAddress: {
  //     97: '0x6be5677a9756d9b317f3e73ba027caf7acfac10a',
  //     56: '0xAd5818B2304a583f1937011bE438e3eE2edaE645',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.03805175038',
  //   sortOrder: 2,
  //   isFinished: false,
  // },
  // {
  //   sousId: 4,
  //   stakingToken: serializedTokens.meta,
  //   earningToken: serializedTokens.meta,
  //   contractAddress: {
  //     97: '0xc4f8d519af988068cb37fda96e72c5eda0b28bc1',
  //     56: '0x2499BafA7417361267181dE103125C47a091029B',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '1.902587519',
  //   sortOrder: 3,
  //   isFinished: false,
  // },
  // {
  //   sousId: 5,
  //   stakingToken: serializedTokens.sum,
  //   earningToken: serializedTokens.sparco,
  //   contractAddress: {
  //     97: '0x979C0827A050E4240c0d77c10707C0d742505b56',
  //     56: '0xa43Ab5c057e375b111f12FbB1DCFceac113cFeBF',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.04756468798',
  //   sortOrder: 4,
  //   isFinished: false,
  // }
]

export default pools
