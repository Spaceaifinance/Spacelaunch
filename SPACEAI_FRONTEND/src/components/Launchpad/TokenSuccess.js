import React, { Component } from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import toast, { Toaster } from 'react-hot-toast';

import Header from "../Header";
import Sidebar from "../Sidebar";
import Trendingslider from '../trendingslider';




import "../../css/styles.css";


import favicon from "../../images/favicon.png";


import {
  getSaleCards,
  getSaleCardsLimit,
  getTotalSalesInfo,
  searchCards,
  searchSale,
} from "../../hooks/useProjects";
import {
  Container,
  Dropdown,
  Row,
  Col,
  Card,
  ProgressBar,
  InputGroup,
  Form,
  Tab,
  Nav,
  FormControl
} from "react-bootstrap";
import { validstandardtoken } from "../../hooks/kycvalidation";
import { gettokendata } from "../../hooks/useContract";
import { CHAINS } from "../../config/env";
import { iconTheme, position, style } from "../../hooks/useToast";
import { UserTokenList } from "../../hooks/usebackend";
import { getAccount } from "../../hooks/useAccount";


class TokenSuccess extends Component {
 
  


  showLoader() {
    document.getElementsByTagName("body")[0].classList.add("overflow_hidden");
    document.getElementById("logo_overlay").style.opacity = 0.5;
    document.getElementById("loader_div").classList.remove("d-none");
    document.getElementById("loader_div").classList.add("d-block");
  }

  hideLoader() {
    document
      .getElementsByTagName("body")[0]
      .classList.remove("overflow_hidden");
    document.getElementById("logo_overlay").style.opacity = 1;
    document.getElementById("loader_div").classList.remove("d-block");
    document.getElementById("loader_div").classList.add("d-none");
  }

  componentDidMount() {
    document.getElementById("launchpad_parent").classList.add("active");
    this.hideLoader();
    this.gettokensData()
    // this.gettokendatas()
    console.log("address" , this.state.tokenaddress , this.state.hash  , this.props.location.state);
    if(this?.props?.location?.state?.state!="token"){
      this.props.history.push("/")
    }
  }
  // gettokendatas= async()=>{
  //   console.log(">>>" , this.state.tokenaddress.address , this.state.tokenaddress.hash);
  //   let data = await gettokendata(this.state.tokenaddress.address);
  //   console.log("data" , data);
  // }

  constructor(props) {
    super(props);
    this.state = {
      proxy: [],
      totalSales: [],
      onGoingSales: [],
      upComingSales: [],
      isSearch: false,
      searchSale: [],
      search: "",
      interval: 3,
      loadInterval: 3,
      searchInterval: 3,
      searchProxy: [],
      isLoading: false,
      tokenList : [{}],
      tokenListLength:0,
      currentChain: 0,
      setUpdateCms: false,
      name : JSON.parse(sessionStorage.getItem("TKNDATA"))._name?JSON.parse(sessionStorage.getItem("TKNDATA"))._name
                      : JSON.parse(sessionStorage.getItem("TKNDATA")).name,
      symbol :JSON.parse(sessionStorage.getItem("TKNDATA"))._symbol ? JSON.parse(sessionStorage.getItem("TKNDATA"))._symbol
                  : JSON.parse(sessionStorage.getItem("TKNDATA")).symbol,
      supply : JSON.parse(sessionStorage.getItem("TKNDATA"))._totalSupply ? JSON.parse(sessionStorage.getItem("TKNDATA"))._totalSupply
                : JSON.parse(sessionStorage.getItem("TKNDATA")).supply,
      
      tokenaddress : JSON.parse(sessionStorage.getItem("TKNDATA")).tokenAddres ? JSON.parse(sessionStorage.getItem("TKNDATA")).tokenAddres
                      : JSON.parse(sessionStorage.getItem("TKNDATA")).tokenAddress,
                      

      decimal : JSON.parse(sessionStorage.getItem("TKNDATA"))._decimals ? JSON.parse(sessionStorage.getItem("TKNDATA"))._decimals
      : JSON.parse(sessionStorage.getItem("TKNDATA")).decimals,
      errors : {},
      hashlink : CHAINS[localStorage.getItem("CHAIN")].TRANSACTION  +JSON.parse(sessionStorage.getItem("HASH")).transactionHash,
      hash : JSON.parse(sessionStorage.getItem("HASH")).transactionHash ,
      copy : "Copy Address"
    };
  }

