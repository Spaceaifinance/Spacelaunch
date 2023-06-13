import tokens from './tokens'
import { SerializedFarmConfig } from './types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: null,
    lpSymbol: 'SpAI-ETH LP',
    lpAddresses: {
      97: '0x7138d0ede9fb59b80325baf86dac869952fdfa08',
      56: '0x38f63dc0e5ea3f70a6c66dc642691be98f0e2fdc',
    },
    token: tokens.stx,
    quoteToken: tokens.wsats,
  },
]

export default priceHelperLps
