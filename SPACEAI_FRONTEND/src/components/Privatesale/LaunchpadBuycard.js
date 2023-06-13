import React, { Component } from 'react';
import { useContext, useEffect, useState } from "react";
import { ProgressBar } from 'react-bootstrap';
import { isSaleLive, isUpcoming, Salediffernce, UpcomingDiffernce } from '../../hooks/useProjects';
import Countdown from 'react-countdown';
import coin from "../../images/coin.png";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import { CHAINS } from '../../config/env'
import { getAccount, getChainId, setChainId } from '../../hooks/useAccount'
import { UseTokenInfo } from '../../hooks/useContract';
import { getallsalehook, gettrendingdisplayhook, getuserdatahook, viewlisthook, wishlisthook } from '../../hooks/usebackend';

const renderer = ({ days, Month, Year, hours, minutes, seconds, completed }) => {
    if (completed) {
      return  <div>
      <div>{days}d </div>
      <div>{hours}h</div>
      <div>{minutes}m</div>   
      <div>{seconds}s </div>         
   </div>
    } else {
      // Render a countdown
      return <div>
                {/* <span>{days}<span>Days</span> </span>
                <span>{hours}<span>Hours</span></span>
                <span>{minutes}<span>Minuits</span></span>   
                <span>{seconds}<span>Seconds</span> </span>    */}
                 <div>{days}d </div>
      <div>{hours}h</div>
      <div>{minutes}m</div>   
      <div>{seconds}s </div>
            </div>;
    }
  };

class LaunchpadBuycard extends Component
{
    constructor(props) {
        super(props);
        this.state={
            currentChain: 0,
            wishlist : [],
            accountInfo : getAccount(),
            trending : [],
            singletrending : {},
            auditkyc : [],
            singleaudit : {}
        }
    }

    getuserdata = async()=>{
        let userdata = await getuserdatahook(this.state.accountInfo.toLowerCase());
        console.log("userdata" , userdata.data.data);
        // this.setState({investedpools : userdata.data.data.investedpools})
        this.setState({wishlist : userdata.data.data.wishlist})
        // this.setState({viewlist : userdata.data.data.viewlist})
        // this.setState({investedamount : userdata.data.data.investedamount})
        // let dollar = await Userdollar(userdata.data.data.investedamount);
        // this.setState({dollar : dollar});
        // this.handleactivities();

        let auditkycinfo = await getallsalehook();
        console.log("auditkuycinfo" , auditkycinfo?.data?.data);
        if(auditkycinfo?.data?.data?.length > 0){
            this.setState({auditkyc : auditkycinfo?.data?.data})
        }

        let singleaudit = auditkycinfo?.data?.data?.find(e => e.saleaddress == this?.props?.saleData?.saleAddress)
        if(singleaudit)
        this.setState({singleaudit : singleaudit})
      }

    componentDidMount()
    {
    this.setState( { currentChain: getChainId() });
    this.gettrending();
    this.GetBuytokeninfo()
    console.log("props" , this.props.saleData);
    getAccount() &&  this.getuserdata();
    }

    async gettrending(){
        const {saleData} = this.props
        let data = await gettrendingdisplayhook();
        console.log("dataa trending" , data?.data?.data);
        if(data?.data?.data?.length > 0)
        this.setState({trending : data?.data?.data}) 
        let finddata = data?.data?.data?.find((e)=> e?.saleaddress == saleData.saleAddress)
        this.setState({singletrending : finddata})
    }


    GetBuytokeninfo(){
        const {saleData} = this.props
    if(saleData && saleData?.useWithToken === "0x0000000000000000000000000000000000000000"){
       this.setState( { buyToken: "ETH"});
    }else{
        console.log("saledaata info" , saleData);
        const token =  UseTokenInfo(saleData && saleData?.useWithToken);
        this.setState({ buyToken: token?.symbol });
        
    }
    }

    componentDidUpdate(){
        console.log("didupdarte");
    }


    async handleheart(){
        console.log("handleheart");
        let account = getAccount();
        if(account){
        let payload = {
            walletaddress : account.toLowerCase(),
            saleaddress : this.props.saleData.saleAddress
        }
        let wishlist = await wishlisthook(payload);
        console.log("wishlist respponsr" , wishlist);
        this.setState({wishlist : wishlist.data.data.wishlist})
        this.getuserdata();
    }
    }