  handlecreatetoken = async()=>{
    if(this.state.tokentype == "Standard Token"){
      let payload = {
        name : this.state.name,
        symbol : this.state.symbol,
        decimal : this.state.decimal,
        totalsupply : this.state.totalsupply
      }
      let validate = await validstandardtoken(payload);
      if(validate?.isValid){
        
      }
      else{
        this.setState({errors : validate?.errors})
      }
    }
  }

  copyText(a, b){
    toast.success("Address Copied", {
        position: position.position,
        style: style,
        iconTheme: iconTheme,
    }
    )

}


gettokensData = async () => {

  var accountInfo = await getAccount();
  var Tokensinfo = await UserTokenList(accountInfo)
  console.log("Tokensinfo", Tokensinfo?.data.length);
  this.setState({tokenList : Tokensinfo?.data})
  this.setState({tokenListLength : Tokensinfo?.data.length})
  
 
  
  
};


  



  render() {
    const location = this.props.location.pathname.split("/")[1];

    const {
      totalSales,
      onGoingSales,
      upComingSales,
      search,
      isSearch,
      searchSale,
      accountInfo,
    } = this.state;

    return (
      <div id="loader_main">
        <div id="loader_div">
          <span className="spin_round"></span>
          <img src={favicon} className="logo_load" />
        </div>
        <div className="logo_overlay" id="logo_overlay">
          <Header />

          <div className="whole_sec pb-5">
            <div className="flex_side_right">
              <Sidebar />
              {/* ongoing_sec */}
              <div className="right_side_sec">
                {/* <div className="text-white topBar d-flex justify-content-between">
                  
                    <small>Trending</small>
                  <small>
                    #1&nbsp;<span>Husy</span>
                  </small>
                  <small>
                    #2&nbsp;<span>ORL</span>
                  </small>
                  <small>
                    #3&nbsp;<span>UWC</span>
                  </small>
                  <small>
                    #4&nbsp;<span>777</span>
                  </small>
                  <small>
                    #5&nbsp;<span>IDXS</span>
                  </small>
                  <small>
                    #6&nbsp;<span>COUGNU</span>
                  </small>
                  <small>
                    #7&nbsp;<span>CRICLE</span>
                  </small>
                  <small>
                    #8&nbsp;<span>KASA</span>
                  </small>
                  <small>
                    #9&nbsp;<span>FIFAPP</span>
                  </small>
                  <small>
                    #10&nbsp;<span>SOG</span>
                  </small>
                  <small>
                    #11&nbsp;<span>COOSHA</span>
                  </small>
                  <small>
                    #12&nbsp;<span>Honey</span>
                  </small>
                  
                  
                </div> */}
                {/* <Trendingslider/> */}
                <div className="right_side_spacing">
                <Container className="mt-5 pb-3 px-1">
                  <div className="row">
                <div className='col-12  col-md-10 col-lg-9 mx-auto px-0'>
<div className="tab_img">
      <div className='card_bg card'>
 <div className='card-body'>
 <div>
                <div className='success_div py-4'>
              
<p className="text_green text-center">Your token was created!</p>

<p className='white_txt_sm d-flex justify-content-between mt-0 mb-1'>
<span className='desc_grey_txt'>Name :</span>
<span className='desc_grey_txt font_12'>{this.state.name}</span>
</p> 

<p className='white_txt_sm d-flex justify-content-between mt-0 mb-1'>
<span className='desc_grey_txt'>Symbol :</span>
<span className='desc_grey_txt font_12'>{this.state.symbol}</span>
</p> 
<p className='white_txt_sm d-flex justify-content-between mt-0 mb-1'>
<span className='desc_grey_txt'>Decimal :</span>
<span className='desc_grey_txt font_12'>{this.state.decimal}</span>
</p> 

<p className='white_txt_sm d-flex justify-content-between mt-0 mb-1'>
<span className='desc_grey_txt'>Total Supply :</span>
<span className='desc_grey_txt font_12'>{JSON.parse(sessionStorage.getItem("TKNDATA"))._decimals ? this.state.supply/10**this.state.decimal : this.state.supply}</span>
</p> 

<p className='white_txt_sm d-flex justify-content-between mt-0 mb-1'>
<span className='desc_grey_txt'>Address :</span>
<span className='desc_grey_txt font_12'>{this.state.tokenaddress}</span>
</p> 
         
                    <div className='mt-5 btn4_div'>
                      <a href = {this.state.hashlink} target="_blank">
                    <button className="get-started-btn mt-2 mx-1"
                      // onclick={window.open(this.state.hash.toString() , "_blank")}
                      // onclick="window.open('http://www.website.com/page')"
                    >
                           View Transaction
                        </button></a>
                    {/* <button className="get-started-btn mt-2 mx-1"
                      onClick={() =>  {
                        navigator.clipboard.writeText(this.state.tokenaddress)
                        this.setState({"copy" : "Copied"})
                      }}
                    >
                           {this.state.copy}
                        </button> */}
                        <CopyToClipboard text={`${this.state.tokenaddress}`} onCopy={() => this.copyText('invite link', `${this.state.tokenaddress}`)}>
                        <button variant='link' className="get-started-btn mt-2 mx-1" >Copy Address</button>
                        </CopyToClipboard>
                        <button className="get-started-btn mt-2 mx-1" 
                          onClick={()=>{this.props.history.push("/create")}}
                        >
                           Create Launchpad
                        </button>
                        <button className="get-started-btn mt-2 mx-1"
                          onClick={()=>{this.props.history.push("/createfairlaunch")}}
                        >
                           Create Fairlaunch
                        </button>
                        
                        </div>
                </div>
            </div>
      </div>
      </div>
      </div>
      </div>
      </div>
{this.state.tokenListLength > 0 ?
    
              <div className='row mt-5'>
           <div className='col-12 col-md-10 col-lg-9 mx-auto px-0'>
           <div className="tab_img">
                 <div className='card_bg card'>
            <div className='card-body'>
            <div className="tab_par px-0 py-3">
                       
                        <Tab.Container defaultActiveKey="first">
  <Row className="container-fluid mt-4 w-100 mx-0 px-0">
    

    <Col lg={12} className="img_center_lg px-0">
    <div className='container container_custom px-0'>
    
    <p className="text_green text-center">Your created token list</p>
       
   
     
      
{/* 
         <div className="tokenlists table-responsive scrolllist">
              <div className="d-flex justify-content-between mb-2">
                  <h6>Token Symbol</h6>
                  <h6>Token Name</h6>
                  <h6>Token Decimal</h6>
                  <h6>Explorer</h6>
              </div>
              <div className="">
              {this.state.tokenList.map((data , i)=><>  
                <div className="d-flex justify-content-between align-items-center py-2 tokenlistrow">
                    <p className="mb-0 px-2">{data?.symbol} </p>
                    <p className="mb-0 px-2">{data?.name} </p>
                    <p className="mb-0 px-2">{data?.decimal} </p>
                    <p className="mb-0 px-2">
                      <a href="#" className="fa fa-external-link mr-2 text-light"></a>
                      <span className="fa fa-copy"></span>
                    </p>
                </div>    
              </>)}
         </div>
</div> */}

<div class="table-responsive scrolllist">
         
         <table className="table recepients_table" id = "myTable">
           <thead>
           <tr>
             <th>Token Symbol</th>
             <th>Token Name</th>
             <th>Token Decimal</th>
             <th>Action</th>
           </tr>
           </thead>
         
           
           {this.state.tokenList.map((data , i)=><>   
             <tr>
             <td>{data?.symbol} </td>
             <td>{data?.name} </td>
             <td>{data?.decimal} </td>
             <td><a target="blank" className="fa fa-external-link text-light mr-2" href={CHAINS[localStorage.getItem("CHAIN")].TokenTracker+data?.tokenaddress}></a> 
             <CopyToClipboard text={data?.tokenaddress} onCopy={() => this.copyText('invite link', `${data?.tokenaddress}`)}>
                        
                        <span className="fa fa-copy "></span> 
                            </CopyToClipboard>
             </td>
            
             
           </tr> </>)}
           
          
           
       
       
           
         </table>
       </div>

          <Container>
        
</Container>
       
        
      </div>
    </Col>
  </Row>
</Tab.Container>


                        
                        
                      </div>
</div>
</div>
</div>
</div>
</div>

           : <></>}
                </Container>
                <Container className='pb-5 px-0 mt-2'>
                 
                 <center>
                   <small className="mt-3 bottom_text">
                     Disclaimer: The information provided shall not in any way
                     constitute a recomendation as to whether you should invest
                     in any product discussed. We accept no liability for any
                     loss occasioned to any person acting or refraining from
                     action as a result of any material provided or published.
                   </small>
                 </center>
               </Container>
</div>
                </div>
                </div>
                </div>
                </div>
      </div>
    );
  }
}

export default TokenSuccess;
