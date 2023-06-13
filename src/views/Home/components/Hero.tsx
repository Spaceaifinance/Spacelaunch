import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'

import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'
import useGetTopFarmsByApr from '../hooks/useGetTopFarmsByApr'
import useGetTopPoolsByApr from '../hooks/useGetTopPoolsByApr'


const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`

const imagePath = '/images/home/lunar-bunny/'
const newSpaceDog ='/images/home/lunar-bunny/space_dog.png'
const logo ='/images/home/lunar-bunny/rise.jpg'

const androidbtnn = "<img src='/images/androidbutton.png' />"
const imageSrc = 'bunny'

const starsImage: CompositeImageProps = {
  path: '/images/home/lunar-bunny/',
  attributes: [
    { src: 'star-l', alt: '3D Star' },
    { src: 'star-r', alt: '3D Star' },
    { src: 'star-top-r', alt: '3D Star' },
  ],
}

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()


    const totalLocked = 0;
     // if(topFarms && topFarms.length > 0){
     //   console.log(topFarms,"topFarms")
     //   if(topFarms[0] && topFarms[1] && topFarms[2] && topFarms[3] && topFarms[4] && topFarms[5] &&  topPools[0] && topPools[1] && topPools[2] && topPools[3]){
     //     const totalLiquidity1 = topFarms[0].lpTotalInQuoteToken.times(topFarms[0].quoteTokenPriceBusd)
     //     const totalLiquidity2 = topFarms[1].lpTotalInQuoteToken.times(topFarms[1].quoteTokenPriceBusd)
     //     const totalLiquidity3 = topFarms[2].lpTotalInQuoteToken.times(topFarms[2].quoteTokenPriceBusd)
     //     const totalLiquidity4 = topFarms[3].lpTotalInQuoteToken.times(topFarms[3].quoteTokenPriceBusd)
     //     const totalLiquidity5 = topFarms[4].lpTotalInQuoteToken.times(topFarms[4].quoteTokenPriceBusd)
     //     const totalLiquidity6 = topFarms[5].lpTotalInQuoteToken.times(topFarms[5].quoteTokenPriceBusd)
     //
     //     const totalPool1 = topPools[0].totalStaked.times(topPools[0].stakingTokenPrice).div(1000000000000000000);
     //     const totalPool2 = topPools[1].totalStaked.times(topPools[1].stakingTokenPrice).div(1000000000000000000);
     //     const totalPool3 = topPools[2].totalStaked.times(topPools[2].stakingTokenPrice).div(1000000000000000000);
     //     const totalPool4 = topPools[3].totalStaked.times(topPools[3].stakingTokenPrice).div(1000000000000000000);
     //
     //      totalLocked = parseFloat(totalLiquidity1.toLocaleString())+parseFloat(totalLiquidity2.toLocaleString())+parseFloat(totalLiquidity3.toLocaleString())+parseFloat(totalLiquidity4.toLocaleString())+parseFloat(totalLiquidity5.toLocaleString())+parseFloat(totalLiquidity6.toLocaleString())+parseFloat(totalPool1.toLocaleString())+parseFloat(totalPool2.toLocaleString())+parseFloat(totalPool3.toLocaleString())+parseFloat(totalPool4.toLocaleString());
     //   }
     // }



  return (
    <>
      {/* <section className="bannerTop">
        <div className='container'>
          <div className='row'>
            <div className='col-md-5 flexColumn'>
              <h1 className="elementor-heading-title">Most Promising and instant decentralized crypto asset swpping protocol</h1>
              <h6>
                Swap or Trade wide range of crypto assets within seconds anywhere, anytime around the world. Get high APY & APR on your favorite crypto asset staking.
              </h6>
           <div className='bannerAppButton'>
           <Button type="button" className='theme-btn mt-3'>
          {t('Get Started')}
        </Button>
              </div>
            </div>
            <div className='col-md-7 mt-5 mt-md-0 img_flex_md'>
              <img src="/images/bannerimg.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section> */}

      <section className="banner_header_sec">
        <div className="padin_claas_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <div className="banner_section_content">
                  <img alt="logo" src="../../../../images/square.png" className='bansquare'/>
                  <h1><span> Join The Best </span> <br/>  Cryptocurrency AI Swap</h1>
                  <p className="font_18_p">Experience rapid cryptocurrency transactions, quick buys, and purchases in a high liquidity pool.</p>
                  <div className="button_positon">
                  <a href="/swap">  <Button className="gradient-box"> {t('Get Started')}</Button> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-md-block d-none m-auto text-center">
                <img src="/images/bannerimgnew.png" alt="Banner" className="img-fluid img_banner_token" />
              </div>
              <img src="../../../../images/design.png" alt="logo" className='designimg'/>
            </div>
          </div>
        </div>
      </section>
   

      <section className="additionla_card">
      <img src="../../../../images/pattern.png" alt="logo" className='patternimg'/>
        <div className="container">
          <div className="row">

          <div className="col-sm-6 col-lg-4 m-auto text-center">
              <div className="addidtion_card_ one">
                <img src="/images/box-image1.png" alt="Staking" className="img-fluid" />
                <div className='text-left'>
                  <p>Now Token Staking</p>
                  <h4 className='text-light'>Start making <br />profit Now! </h4>
                  <Button className="mt-3"><a href="/farms">Earn</a></Button>
                </div>
              </div>
            </div>

          
            <div className="col-sm-6 col-lg-4 m-auto text-center">
              <div className="addidtion_card_ two">
                <img src="/images/box_image_2.png" alt="Staking" className="img-fluid" />
                <div className='text-left'>
                  <p>Space AI Finance</p>
                  <h4 className='text-light'>AI Swap</h4>
                  <Button className="mt-3"><a href="/swap">Trade</a></Button>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 m-auto text-center">
              <div className="addidtion_card_ three">
              <img src="/images/box_image_3.png" alt="Staking" className="img-fluid" />
                <div className='text-left'>
                  <p>Space AI Finance</p>
                  <h4 className='text-light'>Launchpad IDO</h4>
                  <Button className="mt-3 brn_wiyh_a"><a href="/" rel="noreferrer" aria-label='socail' target="_blank">Buy Now</a></Button>
                </div>
              </div>
            </div>
            
            

            
          </div>
        </div>
      </section>
      <section className="PLUS_POOL_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto text-center">
              <div className="title_header_Section">
                <h1>Space AI Finance POOL</h1>
                <p className='font_18_p'>A comprehensive service platform dedicated to improving the income of miners</p>
              </div>
            </div>
            <div className='d-flex scrollcont'>
            <div className="  text-center">
              <div className="PLUS_POOL_section_card">
                <div><img src="/images/polls_img_1.png" alt="polls" className="img-fluid" /></div>
                <div className='conts'>
                  <h2>Secure and Transparent</h2>
                  <p>AISwap is both private and secure at the same time. That may seem like an oxymoron, but it’s quite attainable. That’s why blockchain is the technology of the future.</p>
                </div>
              </div>
            </div>
            <div className=" text-center">
              <div className="PLUS_POOL_section_card">
              <div><img src="/images/polls_img_2.png" alt="polls" className="img-fluid" /></div>
                <div className='conts'>
                  <h2>Steady Earnings</h2>
                  <p>Power traders use “staking” and “yield farming” to generate passive income, but there are risks.</p>
                </div>
              </div>
            </div>
            <div className=" text-center">
              <div className="PLUS_POOL_section_card">
              <div> <img src="/images/polls_img_3.png" alt="polls" className="img-fluid" /></div>
                <div className='conts'>
                  <h2>Comprehensive Service</h2>
                  <p>A decentralized AI Swap (DEX) enables users to trade crypto assets through blockchain transactions without the need for a custodian or centralized intermediary.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className='swapimg'/>
      </section>
      <section className="Swap_section height_secti_swap">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-6  text-center m-0_im ">
              <div className="swap_section_content">
                <h1>Swap your assets <br />with another</h1>
                <p className='font_18_p'>Thousands of traders choose AI Swap over the alternatives because
                  it automatically routes your trades through the best DEXs, giving you
                  the best outcome, every time.</p>
                <div className="button_positon font_345 btn_center_lunch">
                  <a href="/swap"><Button className="gradient-box">AI Swap</Button></a>
                </div>
              </div>
             
            </div>
            <div className="col-lg-6 text-center ">

              <img src="../../../../images/diamond.png" alt="Swap" className="img-fluid diamondimg" />
              <img src="../../../../images/square.png" alt="Swap" className="img-fluid squareimg" />

              <img src="../../../../images/swap_img.png" alt="Swap" className="img-fluid " />
            </div>
          </div>
        </div>
      </section>

      <section className="Swap_section bg_fff">
      <img src="../../../../images/square.png" alt="Swap" className="img-fluid squareimg" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 m-auto text-center">
              <div className="swap_section_content">
                <h1 className="font_s">The future of digital asset management, favored by thousands of users.</h1>
                <p className='font_18_p'>AI Swap provides transaction bundling, any-to-any swaps, and real-time data for DeFi assets.</p>
              </div>
            </div>
            </div>
           
        </div>
          <div className=" m-auto text-center">
              <div className='container'>
                <div className='row'>
                  <div className='col-md-10 m-auto'>
                    <div className="side_chart_secton user">
                  <div>
                    <div>
                      <p>{t('Marketcap')}</p>
                      <h3>$30,000,000</h3>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>Total Supply</p>
                      <h3>1,000,000,000 SpAI</h3>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>Total Airdrop</p>
                      <h3>150,000,000 SpAI</h3>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
         
      </section>
      <section className="Swap_section swapsec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto text-center">
              <div className="swap_section_content">
                <div className="side_chart_secton with_new">
                  <div>
                    <div>
                      <p className='mb-0'>Space  Smart Chain offers fast execution times and low transaction fees.</p>
                    </div>
                    <div>
                    <div>
                      <h5>SpAI Listing Price</h5>
                      <h3>$0.03</h3>
                      </div>
                    </div>
                    <div>
                    <div>
                      <h5>{t('CirculatingSupply')}</h5>
                      <h3>180,000,000</h3>
                    </div>
                    </div>
                    
                    <div>
                    <div>
                      <h5>SpAI Presale Price</h5>
                      <h3>$0.015</h3>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="PLUS_POOL_section get_statred">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto text-center">
              <div className="title_header_Section">
                <h1>Get Started in Few Minutes</h1>
                <p className='font_18_p'>One of the main benefits of DEXs is the high degree of determinism achieved by using blockchain technology and immutable smart contracts</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 m-auto text-center">
              <div className="PLUS_POOL_section_card">
                <div className="box_get_start">
                  <img src="/images/get_start_1.png" alt="logo" className="img-fluid" />
                </div>
                <div>
                  <h2>Staking</h2>
                  <p>Staking is the locking up of cryptocurrency tokens as collateral to help secure a network or smart contract, or to achieve a specific result.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 m-auto text-center">
              <div className="PLUS_POOL_section_card">
                <div className="box_get_start">
                  <img src="/images/get_start_2.png" alt="logo" className="img-fluid" />
                </div>
                <div>
                  <h2>Farming</h2>
                  <p>Farming is a way to earn rewards by depositing your cryptocurrency or digital assets into a decentralized application.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 m-auto text-center">
              <div className="PLUS_POOL_section_card">
                <div className="box_get_start">
                  <img src="/images/get_start_3.png" alt="logo" className="img-fluid" />
                </div>
                <div>
                  <h2>Pools</h2>
                  <p>A liquidity pool is a digital pile of cryptocurrency locked in a smart contract.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Swap_section commig_soon_bg">
          <img alt="logo" src="../../../../images/design.png" className='patternimg'/>
          <img src="../../../../images/diamond.png" alt="Swap" className="img-fluid diamondimg" />
          <img src="../../../../images/square.png" alt="Swap" className="img-fluid squareimg" />
        <div className="container">
          <div className="row h-450" >
          <div className="col-md-4 m-auto d-md-block d-none text-center">
              <img src="/images/comingsoon.png" alt="Comming Soon" className="img-fluid coimng_img_size" />
            </div>
            <div className="col-md-4 m-auto section_new_center_cmin" >
              <div className="comming_soon_section">
                <h1 className="mb-4">COMING SOON</h1>
                <ul className="coming_ul">
                <li><span>Launchpad</span></li>
                <li><span>OTC and P2P</span></li>
                <li><span>Margin Trading</span></li>
                <li><span>Lending Process</span></li>

                </ul>
               
              </div>
            </div>
            <div className="col-md-4 m-auto d-md-block d-none text-center">
              <img src="/images/comingsoonone.png" alt="Comming Soon" className="img-fluid coimng_img_size" />
            </div>
          </div>
        </div>
      </section>


      <section className="footer_bg">
        <div className="container">
          <div className="foter_logo_sectopn_i">
            <div className="fooer_ll">
              <img src="/images/footer_logo_1.png" alt="Comming Soon" className="img-fluid" />
            </div>
            <div className="fooer_ll">
              <img src="/images/footer_logo_2.png" alt="Comming Soon" className="img-fluid" />
            </div>
            <div className="fooer_ll">
              <img src="/images/footer_logo_3.png" alt="Comming Soon" className="img-fluid" />
            </div>
            <div className="fooer_ll">
              <img src="/images/footer_logo_4.png" alt="Comming Soon" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>


      {/* <section className="bannerToptwo colrev_md">
        <div className='container'>
          <div className='row'>
          <div className='col-md-7 mt-5 mt-md-0 img_flex_md'>
              <img src="/images/second_sec_img.png" alt="" className="img-fluid" />
            </div>
            <div className='col-md-5 flexColumn'>
              <p className='liner_tect_sm'>Decentralized Swap Platform</p>
              <h1 className="elementor-heading-title-seoc">Experience the real power of decentralized Trading</h1>
              <h6 className='secon_sec_desc'>Trade easily without interference of centralized financial systems. Trade, lend, borrow, earn and more, in a growing suite of DeFi products

              </h6>
          
            </div>
          
          </div>
        </div>
      </section> */}

      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <div className="clas_img_img d-none">
          <h3 className="top_headein_ss">{t('totalvaluelocked')} ${totalLocked.toLocaleString('en', { maximumFractionDigits: 0 })} {t('allLp')}</h3>
          </div>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
