import React from 'react'
import styled from 'styled-components'
import { Link, useRouteMatch, NavLink } from 'react-router-dom'
import { Box, Flex, ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Search from 'views/Info/components/InfoSearch'

const NavWrapper = styled(Flex)`
  // background: ${({ theme }) => theme.colors.gradients.cardHeader};
  background: #fff;
  justify-content: center;
  padding: 10px 16px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 1px 40px;
    flex-direction: row;
  }
`

const InfoNav = () => {
  const { t } = useTranslation()
  const isPools = useRouteMatch(['/info/pools', '/info/pool', '/info/pair'])
  const isTokens = useRouteMatch(['/info/tokens', '/info/token'])
  let activeIndex = 0
  if (isPools) {
    activeIndex = 1
  }
  if (isTokens) {
    activeIndex = 2
  }
  return (
    <div className="navWrapperMain">
      <div className="nav_wrapper">
        <NavWrapper>
          <Box className='custom_menubutton'>
            <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
              <ButtonMenuItem as={NavLink} to="/info" exact>
                {t('Overview')}
              </ButtonMenuItem>
              <ButtonMenuItem as={NavLink} to="/info/pools" exact>
                {t('Pools')}
              </ButtonMenuItem>
              <ButtonMenuItem as={NavLink} to="/info/tokens" exact>
                {t('Tokens')}
              </ButtonMenuItem>
            </ButtonMenu>
          </Box>
        </NavWrapper>
        <div className="info_search">
          <Box width={['100%', '100%', '250px']}>
            <Search/>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default InfoNav
