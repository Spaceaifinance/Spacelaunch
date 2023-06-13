import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <div className="farm_page_bg farms_bg_pos">
<img alt="logo" src="../../../../images/design.png" className='designimg designimg_moreindex notf_design'/>

      <StyledNotFound className='pos_noy_f'>
<img  alt="logo"src="../../../../images/logoIcon.png" className='notfound_img'/>

        {/* <LogoIcon width="64px" mb="8px" /> */}
        <Heading scale="xxl">404</Heading>
        <Text mb="16px">{t('Oops, page not found.')}</Text>
        <Button as={Link} to="/" scale="sm" className='theme-btn-notfound'>
          {t('Back Home')}
        </Button>
      </StyledNotFound>
      </div>
    </Page>
  )
}

export default NotFound
