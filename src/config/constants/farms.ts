import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  // {
  //   pid: 0,
  //   lpSymbol: 'SpAI',
  //   lpAddresses: {
  //     42161: '0x82637dCCc4Aa3A8Bd0266e95A301ed22c40E3064',
  //     97: '0x9D1f8C941D4A0745FEf6D6cC02b0FEFC93d3e47f',
  //     56: '0x0839dFA1Fc799Dcd170491c0BA81BBEC0ee44773',
  //   },
  //   token: serializedTokens.stx,
  //   quoteToken: serializedTokens.xusd,

  // },
  {
    pid: 1,
    lpSymbol: 'SpAI-USDT LP',
    lpAddresses: {
      42161: '0xa445043ecc8352578fb9e069facaad8d997dcef0',
      97: '0x99A962E96EA245692Bf3422257CB41a6d1bA97b1',
    },
    token: serializedTokens.stx,
    quoteToken: serializedTokens.xusd,

  },
  {
    pid: 2,
    lpSymbol: 'SpAI-ETH LP',
    lpAddresses: {
      42161: '0xD51045219cCD4bAef008748A217d2B3e948ceB70',
      97: '0x0839dFA1Fc799Dcd170491c0BA81BBEC0ee44773',
    },
    token: serializedTokens.stx,
    quoteToken: serializedTokens.wsats,

  },
  {
      pid: 3,
      lpSymbol: 'ETH-USDT LP',
      lpAddresses: {
        42161: '0xcbc92fdce0175a2e878f12eb6dce669263753275',
        97: '0x536F8c5B1Bb2893c3535b97f1c90F7FBeD9Ea4aa',
      },
      token: serializedTokens.wsats,
      quoteToken: serializedTokens.xusd,

    },
    // {
    //   pid: 4,
    //   lpSymbol: 'SpAI-META LP',
    //   lpAddresses: {
    //     97: '0x5F63D90347572127964EF17661221C04D698e282',
    //     56: '0xC460C9C090cA0ec03c2A43ecd679bBa6fC331aD3',
    //   },
    //   token: serializedTokens.meta,
    //   quoteToken: serializedTokens.sparco,
    // },
    // {
    //   pid: 5,
    //   lpSymbol: 'SpAI-TRBA LP',
    //   lpAddresses: {
    //     97: '0x5F63D90347572127964EF17661221C04D698e282',
    //     56: '0xf81099232631c9fb2a2e8660870AaCE281cb09DE',
    //   },
    //   token: serializedTokens.trba,
    //   quoteToken: serializedTokens.sparco,

    // },
    // {
    //   pid: 6,
    //   lpSymbol: 'SpAI-CO2 LP',
    //   lpAddresses: {
    //     97: '0x5F63D90347572127964EF17661221C04D698e282',
    //     56: '0x1BF97909D30aeF1eC10C10dA3beF9A2b373086Fd',
    //   },
    //   token: serializedTokens.co2,
    //   quoteToken: serializedTokens.sparco,
    // },
    // {
    //   pid: 7,
    //   lpSymbol: 'ETH-BUSD LP',
    //   lpAddresses: {
    //     97: '0x5F63D90347572127964EF17661221C04D698e282',
    //     56: '0x1aFB420613431cA7C2b23756102Ea75048d84786',
    //   },
    //   token: serializedTokens.busd,
    //   quoteToken: serializedTokens.wsats,
    // },
  // {
  //   pid: 2,
  //   lpSymbol: 'SpAI-ETH LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0x6d5e2cF97D38925a53D62ffE0b3fC00Ab8E30d31',
  //   },
  //   token: serializedTokens.wsats,
  //   quoteToken: serializedTokens.rise,
  //
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'SpAI-TETHER LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0x7fb9A3d3dd3BB3d6A343fBac172Cbd50CdeC4DC8',
  //   },
  //   token: serializedTokens.tether,
  //   quoteToken: serializedTokens.rise,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'SpAI-SUM LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0x8AfCB3e065bAce59AC78882b49F2274364c8a6Af',
  //   },
  //   token: serializedTokens.sum,
  //   quoteToken: serializedTokens.rise,
  //
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'SpAI-TRBA LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0xd18A4ee42e79dF6711A83832e26A74F5aC199Da6',
  //   },
  //   token: serializedTokens.trba,
  //   quoteToken: serializedTokens.rise,
  //
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'SpAI-ADA LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0x0D523D92Aec4FA1cDF39D1b85cA2f8290b4b71EE',
  //   },
  //   token: serializedTokens.ada,
  //   quoteToken: serializedTokens.rise,
  //
  // },
  // // {
  // //   pid: 7,
  // //   lpSymbol: 'SpAI-EJCO LP',
  // //   lpAddresses: {
  // //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  // //     56: '0x8c00DC343712FEdf31ffAC88A0f5d52d7D128405',
  // //   },
  // //   token: serializedTokens.ejco,
  // //   quoteToken: serializedTokens.rise,
  // //
  // // },
  // // {
  // //   pid: 8,
  // //   lpSymbol: 'SpAI-QBBW LP',
  // //   lpAddresses: {
  // //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  // //     56: '0x27Ef651B430d646EC1b0FBA898A0999887721565',
  // //   },
  // //   token: serializedTokens.qbbw,
  // //   quoteToken: serializedTokens.rise,
  // //
  // // },
  // {
  //   pid: 9,
  //   lpSymbol: 'SpAI-BTCB LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0xbcbc8c0e8ab83994da608a7673e0e5b2dd82ffa0',
  //   },
  //   token: serializedTokens.btcb,
  //   quoteToken: serializedTokens.rise,
  //
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'SpAI-DOGE LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0x946ce18985694542be8594039d27496D53389839',
  //   },
  //   token: serializedTokens.doge,
  //   quoteToken: serializedTokens.rise,
  //
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'SpAI-DOT LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0xB8e9a16D61Ba3d994E03bc51B22d00F48DFB0F45',
  //   },
  //   token: serializedTokens.dot,
  //   quoteToken: serializedTokens.rise,
  //
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'SpAI-UNI LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0xcd8c52c5dc3d1e4fbf45b735c77131e6ef660771',
  //   },
  //   token: serializedTokens.uni,
  //   quoteToken: serializedTokens.rise,
  // },
  // {
  //   pid: 13,
  //   lpSymbol: 'SpAI-META LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0x524cE8168dEE080FbF31881a6Dae3D19DE35411f',
  //   },
  //   token: serializedTokens.meta,
  //   quoteToken: serializedTokens.rise,
  //
  // },
  // {
  //   pid: 14,
  //   lpSymbol: 'META-BTCB LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0x50F1Fbb8471C3519ff5bB9c91F7Bd02e2c4F9bCB',
  //   },
  //   token: serializedTokens.btcb,
  //   quoteToken: serializedTokens.meta,
  // },
  // {
  //   pid: 15,
  //   lpSymbol: 'META-TETHER LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0x7A4Ef862b8CA068aE069AAcFD79b5F3772042b19',
  //   },
  //   token: serializedTokens.meta,
  //   quoteToken: serializedTokens.tether,
  //
  // },
  // // {
  // //   pid: 16,
  // //   lpSymbol: 'SUM-BTCB LP',
  // //   lpAddresses: {
  // //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  // //     56: '0x9Cc2d55579c0B918443b8827E007684b888Bdc6A',
  // //   },
  // //   token: serializedTokens.btcb,
  // //   quoteToken: serializedTokens.sum,
  // // },
  // {
  //   pid: 18,
  //   lpSymbol: 'TETHER-BUSD LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0x8320516f5770802317BFD60d38020f8D3041dB34',
  //   },
  //   token: serializedTokens.tether,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 19,
  //   lpSymbol: 'CO2-BUSD LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0x157eE519627AF93d881D23fc6707139e7b118957',
  //   },
  //   token: serializedTokens.co2,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 20,
  //   lpSymbol: 'SpAI-RIPPLE LP',
  //   lpAddresses: {
  //     97: '0x5F63D90347572127964EF17661221C04D698e282',
  //     56: '0x1DbE3311D528AfB1fB836c09a0a6Ff9d50Df6fD4',
  //   },
  //   token: serializedTokens.ripple,
  //   quoteToken: serializedTokens.rise,
  // },

]

export default farms
