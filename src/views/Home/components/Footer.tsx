import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Link } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const StyledSunburst = styled(SunburstSvg)`
  height: 350%;
  width: 350%;

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const FloatingPancakesWrapper = styled(Container)`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    visibility: visible;
  }
`

const TopLeftImgWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  top: 0;
`

const BottomRightImgWrapper = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: 0;
`

const topLeftImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '1-bottom', alt: 'Pancake flying on the bottom' },
    { src: '1-left', alt: 'Pancake flying on the left' },
    { src: '1-top', alt: 'Pancake flying on the top' },
  ],
}

const bottomRightImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '2-bottom', alt: 'Pancake flying on the bottom' },
    { src: '2-top', alt: 'Pancake flying on the top' },
    { src: '2-right', alt: 'Pancake flying on the right' },
  ],
}

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
     <section className='footerTop'>
       <div className='container'>
         <div className="flexFooter align-items-end">
           <div className='gridFooter widthLarge'>
           <ul className='d-inlineblock link_footer_div'>
                <li><a href='/' rel="noreferrer" target="_blank">About Us</a></li>
                <li className='hide_obile_hi'>| </li>
                <li><a href='/' rel="noreferrer" target="_blank">Terms & Conditions</a></li>
                <li className='hide_obile_hi'>| </li>

                <li><a href='/' rel="noreferrer" target="_blank">Privacy Policy</a></li>
                {/* <li className='hide_obile_hi'>| </li> */}
                {/* <li><a href='http://presale.spaceai.finance' rel="noreferrer" target="_blank">Presale</a></li> */}


              </ul>
         <p className="text-left copytr_text">Copyright &copy; 2023 Space AI Finance. All Rights Reserved.</p>

           </div>
           <div className='gridFooter WidthSmall allow_space_mob'>
             <h3>Social Media With Us</h3>
              <ul className='d-inlineblock list_icon_a'>
                <li><a href='https://telegram.me/SpAIfinance' rel="noreferrer" aria-label='socail' target="_blank"><i className="fab fa-telegram-plane"/></a></li>
                <li><a href='https://twitter.com/SpaceAIFinance' rel="noreferrer" aria-label='socail' target="_blank"><i className="fab fa-twitter"/></a></li>
                <li><a href='mailto:spai.finance@gmail.com' rel="noreferrer" aria-label='socail' target="_blank"><i className="fa fa-envelope"/></a></li>
                <li><a href='https://discord.com/invite/G97NhNdbsA' rel="noreferrer" aria-label='socail' target="_blank"><i className="fab fa-discord"/></a></li>
                <li><a href='https://drive.google.com/file/d/1mlQXKvbw_3_LDcKLxy2-EJ_ijH8R80Ay/view' rel="noreferrer" aria-label='socail' target="_blank"><i className="fa fa-file-alt"/></a></li>
                {/* <li><a href='http://presale.spaceai.finance' rel="noreferrer" aria-label='socail' target="_blank"><i className="fa fa-rocket"/></a></li> */}
             
              </ul>
           </div>
          
         </div>
       </div>
     </section>
    
    </>
  )
}

export default Footer
