import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SpAI',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in SpAI Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by SpAI), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `Space AI Finance | ${t('Home')}`,
      }
    case '/swap':
      return {
        title: `Space AI Finance | ${t('AI Swap')}`,
      }
    case '/add':
      return {
        title: `Space AI Finance | ${t('Add Liquidity')}`,
      }
    case '/remove':
      return {
        title: `Space AI Finance | ${t('Remove Liquidity')}`,
      }
    case '/liquidity':
      return {
        title: `Space AI Finance | ${t('Liquidity')}`,
      }
    case '/find':
      return {
        title: `Space AI Finance | ${t('Import Pool')}`,
      }
    case '/competition':
      return {
        title: `Space AI Finance | ${t('Trading Battle')}`,
      }
    case '/prediction':
      return {
        title: `Space AI Finance | ${t('Prediction')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `Space AI Finance | ${t('Leaderboard')}`,
      }
    case '/farms':
      return {
        title: `Space AI Finance | ${t('Farms')}`,
      }
    case '/farms/auction':
      return {
        title: `Space AI Finance | ${t('Farm Auctions')}`,
      }
    case '/pools':
      return {
        title: `Space AI Finance | ${t('Pools')}`,
      }
    case '/lottery':
      return {
        title: `Space AI Finance | ${t('Lottery')}`,
      }
    case '/ifo':
      return {
        title: `Space AI Finance | ${t('Initial Farm Offering')}`,
      }
    case '/teams':
      return {
        title: `Space AI Finance | ${t('Leaderboard')}`,
      }
    case '/voting':
      return {
        title: `Space AI Finance | ${t('Voting')}`,
      }
    case '/voting/proposal':
      return {
        title: `Space AI Finance | ${t('Proposals')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `Space AI Finance | ${t('Make a Proposal')}`,
      }
    case '/info':
      return {
        title: `Space AI Finance | ${t('Overview')} | ${t('Space AI Finance Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `Space AI Finance | ${t('Pools')} | ${t('Space AI Finance Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `Space AI Finance | ${t('Tokens')} | ${t('Space AI Finance Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `Space AI Finance | ${t('Overview')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')}`,
      }
    default:
      return null
  }
}
