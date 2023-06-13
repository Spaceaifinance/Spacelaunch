import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Home'),
    href: '/home',
    icon: 'Home',
    showItemsOnMobile:false,
    items: [

    ],
  },
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    // showItemsOnMobile: false,
    items: [
      {
        label: t('AI Swap'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Launchpad'),
    href: '/comingsoon',
    icon: 'Prize',
    showItemsOnMobile:false,
    items: [

    ],
  },
  {
    label: t('NFT Marketplace'),
    href: '/comingsoon',
    icon: 'Nft',
    showItemsOnMobile:false,
    items: [

    ],
  },
  // {
  //   label: t('Presale'),
  //   href: '/http://presale.spaceai.finance/',
  //   icon: 'Info',
  //   items: [

  //   ],
  // },
  // {
  //   label: t('Voting'),
  //   href: '/voting',
  //   icon: 'Voting',
  //   items: [

  //   ],
  // },
  // {
  //   label: t('Referral'),
  //   href: '/referral',
  //   icon: 'Referral',
  //   items: [
  //
  //   ],
  // },
  // {
  //   label: t('Ido'),
  //   href: '/ido',
  //   icon: 'Ido',
  //   items: [

  //   ],
  // },

]

export default config
