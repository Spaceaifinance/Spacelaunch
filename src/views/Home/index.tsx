import React,  { useEffect , useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { Button } from '@pancakeswap/uikit'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import useTheme from 'hooks/useTheme'
import { useGetStats,useGetreferCount } from 'hooks/api'
import BigNumber from 'bignumber.js'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import { useCakeBusdPrice } from '../../hooks/useBUSDPrice'
import { useTotalSupply, useBurnedBalance, useGetCakeBalance, useTokenBalanceuser } from '../../hooks/useTokenBalance'
import  useAllEarnings  from '../../hooks/useAllEarnings'
import useGetTopFarmsByApr from './hooks/useGetTopFarmsByApr'
import useGetTopPoolsByApr from './hooks/useGetTopPoolsByApr'
import { getBalanceNumber, formatLocalisedCompactNumber } from '../../utils/formatBalance'
import tokens from '../../config/constants/tokens'
import { fetchFarmUserDataAsync } from '../../state/farms'


const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC =  () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { topFarms } = useGetTopFarmsByApr(true)
  const { topPools } = useGetTopPoolsByApr(true)
  let totalLocked = 0;
   if(topFarms && topFarms.length > 0){
     if(topFarms[0] && topFarms[1] && topFarms[2] && topFarms[3] && topFarms[4]  &&  topPools[0] && topPools[1] && topPools[2] && topPools[3] && topPools[4]){
       const totalLiquidity1 = topFarms[0].lpTotalInQuoteToken.times(topFarms[0].quoteTokenPriceBusd)
       const totalLiquidity2 = topFarms[1].lpTotalInQuoteToken.times(topFarms[1].quoteTokenPriceBusd)
       const totalLiquidity3 = topFarms[2].lpTotalInQuoteToken.times(topFarms[2].quoteTokenPriceBusd)
       const totalLiquidity4 = topFarms[3].lpTotalInQuoteToken.times(topFarms[3].quoteTokenPriceBusd)
       const totalLiquidity5 = topFarms[4].lpTotalInQuoteToken.times(topFarms[4].quoteTokenPriceBusd)

       const totalPool1 = topPools[0].totalStaked.times(topPools[0].stakingTokenPrice).div(1000000000000000000);
       const totalPool2 = topPools[1].totalStaked.times(topPools[1].stakingTokenPrice).div(1000000000000000000);
       const totalPool3 = topPools[2].totalStaked.times(topPools[2].stakingTokenPrice).div(1000000000000000000);
       const totalPool4 = topPools[3].totalStaked.times(topPools[3].stakingTokenPrice).div(1000000000000000000);
       const totalPool5 = topPools[4].totalStaked.times(topPools[4].stakingTokenPrice).div(1000000000000000000);

        totalLocked = parseFloat(totalLiquidity1.toLocaleString())+parseFloat(totalLiquidity2.toLocaleString())+parseFloat(totalLiquidity3.toLocaleString())+parseFloat(totalLiquidity4.toLocaleString())+parseFloat(totalLiquidity5.toLocaleString())+parseFloat(totalPool1.toLocaleString())+parseFloat(totalPool2.toLocaleString())+parseFloat(totalPool3.toLocaleString())+parseFloat(totalPool4.toLocaleString())+parseFloat(totalPool5.toLocaleString());
     }
   }

  // post referral to off chain
  localStorage.setItem("PARENT",'0x0000000000000000000000000000000000000000')

  fetchFarmUserDataAsync({ account, pids: [1,2,3] })



  const totalSupply = useTotalSupply()
  console.log(totalSupply,"totalSupply");
  const refercount = useGetreferCount(account)
  const cakePriceBusd = useCakeBusdPrice();
  const useTokenBalances = useTokenBalanceuser(tokens.stx.address)
  const cakewallet = account ? getBalanceNumber(useTokenBalances.balance) : 'Locked'

  const burnedBalance = getBalanceNumber(useBurnedBalance(tokens.stx.address))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
   const allEarnings = useAllEarnings()
   const earningsSum = allEarnings.reduce((accum, earning) => {
     return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
   }, 0)
   const priceUSD = cakePriceBusd ? cakePriceBusd.toFixed(2) : "0";

  const map = cakePriceBusd ? parseFloat(priceUSD) * cakeSupply : 0
  const priceHarvest = cakePriceBusd ? earningsSum * parseFloat(priceUSD) : 0
  const cakewalletinUsd = account ? getBalanceNumber(useTokenBalances.balance) * (cakePriceBusd ? parseFloat(priceUSD) : 0) : '0.00'
   // const mcapString = formatLocalisedCompactNumber(mcap.toNumber())
  // console.log(mcap.toLocaleString(),"mcapString")
  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }
  const [copy, setCopy] = useState<boolean>(false)

  useEffect(()=>{
    setTimeout(function() {
         setCopy(false)
         }, 3000);
       },[copy]);

  return (
    <div className='home_chk'>

      <PageMeta />


        <Hero />
        {/* <section className='sparcoDetail'>
          <div className='container'>
            <div className='row spar_row_mb'>
              <div className='col-lg-4 mb-4'>
                  <div className="whiteBox farmStakBox greyBox">
                  <div className='inner_bg'>
                    <div className='img_text_div_home'>
                  <div className='imgLeftAlign'>
                    <img src="/images/img_home_1.png" alt="Earnupto" className='img_hoem_icon' />
                  </div>
                  <div className='flex_text_hm'>
                    <h3 className='hone_sec_card_title'>{t('Earnupto')}</h3>
                    <h2 className='hone_sec_card_desc'>288.20% APR</h2>
                    <h4 className='hone_sec_card_title'>In Farms</h4>
                    </div>
                  </div>
                  </div>
                  </div>
              </div>
              <div className='col-lg-4 mb-4'>
              <div className="whiteBox farmStakBox greyBox">
                <div className='inner_bg'>
                <div className='img_text_div_home'>
                  <div className='imgLeftAlign'>
                    <img src="/images/img_home_2.png" alt="Total Value Locked"  className='img_hoem_icon' />
                  </div>
                  <div className='flex_text_hm'>
                  <h3 className='hone_sec_card_title'>Total Value <br />Locked</h3>
                  <h4 className='hone_sec_card_desc'>${totalLocked.toLocaleString('en', { maximumFractionDigits: 0 })} Across all LPs and Pools</h4>
                  </div>
                  </div>
                  </div>
                </div>
              
              </div>
              <div className='col-lg-4 mb-4'>
             
              <div className="whiteBox farmStakBox greyBox">
              <div className='inner_bg'>
              <div className='img_text_div_home'>
                <div className='imgLeftAlign'>
                    <img src="/images/img_home_3.png" alt="earn"  className='img_hoem_icon' />
                  </div>
                  <div className='flex_text_hm'>
                  <h3 className='hone_sec_card_title'>{t('earn')}</h3>
                  <h2 className='hone_sec_card_desc'>SBT, BUSD, WBNB</h2>
                  <h5 className='hone_sec_card_title'>In Pools</h5>
                  </div>
                  </div>
                </div>
                </div>
              </div>
              <div className='col-md-6 mb-4'>
              <div className="whiteBox farmStakBox greyBox">
              <div className='inner_bg'>
                <div className="flexRow titleBox">
                  <h2 className='hone_sec_card_title'>{t('Risestats')}</h2>
                  <span className="purbleRoundBg">{t('Capped')}</span>
                </div>
                <div className="flexRow listBox">
                  <span>{t('Marketcap')}</span>
                  <h3>${map.toLocaleString()}</h3>
                </div>
                <div className="flexRow listBox">
                  <span>{t('TotalMinted')}</span>
                  <h3>{cakeSupply.toLocaleString()}</h3>
                </div>
                <div className="flexRow listBox">
                  <span>{t('TotalBurned')}</span>
                  <h3>{burnedBalance}</h3>
                </div>
                <div className="flexRow listBox">
                  <span>{t('SpAI Price')}</span>
                  <h3>${priceUSD}</h3>
                </div>
                <div className="flexRow listBox">
                  <span>{t('CirculatingSupply')}</span>
                  <h3>{cakeSupply.toLocaleString()}</h3>
                </div>
                <div className="flexRow listBox">
                  <span>{t('New SpAI/block')}</span>
                  <h3>0.03</h3>
                </div>
                </div>
              </div>
             
              </div>
              <div className='col-md-6 mb-4'>
              <div className="whiteBox farmStakBox greyBox">
              <div className='inner_bg'>
                <h2 className='hone_sec_card_title'>{t('Farms & Staking')}</h2>
                <img src="/images/img_home_6.png" alt="Farms & Staking" className="titleImg" />
                <div className="flexFs">
                <div className="fsBox">
                  <h3>{t('SpAI to Harvest')}</h3>
                  <h5>- {earningsSum.toFixed(9)}</h5>
                  <p>~${priceHarvest.toFixed(9)}</p>
                </div>
                <div className="fsBox">
                  <h3>{t('SpAI to Wallet')}</h3>
                  <h5>{cakewallet.toLocaleString()}</h5>
                  <p>~${cakewalletinUsd.toLocaleString()}</p>
                </div>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className='homeBanking'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 flexColumn'>
                <div className='hbLeft w-100'>
                  <h2>Private Banking</h2>
                  <p>The new investment service designed to easily, safely, and in your way decide the trends and products that best suit the future you believe in. </p>
                  <h2>Corporate Banking</h2>
                  <p>The comprehensive, close and specialised advice you need to grow your assets in a personalised and exclusive way. Innovative solutions to take advantage of opportunities. </p>
                  <div className='bannerAppButton'>
                    <a href="https://play.google.com/store/apps/details?id=com.newmedia.rise" target='blank'>
                     <img src="/images/androidbutton.png" alt="" />
                    </a>
                    <a href="https://apps.apple.com/us/app/risebank/id1617249895" target='blank'>
                    <img src="/images/appstorebutton.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='hbRight'>
                <img src="/images/mobileImg.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className='sparcoProcess mt-5'>
          <div className='container'>
            <h2>A few minutes to open an account <span className='d-block'>at The Space AI Finance</span></h2>
            <h6>Our excellent customer support team is available 24/7. </h6>
            <div className='row'>
              <div className='col-md-4 flexColumn'>
                <div className='cardWhite'>
                  <div className='cardNumber'>01</div>
                  <h4>Open a multi-currency account </h4>
                  <p>Open a multi-currency account with The Space AI Finance. We’re here to support all for your payment-related needs, with guaranteed security & constancy. </p>
                </div>
              </div>
              <div className='col-md-4 flexColumn'>
              <div className='cardWhite cardPurple'>
                  <div className='cardNumber'>02</div>
                  <h4>Hold your funds safe</h4>
                  <p>We’re a full reserve bank so 100% of your funds are kept in the bank with the perfect blend of banking, technology experience.</p>
                </div>
              </div>
              <div className='col-md-4 flexColumn'>
              <div className='cardWhite'>
                  <div className='cardNumber'>03</div>
                  <h4>Simplifying the fight against fraud</h4>
                  <p>The Space AI Finance is fully regulated by The Financial Services Unit (FSU). We onboard clients from a wide array of business sectors including, MSBs, Forex, Crypto. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='homeNews'>
          <div className='container'>
            <h2>Space AI Finance News</h2>
            <h6>Get Latest Space AI Finance News Updates </h6>
            <div className='row'>
              <div className='col-md-6'>
                <div className='blogListHome'>
                  <ul>
                    <li>
                      <h3>Sumcoin Developers Announce News of Hard Fork<small className='d-block'>May 12, 2022</small></h3>
                      <p>Sumcoin developers announce news of hard fork. Sumcoin, the world’s first index-based cryptocurrency, has announced it is expected to undergo a hard fork in early June, 2022.  The upcoming fork is the first…</p>
                      <a href='/'>More details</a>
                    </li>
                    <li>
                      <h3>An insight into the volatility of UST and LUNA<small className='d-block'>May 12, 2022</small></h3>
                      <p>LUNA has lost 50% of its value while UST lost its peg to the US Dollar As per CoinMarketCap, UST currently has a higher market cap than LUNA An increased…</p>
                      <a href='/'>More details</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='homeNewsImg'>
                  <img src="/images/img5home1.png" alt="" className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </section> */}
     <div className="socialFooter">
        <ul>
          <li><a href="https://twitter.com/the_spaceaifinance" rel="NoReferrer" target="_blank"><i className="fab fa-twitter no"><span>hidden space</span></i></a></li>
          <li><a href="ttps://www.instagram.com/the_spaceaifinance_/?__coig_restricted=1" rel="NoReferrer" target="_blank"><i className="fab fa-instagram"><span>hidden space</span></i></a></li>
          {/* <li><a href="https://www.instagram.com/the_spaceaifinance_/?__coig_restricted=1" rel="NoReferrer" target="_blank"><i className="fab fa-facebook-f"><span>hidden space</span></i></a></li> */}
          <li><a href="https://www.youtube.com/@the_spaceaifinance " rel="NoReferrer" target="_blank"><i className="fab fa-youtube"><span>hidden space</span></i></a></li>
          <li><a href="https://t.me/thespaceaifinance_community " rel="NoReferrer" target="_blank"><i className="fab fa-telegram-plane"><span>hidden space</span></i></a></li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Home