    async handleview(){
        console.log("handleview");
        // this.props.history.push(`/privatesaledetail/${this.props.saleData.saleAddress}`)
        let account = getAccount();
       
        if(account){
            let payload = {
                walletaddress : account.toString().toLowerCase(),
                saleaddress : this?.props?.saleData?.saleAddress
            }
            let viewlist = await viewlisthook(payload).then(()=>{
                window.location.href = window.location.origin + `/privatesaledetail/${this.props.saleData.saleAddress}`
            });
        }
        else{
            window.location.href = window.location.origin + `/privatesaledetail/${this.props.saleData.saleAddress}`
        }
    }

    render() {
  
        const { saleData } = this.props
      return (
          
          <div className='col-12 col-xl-4 col-lg-6 col-md-6 col-lg-6-custom mb-4 projects'>
              {/* <a href={`/privatesaledetail/${saleData.saleAddress}`}> */}
                  
        <div className='card card_style_1 ribbox'>
            {saleData && saleData.isWithoutToken  ? 
        <div className='ribbon'>NO TOKEN</div>:<></>
            }
            <div className='card-body'>
                
                <div className='pt-5 px-3 pb-2'>
                <div className='grid_img_div'>
                    <div className='profimg'>
                        {console.log("saledataaaaaaaa" , saleData.logo)}
                       <img src={saleData && saleData.logo} alt={saleData && saleData.symbol} />
                       {/* <img src={this.state.currentChain && CHAINS[this.state.currentChain].IMAGE} alt={saleData && saleData.symbol} className="tokenimg" /> */}
                   </div>
                   <div>
                    <div className="btn-group btn_grp_yel mb-2 d-block d-xl-flex d-md-block d-sm-flex flex_cont_end_flex" role="group" aria-label="Basic example">
                       
                        <div className='d-sm-flex d-block mt-3 mt-xl-0 mt-md-3 mt-sm-0 text-right-xss'>
                        <p className=' mb-0'>
                        {saleData && isSaleLive(saleData.startTime,saleData.endTime,saleData.isPresaleOpen)  ?
                                
                                <span className="badge badge_live">                      
                               
                                    <span className='stats_txt'>Sales Live</span>
                                </span>:
                                ( saleData && isUpcoming(saleData.startTime) ?
                                <span className="badge badge_upcoming">
                              
        
                                <span className='stats_txt'>Upcoming</span>
                                </span>: 
                              
                                
                                <span className="badge badge_finish">
                           
                                    <span className='stats_txt'>Sales End</span>
                                </span>
                                )
                        }
                        {/* {saleData && isSaleLive(saleData.startTime,saleData.endTime,saleData.isPresaleOpen)  ?
                                
                        <span className="badge badge_live">                      
                       
                            <span className='stats_txt'>Sales Live</span>
                        </span>:
                        ( saleData && isUpcoming(saleData.startTime) ?
                        <span className="badge badge_upcoming">
                      

                        <span className='stats_txt'>Upcoming</span>
                        </span>: 
                      
                        
                        <span className="badge badge_finish">
                   
                            <span className='stats_txt'>Sales End</span>
                        </span>
                        )
                        } */}
                        </p>
                </div>
                    </div>
                    
                   
                    {this.state.auditkyc.find(e => e.saleaddress == this?.props?.saleData?.saleAddress) &&<p className='text-right'>
                        <span className="badge badge-green-rect mt-0 mr-2">
                        <a  className='blk_txt text_in_badge_a' href={this.state.singleaudit.audit}  target = "_blank">Audit</a>
                        </span>
                        <span className="badge badge-kyc-rect mt-0">
                        <a className='blk_txt text_in_badge_a' href={this.state.singleaudit.kyc} target = "_blank">KYC</a>
                        </span>
                    </p>}
                </div>
 
           
                </div>
      
               
                {/* <p className='yellow_txt_sm'>{saleData && (saleData.description).substring(0,130)}...</p> */}
                <p className='text-white cardhead font_16 mb-1'>{saleData && saleData.name}</p>
                {this.state.singletrending && this.props.user && <span class="badge badge-kyc-rect mt-0 mb-2 badge_trend"><span class="blk_txt">#OnTop{this.state.singletrending?.position}</span></span>}
                <p className='desc_grey_txt pb-0 mb-0'>1 {this.state.buyToken} = {saleData && saleData.presaleRate/10**6} {saleData && saleData.symbol}</p>
                <p className=' text-gray mb-1 purple_head mt-2 font_13'>Softcap</p>
                <p className='green_txt_big pb-0 mb-0'>
                {saleData && (saleData.softCap / 10 ** 18).toFixed(2)} {this.state.buyToken}
                    {/* {saleData && (saleData.hardCap/10**18).toFixed(2)} BNB */}
                    </p>

                    
            <p className=' purple_head d-flex justify-content-between mt-2 mb-2'>
               <span className='desc_grey_txt'>Progress</span>
               {/* <span className='orangetext'>Participants<b className='pl-2'>{saleData && saleData.participants}</b></span> */}
               {console.log("saleDatasaleDatasaleData" , parseFloat(parseInt(saleData.earnedCap)/parseInt(saleData.hardCap) * 100))}
                </p>
            <ProgressBar now={saleData && parseFloat(parseInt(saleData.earnedCap)/parseInt(saleData.hardCap) * 100)} className='yellow_bar'/>
            <p className='white_txt_sm d-flex justify-content-between mt-1'>
               <span className='desc_grey_txt'>{saleData && parseInt(parseInt(saleData.earnedCap)/parseInt(saleData.hardCap) * 100)} %</span>
               <span className='desc_grey_txt'>{saleData && ((saleData.earnedCap)/10**18).toFixed(3)}</span>
                </p>

                <p className='white_txt_sm d-flex justify-content-between mt-0 mb-1'>
               <span className='desc_grey_txt'>Total Users Participated:</span>
               <span className='desc_grey_txt font_12'>{saleData && saleData?.participants}</span>
                </p>

                {saleData && saleData?.isPancake ? 
                <>
                <p className='white_txt_sm d-flex justify-content-between mt-0 mb-1'>
               <span className='desc_grey_txt'>Swap Rate:</span>
               <span className='desc_grey_txt font_12'>{saleData && saleData?.pancakeRate}</span>
                </p>

                <p className='white_txt_sm d-flex justify-content-between mt-0'>
               <span className='desc_grey_txt'>lockup Time :</span>
               <span className='desc_grey_txt font_12'>{saleData && (saleData?.lpUnlockon*1000)/(1000*60*60*24)} Days</span>
                </p>
                </> : <></>}

   
   <hr className='hr_green mb-0' />
        
                <div className='white_txt_sm d-flex justify-content-between mt-0 align-items-center webr_res_div'>
                    <div>
                    {  saleData && isUpcoming(saleData.startTime) ?
                        <p class="mt-2 countup countbtn ml-sm-0 mb-2">
                        <span class="btn_timer">
                            <div className='countdown'>
                            <span className='desc_grey_txt'>Sale Starts in</span> <br /> <Countdown date={Date.now() + (UpcomingDiffernce(saleData.startTime))} renderer={renderer} className="countdown_grey" />
                        </div> 
                                    </span>
                        </p>: 
                        (saleData && isSaleLive(saleData.startTime,saleData.endTime,saleData.isPresaleOpen)  ?
                        <p class="mt-2 countbtn mb-2">
                            <span class="btn_timer">
                                
                                <span class="">
                                <div className='countdown'>
                           <span className='desc_grey_txt'>Sale Ends in</span> <br /> <Countdown date={Date.now() + Salediffernce(saleData.endTime)} renderer={renderer} className="countdown_grey" />
                        </div> 
                                    </span></span>
                        </p>:
                         <p className='countdown_grey mt-2'>
                         <span className='desc_grey_txt'>The Sale Is Ended</span> <br /> 
                        
                    </p>)
                        }
                        </div>
                        <div className='pb_card_buy'>
                        {/* <button className='btn_social mr-1'>
                        <i class="fa fa-bell-o" aria-hidden="true"></i>
                        </button> */}
                        
                        <button className='btn_social mr-2' onClick={()=>this.handleheart()}>
                        <i class={this.state.wishlist.includes(this.props.saleData.saleAddress) ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true" ></i>
                        </button>
                        <a href={`/privatesaledetail/${saleData.saleAddress}`} onClick = {async()=>{localStorage.setItem("saledata" , JSON.stringify(this.props.saleData));
                                await this.handleview()
                    }}>
                        <button className="get-started-btn" 
                        // onClick={async()=> await this.handleview()}
                        >
                            View Pool
                        </button>
                        </a>
                        </div>
                        </div>
                </div>
            </div>
        </div>
            {/* </a> */}
         

    </div>
    
      )
    }

}


export default LaunchpadBuycard