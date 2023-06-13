import React from 'react'
import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { Proposals } from './components/Proposals'
import Footer from '../Home/components/Footer'

const Chrome = styled.div`
  flex: none;
`

const Content = styled.div`
  flex: 1;
  height: 100%;
`

const Voting = () => {
  return (
    <>
      <PageMeta />
      <Flex flexDirection="column" minHeight="calc(100vh - 64px)"> 
        <Chrome>
          <Hero />
        </Chrome>
        <Content>
          <Proposals />
        </Content>
       
        <div className="socialFooter">
          <ul>
            <li><a href="/" rel="NoReferrer" target="_blank"><i className="fab fa-twitter no"><span>hidden space</span></i></a></li>
            <li><a href="/" rel="NoReferrer" target="_blank"><i className="fab fa-instagram"><span>hidden space</span></i></a></li>
            <li><a href="/" rel="NoReferrer" target="_blank"><i className="fab fa-facebook-f"><span>hidden space</span></i></a></li>
            <li><a href="/" rel="NoReferrer" target="_blank"><i className="fab fa-youtube"><span>hidden space</span></i></a></li>
            <li><a href="/" rel="NoReferrer" target="_blank"><i className="fab fa-telegram-plane"><span>hidden space</span></i></a></li>
          </ul>
        </div>
      </Flex>
      <Footer />
    </>
  )
}

export default Voting
