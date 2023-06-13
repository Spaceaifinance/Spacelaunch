import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
:root{
  // --themeclr: #2cc2a4;
  --themeclr: #fff;
  --second: #181934 ;
  --yellow:#e79f49;
  --subtitle:#e8e6e6;
  --txtyellow:#f4de8a;
  --txtgray:#cdced1
}
  * {
font-family: 'Kanit', sans-serif;
  }
  p {
    font-size: 16px;
    margin: 0px 0px 10px;
    line-height: 1.5em;
  }
  #root {
    background-image: linear-gradient(#000,#101010) !important;
  }
  .theme-btn:hover,.gradient-box:hover,.confirm-expert-mode:hover,.addidtion_card_ button:hover,#join-pool-button:hover,
  .theme-btn-notfound:hover,.theme-btn-connect:hover{
     color:#fff !important;
     background-image: linear-gradient(23deg,#7154fa,#25cd9c) !important;
     opacity:1 !important;
  }
  a{
    // color:var(--themeclr) !important;
    // background:var(--second) !important
    text-decoration:none  !important
  }
  nav a[href="/"]
  {
    color:#a299ae !important;
  }
  a[href="/swap"]:hover,a[href="/liquidity"]:hover,a[href="/farms"]:hover
  ,a[href="/pools"]:hover,a[href="/farms/history"]:hover,a[href="/pools/history"]:hover,
  a[href="/comingsoon"]:hover,a[href="/home"]:hover
  
  {
     color: #f4de8a !important;
  opacity:1 !important;
  background:transparent;
  // border-bottom:2px solid #fff;
}
// a[href="/swap"]:hover::before,a[href="/liquidity"]:hover::before,a[href="/farms"]:hover::before,
// a[href="/pools"]:hover::before,a[href="/farms/history"]:hover::before,a[href="/pools/history"]:hover::before

// {
//   content: "";
//     position: absolute;
//     bottom: 0;
//     height: 4px;
//     width: 100%;
//     background-color: white;
//     border-radius: 2px 2px 0 0;
// }
  }
  button[scale="sm"]:hover {
    background: var(--second);
    color: var(--themeclr) !important;
    opacity:1 !important
  }
  a[rel="noreferrer noopener"]:hover{
    color:#a299ae !important
  }
  a[rel="noreferrer noopener"].theme-btn-connect:hover
  {
    color:#fff !important;
  }
  .blacktext *{
    color:#000;
    fill:#000
  }
  nav > div:first-child {
    max-width: 100% !important;
    width: 100%;
    justify-content: space-between;
  }
  .theme-btn,.addidtion_card_ button,.gradient-box,.theme-btn-notfound,.theme-btn-connect{
    color:#fff;
  }
  // .togglewrap > div[scale="sm"]{
  //   background:var(--themeclr)
  // }
  button[aria-label = "Hide or show expandable content"]{
    color: var(--themeclr) !important 
  }
 
    img {
      height: auto;
      max-width: 100%;
    }
    .fa, .far, .fas {
      font-family: "Font Awesome 5 Free" !important;
    }
    .fab {
      font-family: "Font Awesome 5 Brands" !important;
    }
  .dnone{
  display:none;
  }
  .fixedheader a {
    color: #000;
  }
  .fixedheader svg[color="textSubtle"]{
    fill: #000
  }
  .fixedheader button:hover svg{
    fill: #fff
  }
  .fixedheader div[data-popper-escaped ="false"] a {
    color: #fff;
  }
  .home_chk nav
  {
    background: transparent !important;

  }
  nav{
    // background: #0d0416 !important;
    background: transparent !important;

    width: 100% !important;
    padding-right:5% !important;
    // max-width: 1200px;
    margin: 0 auto !important;
    position: relative !important;
    top: 0px !important;
    gap:15px;
    height: 77px !important;
  }
  nav + div {
    margin-top: -80px !important;
}

.footerLogo img {
 max-width:150px !important;
}
.swap_bg h2, .liquiditysec h2, .farm_page_bg h1 {
  font-weight: bold;
  display: inline-block;
  color:#f4de8a !important;
  // background-image: linear-gradient(135deg, #846FF4 0%, #F17674 100%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // background-clip: text;
  // text-fill-color: transparent;
}
nav > div {
  align-items: center;
}
  #swap-currency-input div, #swap-currency-input input, #swap-currency-input input::placeholder,
  #swap-currency-output div, #swap-currency-output input, #swap-currency-output input::placeholder {
    color: var(--themeclr) !important;
    opacity: 1 !important;
}

#swap-currency-input button svg{
  fill: var(--themeclr) !important;
}

#swap-currency-output button svg{
  fill: var(--themeclr) !important;
}
div:before{
  background: var(--themeclr) !important;
}
#join-pool-button:hover{
  opacity: 1 !important;
  // background: var(--themeclr) !important;
}
.setting_title h2 {
  color:var(--themeclr);
}

.navWrapperMain {
  background-color: rgb(238, 238, 238) !important;
  box-shadow: rgba(133, 133, 133, 0.1) 0px -2px 0px -8px inset;
  border-top: 0px solid rgb(129, 128, 224);
  border-bottom: 1px solid rgb(129, 128, 224);
  margin-top: -1px;
}
.nav_wrapper{
  position: relative;
max-width: 1200px;
margin: 0 auto;
}
.nav_wrapper > div{
  background: transparent !important;
}
.pancake:nth-child(2){
  dispaly:none !important;
  visibility: hidden;
}
.pancake:nth-child(3){
  dispaly:none !important;
  visibility: hidden;
}
.butter {
  dispaly:none !important;
  visibility: hidden;
}
.pancake:nth-child(1) {
	background: var(--themeclr);
	box-shadow: 0 1.5px 0 1.5px #8a8daf ;
}
.connect_wallet_heading{
  color: var(--themeclr) !important;
}
a.bnbscan:hover{
  color: var(--themeclr) !important;
  opacity:0.8
}
section.PLUS_POOL_section.get_statred .PLUS_POOL_section_card {
  display: block;
}
.hover_button:hover.hover_button div{
  color: var(--themeclr) !important;
}
.token-amount-input , input{
  color: var(--themeclr) !important;
}
#import-pool-link{
  color:var(--themeclr)
}
.headong h2{
 color:var(--themeclr)
}
.open-currency-select-button:hover.open-currency-select-button div {
  color:var(--themeclr) !important;
}
#add-liquidity-input-tokena div, #add-liquidity-input-tokenb div {
color:var(--themeclr);
}
#token-search-input{
  color:var(--themeclr);
}
.select_ic h2 {
  color:var(--themeclr);
}
.light_card_content div {
  color:var(--themeclr);
}
.bottom_conrtnet div{
  color:var(--themeclr) !important;
}
.select_color div {
  color:var(--themeclr);
}
.select_color svg {
  fill:var(--themeclr);
}
.input_new input{
 color:var(--themeclr);
}
#farms-table > table > tbody > tr > td > div{
color:#000;
}
.star_hidden {
	visibility: hidden;
}
.dog_img img{
 width:80%;
}
.font_light {
	font-weight: lighter !important;
	font-size: 17px;
	line-height: 26px;
}
.clas_img_img img{
	width: 70%;
	margin: 11px auto;
	display: block;
}
h2.text_c {
	text-align: center;
}
.justifua {
	justify-content: center;
}
.rowContent{
  display: flex;
  margin-top: 30px;
}
.rowContent.top50{
  margin-top: 50px;
}
.grid4{
  width: 40%;
  max-width: 452px;
  padding: 0 15px
}
.grid6{
  width: 50%;
  max-width: 678px;
  padding: 0 15px
}
.grid8{
  width: 60%;
  max-width: 700px;
  padding: 0 15px
}
.grid12 {
  width: 100%;
  max-width: 1152px;
  padding: 0 15px
}
.flexRow{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}
.titleBox{
  margin-bottom: 25px;
}
.titleBox h2{
  font-size: 24px;
  margin-bottom: 0px;
}
.whiteBox{
  background: #403e3e;
  border-radius: 15px;
  padding: 15px;
  width: 100%;
}
.whiteBox.greyBox{
 background:transparent;
  border: 1px solid #FFFFFF;
  // box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  // backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  
  border-radius: 25px;
  padding: 1px;
  z-index:2;
  height:100%;
  cursor:pointer;
}
.whiteBox.greyBox:hover

