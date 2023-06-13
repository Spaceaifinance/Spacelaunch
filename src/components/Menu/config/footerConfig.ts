import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Aboutsadad'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.spaceaifinance.exchange/contact-us',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.spaceaifinance.exchange/contact-us/telegram',
      },
      {
        label: t('CAKE token'),
        href: 'https://docs.spaceaifinance.exchange/tokenomics/cake',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://pancakeswap.creator-spring.com/',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.spaceaifinance.exchange/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.spaceaifinance.exchange/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.spaceaifinance.exchange/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.spaceaifinance.exchange',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.spaceaifinance.exchange/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.spaceaifinance.exchange/hiring/become-a-chef',
      },
    ],
  },
]
