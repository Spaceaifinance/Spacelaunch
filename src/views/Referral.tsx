import React,  { useEffect , useState } from 'react'
import styled from 'styled-components'
import { Heading, Button, Text, LogoIcon } from '@pancakeswap/uikit'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useWeb3React } from '@web3-react/core'
import { Link } from 'react-router-dom'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import { useGetStats,useGetreferCount,useGetreferCommissionCount } from 'hooks/api'
import Footer from './Home/components/Footer'

const newSpaceDog ='/images/home/lunar-bunny/space_dog.png'
const StyledAboutUs = styled.div`

`

const Rewards = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const refercount = useGetreferCount(account)
  const refercountCommision = useGetreferCommissionCount(account)

  const [copy, setCopy] = useState<boolean>(false)

  useEffect(()=>{
    setTimeout(function() {
           setCopy(false)
         }, 3000);
       },[copy]);

  //  if(account !== "null"){
  //   const params = new URLSearchParams(window.location.search) // id=123
  //   console.log(params);
  //   if(params.has('ref')){
  //     const id = params.get('ref');
  //     console.log("ID",id)
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ parentaddress: id, userwallet:account })
  //     };
  //     fetch('https://api.wrise.app/api/postuserdetails', requestOptions)
  //     .then(response => response.json())
  //   }else{
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ parentaddress: '0x0000000000000000000000000000000000000000', userwallet:account })
  //     };
  //     fetch('https://api.wrise.app/api/postuserdetails', requestOptions)
  //     .then(response => response.json())
  //   }


  //   (async() => {
  //        await fetch(`https://api.wrise.app/api/getuserdetails/${account}`)
  //       .then(response => response.json())
  //       .then(resp => {
  //         if(resp.status){
  //             const rescount = resp.parent;
  //             localStorage.setItem("PARENT",rescount)
  //           }
  //       });
  //    })();
  //  }

  return (
    <div>
    <div className="aboutPageBgTop">
      <div className="wriseAboutLogo">Logo</div>
    </div>

    <Page>
      <StyledAboutUs className="aboutWrap">

        <Heading scale="xxl" className="abooutPageTitle">Referral</Heading>
                <div className="clas_img_img">
            <div className="rowContent align-center">
              <div className="grid3">
                <div className="space_dog">
                  <img src={newSpaceDog}  alt="img" className="space_dog_img" />
                </div>
              </div>
              <div className="grid8">
                <div className="about_content referralContent">
                  <h1 className="text-center">Get Paid for Promoting the Space AI Finance Brand</h1>
                  <p className="text-center">Be at the forefront of the defi revolution while bringing a steady income stream for yourself.</p>
                  <h1 className="text-center">Space AI Finance`s Referral Program</h1>
                  <p className="text-center">Tell the world about Space AI Finance`s rewarding decentralized exchange and suite of defi products and enjoy the benefits.</p>
                
                  <div className="copied_div">

                  {account ?
                    <CopyToClipboard  onCopy={() => setCopy(true)} Tooltip={{ title: "Copied!" }} text={`https://spaceaifinance.exchange/?ref=${account}`}>
                      <Button variant="primary">Copy Link</Button>
                    </CopyToClipboard>
                    :
                    <CopyToClipboard  onCopy={() => setCopy(true)} Tooltip={{ title: "Copied!" }} text="https://spaceaifinance.exchange/?ref=0x053A46D1cc7e94abAF08baA7C189f05BBF04259B">
                      <Button variant="primary">Copy Link</Button>
                    </CopyToClipboard>
                  }
                  {copy ? <span className="copied_txt"> Copied!.</span> : null}

                  </div>
                  </div>
              </div>
            </div>
          {/* <img src={`${imagePath}${imageSrc}.png`} srcSet={getSrcSet(imagePath, imageSrc)} alt={t('Lunar bunny')} /> */}
          </div>

          <div className="rowContent earn_section">
            <div className="grid6">
              <div className="whiteBox earnBox">
                <h3>Total Referral</h3>
                <h2>{refercount}</h2>
              </div>
            </div>
            <div className="grid6">
              <div className="whiteBox earnBox">
                <h3>Total commission</h3>
                <h2>{refercountCommision} Rise</h2>
              </div>
            </div>
          </div>
          <div className="rowContent">
            <div className="grid12">
              <div className="whiteBox earnBox">
                {/* <Heading scale="xl" className="aboutContentTitle text_left">Referral Details</Heading> */}
                <ul className="referralContent_list">
                  <li>We`re super excited to kick start our New #Space AI Finance Ambassadors  program to support the growth and success of our #Space AI Finance Community across the globe.</li>
                  <li>The program will reward 5% to level 1 Ambassadors  in $Space AI Finance for every transaction in the farming & Pools for strengthening and educating our Space AI Finance community</li>
                  <li>The program will reward 8% to level 2 Ambassadors  in $Space AI Finance for every transaction in the farming & Pools for strengthening and educating our Space AI Finance community </li>
                  <li>The program requires that you are HOLDER  ( Level 1 = 50 $Space AI Finance ) ( Level 2 = 500 $Space AI Finance )  at Space AI Finance for a chance to earn and receive rewards paid out in $Space AI Finance.</li>
                </ul>
              </div>
            </div>
          </div>


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
      <Footer />
    </div>
  )
}

export default Rewards