{
  background: linear-gradient(114.02deg, #1167F9 21.14%, #FE82DB 50%, #13CCEC 60%);
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
backdrop-filter: blur(20px);
border: 1px solid transparent;
}
.inner_bg
{
  border-radius: 25px;
  padding:25px;
  height:100%;

  background: linear-gradient(114.02deg, rgba(94, 89, 89, 0.29) 21.14%, rgba(94, 89, 89, 0) 100%);

}
.whiteBox.greyBox:hover .inner_bg
{
background-color:#000 !important;
}

.whiteBox.greyBox .listBox{
  font-weight: 700;
}
.whiteBox.greyBox .listBox h3{
  font-weight: 700;
}
.whiteBox.greyBox .titleBox h2 {
  color: var(--themeclr);
  font-size: 20px;
  font-weight: 700;
}
.whiteBox.greyBox .purbleRoundBg{
  font-family: 'Kanit', sans-serif;
  font-size: 15px;
  font-weight: bold;
  line-height: 28px;
  letter-spacing: 0px;
  background-color: var(--themeclr) ;
  padding: 12px 40px 12px 40px;
  color: #1C1B19 ;
}
.purbleRoundBg {
    background: #d1d6ff;
    color: var(--themeclr);
    padding: 8px 20px;
    border-radius: 50px;
}
.listBox span{
  color: #f2f2f2 !important;
  font-weight:400 !important;
  font-size:14px !important;
}
.listBox h3{
  color: #f2f2f2 !important;
  font-weight:400 !important;
  font-size:14px !important;
  margin: 0;
}
.roadrTreeImg {
    width: 100%;
    border-radius: 15px;
}
.treeContent {
    position: relative;
}
.buttonAbsolute {
    position: absolute;
    top: 85%;
    left: 30px;
    z-index: 1;
}
.greenButton{
  background: #4e9c66;
  color: var(--themeclr);
  padding: 8px 18px;
  border-radius: 8px;
  transition: .5s;
}
.greenButton:hover{
  background: var(--themeclr);
}
.grid5{
  width: 100%;
  max-width: 425px;
  padding: 0 15px;
}
.grid2{
  width: 100%;
  max-width: 302px;
  padding: 0 15px;
}
.buttonGroupFlex {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.greenStakeButton button{
  background: #519c67;
}
.buttonGroupFlex button img{
  margin-right: 7px;
}
.whiteBox.tvlBox {
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.whiteBox.tvlBox.tvlBoxFlexStart{
  justify-content: flex-start;
  padding-top: 30px;
}
.tvlBox h3{
  font-size: 24px;
  margin-bottom: 0px;
}
.tvlBox h2{
  font-size: 38px;
  margin: 20px 0;
  color: var(--themeclr);
}
.tvlBox p{
  font-size: 18px;
  margin-bottom: 0px;
  color: #4e9c66;
}
.farmStakBox{
   padding-top: 30px;
}
.flexColumn {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.farmStakBox h2{
  color: var(--themeclr);
  font-size: 20px;
  font-weight: 700;
}
.flexFs{
  display: flex;
}
.fsBox {
    width: 50%;
    margin-top: 20px;
}
.fsBox h3{
  color: #f2f2f2 !important;
  font-weight:400 !important;
  font-size:14px !important;
  text-transform: uppercase;
  line-height: 53px;
}
.fsBox h5, .fsBox p{
  color: #f2f2f2 !important;
  font-weight:400 !important;
  font-size:14px !important;
  line-height: 45px;
}
.titleImg{
  margin-top: 15px;
}
.abooutPageTitle{
  font-size: 36px;
  margin-bottom: 15px;
  text-align: center;
}
.aboutContentTitle{
  font-size: 24px;
  margin-bottom: 15px;
  margin-top: 30px;
  text-align: center;
}
.aboutButton{
  margin-left: 8px;
}
.aboutButton button{
  background: #e78638;
  color: var(--themeclr);
  border-color: #e78638;
}
.purpleButton{
  background: var(--themeclr);
  color: var(--themeclr);
  padding: 8px 18px;
  border-radius: 8px;
  transition: .5s;
}
.purpleButton:hover{
  background: #4e9c66;
}
.blockButton .purpleButton{
  margin-top: 25px;
  display: block;
  width: 100%;
  text-align: center;
   padding: 12px 18px;
}
.treeDayBox {
  text-align: center;
}
.treeDayBox h3{
  font-size: 20px;
  color: var(--themeclr);
  margin-bottom:12px;
}
.artTree{
  max-height: 190px;
}
.fsBox{
  position:relative;
}

.earnBox h3 a i span{
  display: none;
}
.grid3{
  width: 32%;
  max-width: 400px;
  padding: 0 15px
}
.earnBox h2{
  font-size: 20px;
  margin: 20px 0;
  color: #4e9c66;
  font-weight: 500;
}
.earnBox h3{
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-bottom: 0px;
}
.earnBox h3 a{
  font-size: 16px;
  background: var(--themeclr);
  color: var(--themeclr);
  padding: 8px 15px;
  border-radius:30px;
  display:inline-block;
  transisation:.5s;
}
.earnBox h3 a:hover{
  background: #4e9c66;
}
.tree_row_secton {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.referralContent h4 {
  font-size: 16px;
  font-weight: 400;
  background: #4d9c65;
  padding: 14px 10px;
  border-radius: 30px;
  color: var(--themeclr);
  margin: 15px 0;
}
.about_content h1{
	font-size: 36px;
	margin-bottom: 22px;
	color: var(--themeclr);
}
.about_content.referralContent h1{
  text-align: left;
  font-size: 24px;
  color: var(--themeclr);
  line-height: 36px;
  margin: 15px 0 0;
}
.referralContent p {
  text-align: left;
}
.about_content p {
	color: var(--themeclr);
	line-height: 26px;
	font-size: 17px;
	font-weight: lighter !important;
}
ul.referralContent_list {
  padding-left: 30px;
  list-style: circle;
}
.referralContent_list li {
  color: var(--themeclr);
	line-height: 26px;
	font-size: 16px;
  margin-bottom: 10px;
}
.space_dog .logo_home {
	width: 81px;
}
.space_dog h3 {
	text-align: center;
	color: var(--themeclr);
}
.about_content {
	margin: 42px auto;
  text-align: center;
}
.justifua {
  margin-top: 15px;
}
.grid_11 {
	width: 100%;
	max-width: 460px;
	padding: 0 15px;
}
.cololr_green{
  color:var(--themeclr) !important;
}
.cololr_green svg{
  fill: var(--themeclr);
}
.bg_white {
	background: var(--themeclr);
	border: none;
}
.top_headein_ss {
	text-align: center;
	padding: 19px 0px;
	font-size: 20px;
	color: var(--themeclr);
}
.clas_img_img {
	background: var(--themeclr);
	border-radius: 10px;
	margin: 0 15px;
	margin-top: 26px;
}
.headin_new{
  font-size: 36px;
  margin-bottom: 0;
}
.partnerLogoMain{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.partnerLogo{
  max-width: 80px;
  max-width: 200px;
  margin: 0 30px;
}
.homeHarvestCard {
    position: relative !important;
    margin-bottom: -50px;
    top: -97px !important;
}
.aboutPageBgTop{
  background: url("../images/aboutbg.jpg") no-repeat scroll center bottom;
  background-size: cover;
  min-height: 400px;
  font-size: 0;
  position: relative;
  margin-bottom: 75px;
}
.wriseAboutLogo{
  background: url("../images/aboutLogo.jpg") no-repeat scroll center bottom;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  bottom: -75px;
  left: 50%;
  margin-left: -75px;
  max-width: 100%;
}
.socialFooter i span{
  display: none;
}
.socialFooter{
  padding: 8px 0;
  background-image: linear-gradient(23deg,#25cd9c, #7154fa);
  position: absolute;
  width: 100%;
  left: 0;
  top: 0px;
  display: none;
}

.socialFooter ul{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
}
.socialFooter ul li{
  margin: 7px;
}
.socialFooter ul li a{
  padding: 6px;
  font-size: 20px;
  color: #fff;
  transition: .5s;
}
.PLUS_POOL_section .PLUS_POOL_section_card {
  display: flex;
}
.socialFooter ul li a:hover{
  color: #f4de8a;
}
// .farm_page_bg {
//   background: var(--second);
// }
.farm_page_bg > div:first-child {
  // border-bottom: 1px solid #E7E3EB;
}
// .farm_page_bg h2{
//   color:#fff !important
// }
.connect_modal button {
  opacity: 1 !important;
}
.connect_modal button.hover_button:hover div {
  color: var(--themeclr) !important;
}
.earn_section .grid3 {
	width: 25%;
}
.refer_section_borrn{
  width: 100%;
}
.refer_section_borrn  .input_icon {
	display: flex;
	border: 1px solid #ccc;
	padding: 4px 7px;
	width: 100%;
	border-radius: 5px;
  margin: 13px auto;
}
.refer_section_borrn  .input_icon input {
	width: 100%;
  color: var(--themeclr);
	border: none;
}
.refer_section_borrn  .input_icon i{
	color: #4e9c66;
  cursor: pointer;
}
.count_section  {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
}
.count_section p {
	margin: 7px 0px;
}
.count_section p.color_green {
	color: #4e9c66;
}
.custom_menubutton > div {
  background-color: transparent;
  border: none;
}
.custom_menubutton > div a {
  padding: 4px 4px 0px;
  color: rgb(76, 84, 155);
  font-size: 16px;
  font-weight: 400;
  position: relative;
  height: 42px;
  margin-right: 20px;
  background-color: transparent;
}
.custom_menubutton > div a.active {
  background-color: transparent;
  color: rgb(76, 84, 155);
  font-weight: 600;
}
.custom_menubutton > div a.active::before {
  content: "";
  position: absolute;
  bottom: -1px;
  height: 4px;
  width: 100%;
  background: rgb(248,147,30) none repeat scroll 0% 0% !important;
  border-radius: 2px 2px 0px 0px;
}
h2#info-overview-title {
  font-size: 64px;
  position: relative;
  margin: 16px 0;
}
.info_search {
  position: absolute;
  top: 6px;
  right: 15px;
}
.info_search input {
  height: 32px;
  font-size: 14px;
}
h1 {
  margin-top: 32px;
}
.breadcrumbs {
  position: absolute;
  top: 114px;
  background: rgb(238, 238, 238);
  width: 100%;
  left: 0;
  margin: 0;
  padding: 10px 0;
  border-bottom: 1px solid var(--themeclr);
  display: flex;
  justify-content: center;
  align-items: center;
}
.breadcrumbs li{
  margin-right:20px;
}
.breadcrumbs li a{
  font-size: 16px;
  font-weight: 400;
  padding: 4px 4px 0px 4px;
  height: 42px;
}
.breadcrumbs li a:hover {
  color: var(--second) !important;
  // text-decoration: underline;
}
.breadcrumbs li:nth-child(even){
  display: none;
}
.breadcrumbs li div{
  position: relative;
  font-weight: 600;
}
.breadcrumbs li div:before{
  content: "";
  position: absolute;
  bottom: -10px;
  height: 4px;
  width: 100%;
  background-color: var(--themeclr);
  border-radius: 2px 2px 0 0;
}

.voting_inp:checked {
  background-color: var(--themeclr);
}
.text_left {
  text-align: left !important;
}
.text-center {
  text-align: center !important;
}
.align-center {
  align-items: center;
}
.copied_div {
  position: relative;
}
.copied_txt {
  position: absolute;
      top: 15px;
}
.bannerTop{
  min-height: 100vh;
  padding: 150px 0;
  background: url("../images/banner_bg_new.png") no-repeat scroll right top;
  background-size:cover;
  background-position: top 0px left 0px;
  background-color:#000000 !important;
  display:flex;
  align-items:center;
}
.bannerToptwo
{
  padding: 0px 0 150px 0;
  // background: url("../images/banner_bg_new.png") no-repeat scroll right top;
  background-size:cover;
  background-position: top 0px left 0px;
  background-color:#000000 !important;
  position:relative;
}
.comming_soon_section h1{
	font-size: 48px;
	text-align: left;
	color: #fff;
	font-weight: 600;
}
.comming_soon_section p {
	font-size: 29px;
	line-height: 42px;
	text-align: left;
	color: #fff;
}
@media(max-width:1199px){
  .addidtion_card_{
    display:block !important;
    padding: 30px 0 !important; 
  }
  .addidtion_card_ .text-left ,.addidtion_card_ .text-left p,
  .addidtion_card_ .text-left h4{
    text-align:center !important;
  }
  .addidtion_card_{
    margin-top:30px !important
  }
}
.foter_logo_sectopn_i{
  gap:15px
}
@media(max-width:991px){
  .banner_header_sec .banner_section_content h1 {
    font-size: 45px !important;
  }
  .side_chart_secton.with_new > div{
    grid-template-columns: 50% 50% !important;
  }
  section.PLUS_POOL_section.get_statred .PLUS_POOL_section_card img {
    max-width: 126px !important;
    height: 115px;
  }
  section.PLUS_POOL_section.get_statred .PLUS_POOL_section_card{
    padding:0
  }
  .swap_section_content .button_positon {
    justify-content: center;
}
.side_chart_secton.user::before,
.side_chart_secton.user > div:last-child::after,
.side_chart_secton.user > div:last-child::before,
.side_chart_secton.user > div:first-child::before,
.side_chart_secton.user > div:nth-child(2)::before,
.side_chart_secton.user > div:first-child > div::before{
  display:none
}
.side_chart_secton.user > div > div{
border:2px solid #28015c !important;
border-radius:13px;
margin-bottom:10px
}
.side_chart_secton.user > div:nth-child(2),.side_chart_secton.user > div:last-child{
  border-right:0 !important
}

.side_chart_secton.user {
  display: block;
}
  .addidtion_card_ img {
    max-width: 100px;
  }
  .comming_soon_section h1 {
    font-size: 46px;
  }
  .comming_soon_section p {
    font-size: 28px;
  }
}

@media(max-width:767px){
  .Swap_section.commig_soon_bg ,.Swap_section.commig_soon_bg .h-450 {
    min-height: 295px !important;
}
.Swap_section.commig_soon_bg .squareimg{
  display:none
}
.foter_logo_sectopn_i {
  flex-wrap: nowrap !important;
   gap: 10px;
}

  .farm_page_bg::before
  {
    content:none !important;
  }

  .foter_logo_sectopn_i {
    flex-wrap: wrap;
  }
  .comming_soon_section h1 {
    font-size: 40px;
    text-align: center;
  }
  .comming_soon_section p {
    font-size: 23px;
    line-height: 34px;
    text-align: center;
  }
}
@media screen and (max-width: 599px) {
  .foter_logo_sectopn_i {
    flex-wrap: wrap;
  }

  .comming_soon_section h1 {
    font-size: 40px;
    text-align: center;
  }
  .comming_soon_section p {
    font-size: 23px;
    line-height: 34px;
    text-align: center;
  }
}
@media screen and (min-width:992px)
{
  .bannerTop
  {
    margin-top:-120px !important;
  }
}
// .bannerTop::before{
//   content: "";
//   position: absolute;
//   right: 0;
//   top: -113px;
//   background: url("../images/img3home1.png") no-repeat scroll right top;
//   width: 941px;
//   height: 694px;
// }
.bannerTop h1{
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  line-height:1.7;
  color: var(--themeclr);
}
.bannerTop h1 span{
  color: var(--themeclr);
  font-size: 28px;
  font-weight: 900;
  text-transform: capitalize;
  line-height: 52px;
  display: block;
}
.bannerTop h6{
  color: var(--themeclr);
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  margin: 25px 0 20px;
}
.bannerAppButton{
  z-index : 1000;
}
.bannerAppButton a{
  margin-right: 20px;
  display: inline-block;
  z-index : 1000;
}
nav.fixedheader {
  position: fixed !important;
  width: 100% !important;
  justify-content: space-between;
  margin: auto !important;
  left: 0;
  right: 0;
  top:0 !important;
  background: #d7dfef !important;
  max-width: 100%; 
  z-index:9999 !important;
  // padding: 0 220px;
}

text-white{
  color:"#fff"
}
nav a{
  text-decoration: none !important;
  font-weight:500;
  letter-spacing:1px;
  font-size:18px !important;
}
iframe{
  display: none;
}
a#join-pool-button {
  color: #fff !important;
}
a#join-pool-button svg{
  fill: #fff !important;
}
#btn_hover:hover, span a:hover{
// color:inherit !important
}
// a#join-pool-button:hover {
//   background: var(--second) !important;
//   color: var(--themeclr);
// }
a#join-pool-button:hover svg {
  fill: #fff;
}
.whiteBox.earnBox.whiteShadowBox{
    box-shadow: 0px 0px 54px 0px rgba(129.00000000000003, 129.00000000000003, 224, 0.13);
    padding: 33px 22px 46px 28px;
    margin-bottom: 40px;
}
.whiteBox.earnBox.whiteShadowBox h3{
  font-size: 20px;
  font-weight: 800;
  line-height: 32px;
  color: var(--themeclr);
  font-weight: 700;
  margin-bottom: 10px;
}
.whiteBox.earnBox.whiteShadowBox h4{
  font-size: 17px;
  font-weight: 400;
  color: var(--themeclr);
  margin-bottom: 10px;
  line-height: 28px;
}
.whiteBox.earnBox.whiteShadowBox h2{
  font-size: 17px;
  font-weight: 400;
  color: var(--themeclr);
  margin-bottom: 10px;
  line-height: 28px;
}

.whiteBox.earnBox.whiteShadowBox h5 {
  color: var(--themeclr);
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;
}
.whiteBox.earnBox.purpleBox{
  background-color: var(--themeclr);
  padding: 50px 20px 65px 29px;
  border-radius: 5px 5px 5px 5px;
}
.whiteBox.earnBox.purpleBox h3{
  color: #000;
  font-family: 'Kanit', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
}
.whiteBox.earnBox.purpleBox h2{
  color: #000;
  font-size: 17px;
  font-weight: 400;
}
.whiteBox.earnBox.purpleBox h4{
  color: #000;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
}
// .imgLeftAlign {
//   margin-bottom: 35px;
// }
.sparcoDetail{
  position: relative;
  background-color:#000;
  padding-bottom:30px;
}
.sparcoDetail:before
{
  content:"";
  position: absolute;
width: 150px;
height: 160px;
left: -35px;
top: -80px;
border-radius: 50%;
    z-index: 1;

background: radial-gradient(50% 50% at 50% 50%, rgba(17, 103, 249, 0.25) 0%, rgba(17, 103, 249, 0.045) 100%);
}

.container{
  width: 90% !important;
  max-width: 1200px;
}
.hbLeft h2{
  color: #383c5e;
  font-size: 35px;
  font-weight: 700;
  text-transform: capitalize;
  line-height: 52px;
}
.hbLeft p{
  color: #383c5e;
  font-size: 19px;
  font-weight: 400;
  line-height: 26px;
  margin: 5px 0px 20px 0px;
}
.homeBanking{
  padding: 50px 0;
}
.sparcoProcess{
  padding: 0px 0 80px;
  margin-top:50px
}
.sparcoProcess h2{
  color: var(--themeclr);
  font-size: 35px;
  font-weight: 900;
  text-transform: capitalize;
  line-height: 52px;
  text-align: center;
}
.sparcoProcess h6{
  margin: 25px 0px 77px 1px;
  font-size: 19px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  color: var(--themeclr);
}
.cardWhite {
  box-shadow: 0px 0px 56px 0px rgba(128.99999999999997, 128, 224, 0.13);
  margin: 22px 60px 20px 15px;
  padding: 26px 30px 43px 38px;
  width: 85%;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 5px;
  background:#3d3d3d
}
.cardWhite.cardPurple{
  background: var(--themeclr);
}
.cardNumber{
  background: url("../images/BG-copy.png") no-repeat scroll 0 0;
  width: 117px;
  height: 109px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: 700;
  color: var(--themeclr);
}
.cardWhite h4{
  font-size: 20px;
  color: var(--themeclr);
  margin: 15px 0;
}
.cardWhite.cardPurple h4{
  color: #000;
}
.cardWhite p{
  color: var(--themeclr);
  font-size: 17px;
  line-height: 28px;
}
.cardWhite.cardPurple p{
  color: #000;
}
.homeNews h2{
  color: var(--themeclr);
  font-size: 35px;
  font-weight: 900;
  text-transform: capitalize;
  line-height: 52px;
  text-align: center;
}
.homeNews h6{
  margin: 25px 0px 20px 1px;
  font-size: 19px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  color: var(--themeclr);
}
.blogListHome{
  padding-top: 40px;
}
.blogListHome ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.blogListHome ul li{
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 18px;
  margin-bottom: 18px;
}
.blogListHome ul li h3{
  font-size: 20px;
  color: var(--themeclr);
  font-weight: 700;
  margin-bottom: 15px;
}
.blogListHome ul li h3 small{
  font-size: 16px;
  color: var(--themeclr);
  margin-top: 10px;
}
.blogListHome ul li p{
  color: var(--themeclr);
  line-height: 28px;
  margin-bottom: 18px;
}
.blogListHome ul li a{
  color: var(--themeclr);
  font-weight: 700;
}
.footerTop{
  background: #000;
  padding: 40px 0px 25px 0px;
  border-top:1px solid #151414;
}
.flexFooter {
  display: flex;
}
.gridFooter{
  width: 20%;
}
.gridFooter.widthLarge{
  width: 70%;
}
.gridFooter.WidthSmall{
  width: 30%;
  padding-left: 30px;
}
.gridFooter ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.d-inlineblock li{
  display: inline-block;
  margin-right:15px;
}
.d-inlineblock li:last-child
{
  margin-right:0px;
}
.footerBottom{
  background: #010717;
  padding: 15px 0;
}
.footerBottom p{
  max-width: 90%;
  text-align: center;
  margin: 0 auto;
  font-size:13px;
  color: var(--themeclr);
  line-height: 28px;
}
.gridFooter{
  padding: 0 15px;
}

.gridFooter h3{
  color: var(--themeclr);
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 10px;
}
.gridFooter ul li a{
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  color: var(--themeclr) !important;
}
.gridFooter ul li a:hover{
  color:#f4de8a !important
}
.footerLogo{
  margin-bottom: 10px;
}
.gridFooter p{
  color: var(--themeclr);
  margin: 0;
  font-size:14px !important;
  line-height: 24px;
  font-weight:400 !important;
}
@media(max-width:1090){
  .footerTop{
    padding:167px 0px 36px 0px !important
  }
}
@media screen and (max-width: 900px) {

.partnerLogoMain{
  flex-wrap: wrap;
}
.partnerLogo {
	margin: 7px 9px;
}
.about_content h1 {
	font-size: 30px;
}
.titleBox h2 {
	font-size: 20px;
}
.farmStakBox h2 {
	font-size: 20px;
}
.fsBox h3 {
	color: #f2f2f2 !important;
  font-weight:400 !important;
  font-size:14px !important;
}
.tvlBox h3 {
	font-size: 20px;
}
.tvlBox h2 {
	font-size: 30px;
}
.earnBox h2 {
	font-size: 15px;
}
.bMPnRQ .mobile-icon {
	width: 130px;
}
.info_search {
  position: relative;
  top: unset;
  right: unset;
  justify-content: center;
  display: flex;
}
.nav_wrapper {
  background: var(--themeclr);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.info_search {
  margin: 5px 10px 10px;
}
}

@media screen and (max-width: 780px) {
  .homeHarvestCard {
    top: -34px !important;
}


  .rowContent {
    flex-wrap:wrap;
  }
  .grid3 {
    width: 100%;
    max-width: 100%;
    padding: 0 15px;
  }
  .grid8 {
    width: 100%;
    max-width: 100%;
    padding: 0 15px;
  }
  .grid4 {
    width: 100%;
    max-width: 100%;
    padding: 0 15px;
  }
  .roadrTreeImg {
    margin-top: 50px;
  }
  .rowContent > div{
    margin: 14px 0px;
  }
  .bMPnRQ .mobile-icon {
    width: 134px;
  }
  .clas_img_img img {
    width: 46%;
  }
  .about_content h1 {
    font-size: 29px;
  }
  .fsBox:first-child::before {
    right: 6px;
    display:none;
  }
  .flexFooter{
    flex-direction: column;
  }
  .footerTop{
    padding-top: 30px;
  }
  .gridFooter.widthLarge{
    width: 100%;
  }
  .gridFooter.WidthSmall{
    padding-left: 0;
    width: 100%;
    margin-top: 30px;
  }
  .gridFooter{
    width: 100%;
    padding: 0;
    margin-top: 30px;
  }
}

@media(max-width:767px){
  section.Swap_section.swapsec{
    margin-top:50px !important
  }
  .banner_section_content img.bansquare{
    display:none
  }
  .side_chart_secton.with_new > div {
    display: grid !important;
    grid-template-columns: 25% 25% 25% 25%;
  }
  .swapimg{
    display:none
  }
  .PLUS_POOL_section{
    margin-bottom:40px !important
  }
  .swap_section_content {
    padding: 0px 0px !important;
}
  .Swap_section{
    margin-top:0 !important
  }
  .Swap_section.height_secti_swap {
    margin-bottom: 0 !important;
    padding-bottom:30px
  }
  .comming_soon_section h1 ,.title_header_Section h1,
  .swap_section_content h1,
  .banner_header_sec .banner_section_content h1{
    font-size: 30px !important;
  }
  .banner_header_sec .banner_section_content h1 span{
    font-size:20px !important
  }
  .colrev_md .row
  {
    flex-direction:column-reverse;
  }
  #homepage-hero
  {
    display:none;
  }
  .bannerTop
  {
    margin-top:-120px !important;
  }
  .bannerTop {
    min-height: 100vh;
    padding: 0px 0;
}
}

@media(min-width:768px)
{
  .img_flex_md
  {
    display:flex;
    align-items:center;
  }
  .bannerTop
  {
    margin-top:-120px;
  }
  .bannerToptwo:before
{
  content:"";
  position: absolute;
width: 400px;
height: 400px;
left: -180px;
top: -100px;
border-radius:50%;

background: radial-gradient(50% 50% at 50% 50%, rgba(17, 103, 249, 0.25) 0%, rgba(17, 103, 249, 0.045) 100%);
}
}
@media(max-width:575px){
  .list_icon_a i
  {
    margin-right:12px;
  }
  .side_chart_secton.with_new > div{
    grid-template-columns: 100% !important;
  }
  .footer_bg {
    padding-top: 15px !important;
    padding-bottom: 15px !important;
}
  .foter_logo_sectopn_i {
    display: grid !important;
    grid-template-columns: 50% 50%;
    gap: 21px;
}
  .PLUS_POOL_section_card {
    display: block !important;
    text-align:left
}
  .PLUS_POOL_section_card .conts {
    min-width: 230px;
  }

  .PLUS_POOL_section_card img {
    max-width: 100px !important;
    height: 100px !important;
  }
  .link_footer_div.d-inlineblock li
  {
    display:block !important;
  }
  .link_footer_div.d-inlineblock li.hide_obile_hi
  {
    display:none !important;
  }
  .link_footer_div a
  {
    font-size:14px !important;
  }
  .headong_blk_mob div:first-child
  {
    display:block;
  }
  .banner_header_sec .banner_section_content h1
  {
    font-size:30px !important;
  }
  .banner_header_sec .banner_section_content h1 span
  {
    font-size:20px !important;

  }
  .farm_page_bg::after
  {
    max-width:100px;
  }
  section.footerBottom {
    margin-bottom: 50px;
  }
  nav{
    width:100% !important
  }
  .socialFooter ul li i {
    font-size: 16px;
  }
  .socialFooter {
    padding: 0px 0;
  }
  nav button {
    font-size: 12px !important;
    padding: 5px !important;
    margin-right: 0 !important;
 }
}



.text_color_farm:hover{
  color:var(--themeclr) !important;
  opacity:0.9
}

button.theme-btn, .addidtion_card_ button, .gradient-box, #join-pool-button, .theme-btn-notfound, .theme-btn-connect {
  background-image: linear-gradient(#7300ff, #1f093f);
  color: #fff;
  border: 1px solid #7300ff !important;
  white-space: nowrap;
  padding: 20px 30px !important;
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  height:40px
}
.liner_tect_sm
{
  background: linear-gradient(to right, #137DF6 5%,#13CCEC 30%,#FE82DB 45%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
}
.elementor-heading-title-seoc
{
  color:#fff;
  font-size:20px;
  line-height:1.7;
  text-transform:uppercase;
  margin-top:20px;
  margin-bottom:10px;
}
.secon_sec_desc
{
  color: var(--themeclr);
  font-family: 'Kanit', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    margin: 0px 0 20px 0px;
}
.img_text_div_home
{
  display:flex;
}
.flex_text_hm
{
  display:flex;
  flex-direction:column;
  margin-left:20px;
}
.img_hoem_icon
{
  max-width:80px;
}
.hone_sec_card_title
{
  color:#fff;
  font-size:16px !important;
  font-weight:500 !important;
  line-height:1.5;
}
.hone_sec_card_desc
{
  color:#9d9a9a !important;
  font-size:14px !important;
  font-weight:400 !important;
  margin-top:15px;
  margin-bottom:15px;
}
.spar_row_mb .mb-4
{
  margin-bottom:2rem !important;
}

.addidtion_card_  {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px !important;
	border: 1px solid transparent !important;
  padding: 5px 4px;
  min-height: 200px;
  margin: 33px auto;
  background-image:url("../../../../images/addbox.png");
  background-size: 100% 100%;
background-repeat: no-repeat;
}
.addidtion_card_ img {
	margin-right: 13px;
  max-width: 130px;
  object-fit: contain;
}
.addidtion_card_.one > div {
  flex-grow: 1;
  padding: 0px 5px;
}
.addidtion_card_.two > div {
  flex-grow: 1;
  padding: 0px 5px;
}
.addidtion_card_.three > div {
  flex-grow: 1;
  padding: 0px 5px;
}
.addidtion_card_.one p {
	margin: 0;
	text-align: left;
	padding: 2px 5px;
	color: var(--txtyellow);
}
.addidtion_card_.one h4 {
	margin: 0;
	font-size: 24px;
	text-align: left;
	padding: 0 5px;
}
.addidtion_card_.one h4 > span,.addidtion_card_.two p,.addidtion_card_.three p{
	color: var(--txtyellow);
}

.addidtion_card_.two p {
	margin: 0;
	text-align: left;
	font-size: 16px;

	padding: 5px 5px;
	padding-bottom: 0;
}
.addidtion_card_.two h4 {
	margin: 0;
	text-align: left;
	padding: 5px 5px;
	font-size: 23px;
	font-weight: 600;
}
.addidtion_card_.three p {
	margin: 0;
	text-align: left;
	font-size: 15px;
	padding: 5px 5px;
	padding-bottom: 0;
}
.addidtion_card_.three h4 {
	margin: 0;
	text-align: left;
	padding: 5px 5px;
	font-size: 23px;
	color: #fff;
}
.addidtion_card_.three h4 span {
	color: #ffd701;
}
.addidtion_card_ button:hover {
  background: transparent;
  color: #fff;
  border: 1px solid #ffd701;
  opacity: 1 !important;
}

.title_header_Section{
  padding: 20px 0px;
 }
 .title_header_Section h1 {
   color: #fff;
   font-weight: bold;
   font-size: 43px;
   margin-bottom: 25px;
 }
 .title_header_Section p {
   text-align: center;
   color: var(--txtgray);
   margin: 0;
 }
 .PLUS_POOL_section{
  position:relative;
  z-index:9;
  margin-bottom:150px;
 }
 .PLUS_POOL_section_card {
	padding: 20px 10px;
	margin: 0px 20px;
  // display:flex;
  align-items:center
}
.PLUS_POOL_section_card img {
  max-width: 150px !important;
  height: 150px;
  aspect-ratio: 1/1;
}
.PLUS_POOL_section_card .conts {
  min-width: 300px;
  text-align:left;
  margin-left:10px
}
 .PLUS_POOL_section_card .box_get_start {
  margin: 0 auto;
}
.get_statred .PLUS_POOL_section_card h2 {
  text-align: center;
}
.get_statred .PLUS_POOL_section_card p {
  text-align: center;
}
.PLUS_POOL_section_card p {
  color: #585858;
  font-size: 17px;
	line-height: 31px;
}
.PLUS_POOL_section_card h2 {
	color: var(--txtyellow);
	font-size: 22px;
	font-weight: bold;
}
.PLUS_POOL_section .scrollcont{
  width: 100%;
  overflow-x: auto;
}
.PLUS_POOL_section .scrollcont{
  scrollbar-height:5px;
}
.PLUS_POOL_section .scrollcont::-webkit-scrollbar{
  height:5px
}
.additionla_card img.patternimg {
  position: absolute;
  left: -16%;
  top:0;
  bottom:0;
  margin:auto
}
.PLUS_POOL_section_card p {
	color: var(--txtgray);
	line-height: 31px;
}
.PLUS_POOL_section_card .box_get_start {
	width: fit-content;
	padding: 25px;
	border-radius: 10px;
	margin: auto;
}
.PLUS_POOL_section.get_statred .PLUS_POOL_section_card:hover {
  cursor: pointer;

}
.PLUS_POOL_section.get_statred .PLUS_POOL_section_card:hover .box_get_start {
  cursor: pointer;
  transition-duration: 0.3s;
  }
  .get_statred .PLUS_POOL_section_card h2 {
    font-size: 26px;
  }
  .h-100vh{
    min-height:100vh
  }
  .Swap_section.commig_soon_bg {
    background-image: linear-gradient(#531095 , #240344);
    position:relative;
    min-height:450px
  }
  .Swap_section.commig_soon_bg .col-md-6 img {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    right: 0;
  }
  .Swap_section.commig_soon_bg .diamondimg {
    right: -0;
    position: absolute;
  }
  .h-450{
    min-height:450px
  }
  .Swap_section.commig_soon_bg .patternimg {
    position: absolute;
    left: -4%;
    max-width: 400px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .Swap_section.commig_soon_bg .squareimg {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
  }
  .footer_bg {
    background: #050913;
    padding-top:50px;
    padding-bottom:50px;
  }
  .PLUS_POOL_section_card .box_get_start {
    width: fit-content;
    padding: 25px;
    border-radius: 10px;
    margin:  10px auto;
  }
  .PLUS_POOL_section.get_statred .PLUS_POOL_section_card:hover {
    cursor: pointer;
  
  }
 
    .Swap_section {
      margin-top: 100px;
    }
    .swap_section_content h1 {
      color: #fff;
      // text-align: left;
      font-weight: 600;
      line-height: 50px;
      margin-bottom: 26px;
      font-size: 43px;
    }
   
    .swap_section_content p {
      color: var(--txtgray);
      // text-align: left;
      margin-bottom: 27px;
    }
    .swap_section_content {
      padding: 45px 0px;
    }
    .Swap_section.bg_fff{
      position:relative
    }
    .Swap_section.bg_fff .squareimg {
      position: absolute;
      left: 0;
      bottom:0
    }
    .side_chart_secton.user > div > div {
      flex: 1;
      padding: 40px 15px;
      text-align:center
    }
    .side_chart_secton.user > div:first-child > div{
      border-right: 2px solid #28015c;
      border-left: 2px solid #28015c;
      position:relative
    }
    .side_chart_secton.user > div:nth-child(2){
      border-right: 2px solid #28015c;
      position:relative
    }
  .side_chart_secton.user > div:last-child {
      border-right: 2px solid #28015c;
      position:relative
    }
    .side_chart_secton.user > div:nth-child(2)::before, 
    .side_chart_secton.user > div:first-child > div::before,
    .side_chart_secton.user > div:last-child:before {
      content: "";
      height: 30px;
      width: calc(100% + 4px);
      position: absolute;
      background: #28015c00 !important;
    }
    .side_chart_secton.user > div:first-child > div::before {
      border-top: 2px solid #28015c !important;
      border-radius: 13px 13px 0 0;
      border-right: 2px solid #28015c !important;
      border-left: 2px solid #28015c !important;
      left: -2px;
      top: -30px;
    }
    .side_chart_secton.user > div:nth-child(2)::before {
      border-bottom: 2px solid #28015c !important;
      border-radius: 0 0 13px 13px;
      border-right: 2px solid #28015c !important;
      border-left: 2px solid #28015c !important;
      left: -2px;
      bottom: -30px;
    }
    .side_chart_secton.user > div:last-child::before {
      border-top: 2px solid #28015c !important;
      border-radius: 13px 13px 0 0;
      border-right: 2px solid #28015c !important;
      border-left: 2px solid #28015c !important;
      left: -2px;
      top: -30px;
    }
    .side_chart_secton.user > div:first-child::before {
      content: "";
      position: absolute;
      height: 30px;
      width: calc(100% + 2px);
      background: #28015c00 !important;
      border-bottom: 2px solid #28015c !important;
      border-radius: 0 0 13px 0;
      left: -100%;
      bottom: -30px;
      border-right: 2px solid #28015c !important;
    }
    .home_chk{
      overflow:hidden
    }
    .side_chart_secton.user > div:last-child::after {
      content: "";
      position: absolute;
      height: 30px;
      width: calc(100% - 1px);
      background: #28015c00 !important;
      border-bottom: 2px solid #28015c !important;
      border-radius: 0 0 0 13px;
      right: -100%;
      bottom: -30px;
      border-left: 2px solid #28015c !important;
    }
    .side_chart_secton.user::before {
      content: "";
      background: #350e6e5c !important;
      height: 400px;
      width: 500px;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      filter: blur(37px);
      border-radius: 50%;
      z-index: -1;
      top: -77px;
    }
    .side_chart_secton.with_new p{
      color:#fff;
      font-size:20px;
    }
    .side_chart_secton.with_new h5 {
      font-size: 20px;
      color: var(--txtyellow);
      margin-bottom: 15px;
    }
    .side_chart_secton.with_new > div > div {
      flex: 1;
      text-align:left
    }
  //   .side_chart_secton.with_new > div > div:first-child{
  //     background-image:url("../../../../images/box1.png");
  //     background-size: 100% 100%;
  //     padding: 20px;
      
  //   }
  //   .side_chart_secton.with_new > div > div:nth-child(2){
  //     background-image:url("../../../../images/box2.png");
  //     background-size: 100% 100%;
  //     padding: 20px;

  //   }
  //   .side_chart_secton.with_new > div > div:nth-child(3){
  //     background-image:url("../../../../images/box2.png");
  //     background-size: 100% 100%;
  //     padding: 20px;
  //   }
  //   .side_chart_secton.with_new > div > div:nth-child(4){
  //     background-image:url("../../../../images/box3.png");
  //     background-size: 100% 100%;
  //     padding: 20px;
  //   }
  //  .side_chart_secton.with_new > div > div:nth-child(2){
  //   position: relative;
  //   left: -60px;
  //  }
  //  .side_chart_secton.with_new > div > div:nth-child(4){
  //   left: -180px;
  //   position: relative;
  //  }
  //  .side_chart_secton.with_new > div > div:nth-child(3){
  //   position: relative;
  //   left: -120px;
  //   position: relative;
  //  }
  //  .side_chart_secton.with_new > div > div > div{
  //   padding-left: 60px;
  //  }
  .side_chart_secton.with_new > div > div {
    background: red !important;
}
.side_chart_secton.with_new > div {
  gap:10px
}
.side_chart_secton.with_new > div > div {
  background-image: linear-gradient(#531095 ,#240344) !important;
  border-radius: 14px;
  padding: 35px 15px;
}
.side_chart_secton.with_new > div > div {
  height: 100%;
  display: flex;
  align-items: center;
}
    .side_chart_secton  {
      margin: 0px 58px;
      display:flex;
      position:relative;
      z-index:9
    }
   
    .side_chart_secton > div {
      flex: 1;
    }
    .side_chart_secton > div p {
      color: #585858;
      // text-align: left;
    }
    .side_chart_secton > div h3 {
      color: #fff;
      // text-align: left;
      font-weight: 600;
      font-size: 30px;
      margin: 0;
    }
   
    .side_chart_secton {
      margin: 0px 5px;
    }
    .side_chart_secton > div p {
      color: var(--txtyellow);
      // text-align: left;
      font-size:26px
    }

    .side_chart_secton.with_new > div {
      display: grid !important;
    }
    .side_chart_secton.with_new > div {
      display: grid !important;
      grid-template-columns: 25% 25% 25% 25%;
  }
    .banner_header_sec{
      position:relative;
      // overflow-x:hidden;
      z-index: 10;
      padding-top:80px
    }
    .Swap_section.height_secti_swap {
      background: #0c011e;
      margin-top:60px;
      margin-bottom:150px;
      position:relative;
      overflow-x:hidden
    }
    .Swap_section.height_secti_swap .img-fluid.squareimg {
      position: absolute;
      right: -15vw;
    }
    .Swap_section.height_secti_swap .diamondimg{
      position: absolute;
      bottom: 60px;
      left: -26px;
    }
    .swapimg {
      height: 300px;
      width: 300px;
      background: #4c1c81ab;
      position: absolute;
      bottom: -90%;
      z-index: 9;
      filter: blur(50px);
      border-radius: 50%;
      right: 24%;
  }
    .additionla_card{
      position:relative;
      z-index:9;
    }
    .additionla_card::before {
      position: absolute;
      z-index: -1;
      background: #070c1c;
      height: 700px;
      aspect-ratio: 1/1;
      content: "";
      border-radius: 50%;
      -webkit-filter: blur(37px);
      -webkit-filter: blur(37px);
      filter: blur(37px);
      left: -170px !important;
      top: -65px !important;
    }
    .banner_header_sec::before {
      position: absolute;
      z-index: -1;
      background: #150925;
      height: 100%;
      aspect-ratio: 1/1;
      content: "";
      border-radius: 50%;
      -webkit-filter: blur(37px);
      filter: blur(37px);
      left: -142px !important;
      top: -197px !important;
    }
    .banner_header_sec::after {
      position: absolute;
      z-index: -1;
      background: #150925;
      height: 100%;
      aspect-ratio: 1/1;
      content: "";
      border-radius: 50%;
      -webkit-filter: blur(37px);
      filter: blur(37px);
      right: -142px !important;
      top: -197px !important;
    }
    .banner_section_content img.bansquare {
      position: absolute;
      left: calc(100% - 53vw);
      z-index: -1;
      top: -27px;
      width: 170px;
    }
    .banner_header_sec .designimg {
      position: absolute;
      right: calc(100% - 125vw);
      max-width: 100%;
      top: -219px;
    }
    .designimg_moreindex
    {
      position:absolute;
      z-index:1;
      right:0px;
      max-width:500px;
      // top:0px;
      bottom:30px;
      top:unset !important;
    }
    .banner_header_sec .banner_section_content h1 {
      font-size: 60px;
      color: #fff;
      text-align: left;
      font-weight: 600;
      margin-bottom: 26px;
    }
    .banner_header_sec .banner_section_content h1 span{
      color:var(--yellow);
      font-size: 45px;
      font-weight: 300;
    }
    .banner_header_sec .banner_section_content p {
      color: var(--subtitle);
      text-align: left;
    }
    .button_positon {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 15px 0;
    }
    .foter_logo_sectopn_i {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 22px 0 !important;
    }
    .farm_page_bg
    {
      position:relative;
      padding-top:30px !important;
      // overflow-x:hidden;

    }
    .farm_page_bg::before
    {
      position: absolute;
    z-index: 0;
    background: #150925 !important;
    height: 100%;
    aspect-ratio: 1/1;
    content: "";
    border-radius: 50%;
    -webkit-filter: blur(37px);
    -webkit-filter: blur(37px);
    filter: blur(37px);
    left: -142px !important;
    top: -197px !important;
    }

    .farm_page_bg::after {
      position: absolute;
      z-index: 0;
      background: #150925;
      height: 100%;
      aspect-ratio: 1/1;
      content: "";
      border-radius: 50%;
      -webkit-filter: blur(37px);
      filter: blur(37px);
      right: 0px !important;
      top: -197px !important;
      max-width: 500px;
      max-height: 700px;
    }
    .mt_pager
    {
      margin-top:20px;
    }

    @media only screen and (min-width:576px) and (max-width:767px)
    {
      .farm_page_bg::after
      {
        max-width:200px;
      }
    }

    
    @media only screen and (min-width:768px) and (max-width:991px)
    {
      .farm_page_bg::after
      {
        content:none;
      }
      .farm_page_bg::before

      {
        left: -90px !important;
    top: -197px !important;
    max-width: 378px;
    max-height:500px;
      }
      .farm_page_bg.farms_bg_pos::before
      {
        top:-125px !important;
      }
    }


    @media only screen and (min-width:992px) and (max-width:1199px)
    {
      .farm_page_bg::after
      {
        max-width:400px;
        max-height:600px;
      }
      .farm_page_bg::before

      {
        left: -587px !important;
    top: -197px !important;
      }
      .farm_page_bg.farms_bg_pos::before

      {
        content:none !important;
      }
    }

    
    @media only screen and (min-width:1200px) and (max-width:1399px)
    {
      .farm_page_bg::after
      {
        max-width:400px;
        max-height:600px;
      }
      .farm_page_bg::before

      {
        left: -207px !important;
    top: -197px !important;
      }

      .farm_page_bg.farms_bg_pos::after
      {
        max-width:500px;
        max-height:700px;
      }
      .farm_page_bg.farms_bg_pos::before

      {
        left: -473px !important;
    top: -375px !important;
      }
    }


        
    @media only screen and (min-width:1400px)
    {
      .farm_page_bg.farms_bg_pos::after
      {
        max-width:400px;
        max-height:600px;
      }
      .farm_page_bg.farms_bg_pos::before

      {
        left: -323px !important;
    top: -375px !important;
      }
    }


    .page_fram_pos
    {
      position:relative;
      z-index:2;
    }

    .pading_more_add
    {
      padding-top:100px;
      padding-bottom:50px;
    }

    .link_footer_div a
    {
      font-size:18px !important;
    }
    .link_footer_div li
    {
      color:#fff;
    }
.copytr_text
    {
      color:#8c8c8c !important;
      margin-top:10px !important;
      font-size:15px !important;
    }
    .list_icon_a i
    {
      font-size:20px !important;
      margin-right:15px;
    }
    .list_icon_a li:last-child a .fa
    {
      margin-right:0px !important;
    }

    @media only screen and (max-width:576px)
    {
      .allow_space_mob
      {
        padding-bottom:75px;
      }
    }

    @media only screen and (min-width:968px)
    {
      .gridFooter.WidthSmall
      {
        text-align:right;
      }
    }

    .notfound_img
    {
      max-width:100px;
    }
    .designimg_moreindex.notf_design {
      position:absolute;
      z-index: 1;
      right: 0px;
      max-width: 300px;
      bottom: 30px;
      top: unset !important;
  }

  .btn_theme_two
  {
    background-image: linear-gradient(23deg,#7154fa,#25cd9c) !important;

    color: #fff;
    border: 1px solid #7300ff !important;
    white-space: nowrap;
    padding: 20px 16px !important;
    border-radius: 30px;
    font-weight: 500;
    font-size: 16px;
  }

  .btn_theme_two:hover
  {
    background-image: linear-gradient(#7300ff, #1f093f) !important;
    color: #fff;
    opacity:1 !important;
   
  }

  @media(max-width:575px){
nav .theme-btn{
  padding: 7px 11px !important;
  height: 34px;
}
    .link_footer_div a
    {
      font-size:14px !important;
    }
  }

  .pos_noy_f
  {
    position:relative;
    z-index:3;
  }

  .mb-3-stak
  {
    margin-bottom:20px;
  }

  .btn_center_lunch
  {
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .pading_more_add {
    padding-top: 100px !important;
    padding-bottom: 50px !important;
}
.coming_ul li
{
  color:#fff;
  font-size:22px;
  margin-top:15px;
  margin-bottom:15px;
  text-align:left !important;
}
.font_big_content
{
  font-size:16px !important;
}
p.font_18_p
{
  font-size:18px !important;
}

// .img_banner_token
// {
//   border-radius:50%;
// }
.brn_wiyh_a:hover a 
{
  color:#fff !important;
}

// .coimng_img_size
// {
//   max-width:300px;
// }

@media only screen and (min-width:768px) and (max-width:991px)
{
  nav a
  {
    font-size:12px !important;
    padding-left:5px !important;
    padding-right:5px !important;
  }
  .comming_soon_section h1 {
    font-size: 30px !important;
  }
}


@media only screen and (min-width:992px) and (max-width:1199px)
{
  nav a
  {
    font-size:15px !important;
    padding-left:8px !important;
    padding-right:8px !important;
  }
  .comming_soon_section h1 {
    font-size: 40px !important;
  }
}

// .section_new_center_cmin h1
// {
// text-align:center !important;
// }
.section_new_center_cmin
{
  display:flex;
  justify-content:flex-end;
  flex-direction:column;
  align-items:center;
}
// .section_new_center_cmin ul
// {
// list-style-image: url("../images/bullet.png");
// list-style-positon:bottom;

// }
.section_new_center_cmin ul li
{
  background: url(images/bullet.png) no-repeat left center; 
  padding: 3px 0px 3px 10px;
  list-style: none;
  margin: 0;
  margin-bottom:20px;
}
.section_new_center_cmin span
{
  display: block;
  padding-left: 20px;
  margin-top: -5px;
}

`
export default GlobalStyle
