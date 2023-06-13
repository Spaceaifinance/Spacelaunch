import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const StyledAboutUs = styled.div`

`

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div>
    <div className="aboutPageBgTop">
      <div className="wriseAboutLogo">Logo</div>
    </div>
    <Page>
      <StyledAboutUs className="aboutWrap">
        <Heading scale="xxl" className="abooutPageTitle">{t('About Us')}</Heading>
        <Text mb="16px">{t('about1')}.</Text>
<Text mb="16px">{t('about2')}</Text>


<Text mb="16px">{t('about3')}</Text>


        <Heading scale="xl" className="aboutContentTitle">{t('Space AI Finance- Fighting Cryptocurrency Carbon Footprint')}</Heading>
        <Text mb="16px">{t('about3')}.</Text>


<Text mb="16px">{t('about4')}.</Text>

<Text mb="16px">{t('about5')}.</Text>

<Text mb="16px">{t('about6')}.</Text>

<Text mb="16px">{t('about7')}</Text>

<Text mb="16px">{t('about8')}</Text>

<Heading scale="xl" className="aboutContentTitle">{t('Understanding Space AI Finance Token')}</Heading>
<Text mb="16px">{t('about9')}</Text>

<Heading scale="xl" className="aboutContentTitle">{t('Space AI Finance and the NFT ecosystem')}</Heading>
<Text mb="16px">{t('about10')}</Text>
<Text mb="16px">{t('about11')}</Text>
      </StyledAboutUs>

    </Page>
     <div className="socialFooter">
        <ul>
          <li><a href="https://twitter.com/the_spaceaifinance" rel="NoReferrer" target="_blank"><i className="fab fa-twitter no"><span>hidden space</span></i></a></li>
          <li><a href="ttps://www.instagram.com/the_spaceaifinance_/?__coig_restricted=1" rel="NoReferrer" target="_blank"><i className="fab fa-instagram"><span>hidden space</span></i></a></li>
          {/* <li><a href="https://www.instagram.com/the_spaceaifinance_/?__coig_restricted=1" rel="NoReferrer" target="_blank"><i className="fab fa-facebook-f"><span>hidden space</span></i></a></li> */}
          <li><a href="https://www.youtube.com/@the_spaceaifinance " rel="NoReferrer" target="_blank"><i className="fab fa-youtube"><span>hidden space</span></i></a></li>
          <li><a href="https://t.me/thespaceaifinance_community " rel="NoReferrer" target="_blank"><i className="fab fa-telegram-plane"><span>hidden space</span></i></a></li>
        </ul>
      </div>
      </div>
  )
}

export default AboutUs
