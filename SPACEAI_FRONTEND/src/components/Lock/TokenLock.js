import React, { Component } from 'react';
import { useContext, useEffect, useState } from "react";

import Header from '../Header';
import Sidebar from '../Sidebar';
import Trendingslider from '../trendingslider';

import Walletmodal from "../Walletmodal";


import { getAccount } from '../../hooks/useAccount'





import {  Container, FormControl, InputGroup, ProgressBar,Form,Tab,Nav,Col,Row } from 'react-bootstrap';
import '../../css/styles.css';

import favicon from "../../images/favicon.png"
import { Link } from 'react-router-dom';
import { Getalltokenlock, Getlockercount, Getmytokenlock, UseTokenInfo, ViewMylock } from '../../hooks/useContract';
import { existsSync } from 'fs';
import { searchdata } from '../../hooks/filter';

class TokenLock extends Component {
  showLoader()
  {
    document.getElementsByTagName("body")[0].classList.add("overflow_hidden");
    document.getElementById("logo_overlay").style.opacity = 0.05;
    document.getElementById("loader_div").classList.remove("d-none");
    document.getElementById("loader_div").classList.add("d-block");
  }

  hideLoader()
  {
    document.getElementsByTagName("body")[0].classList.remove("overflow_hidden");
    document.getElementById("logo_overlay").style.opacity = 1;
    document.getElementById("loader_div").classList.remove("d-block");
    document.getElementById("loader_div").classList.add("d-none");
  }
  
    componentDidMount()
    {
      document.getElementById("lock_parent").classList.add("active");

      // this.showLoader();
      this.hideLoader();
    //    this.setState({ accountInfo: getAccount() });
    this.getmylock();
    this.getalllock();
    }

    getmylock = async()=>{
      this.showLoader()
      const mylockaddress = await Getmytokenlock();
      // console.log("mylock" , mylockaddress);
      this.setState({"mylocks" : mylockaddress});
      let mylockdata = []
      // mylockaddress.map(async(data , i)=>{
          console.log("IIIII" , i);

        for(var i =0 ; i<mylockaddress.length ; i++){
          console.log("IIIII" , i , mylockaddress.length);

        if(i<mylockaddress.length){
        let singlelockdata = await ViewMylock(mylockaddress[i]);
        console.log("datass" , await UseTokenInfo(mylockaddress[i]).name);
        const tokendata = await UseTokenInfo(mylockaddress[i])
        singlelockdata.name = tokendata.name
        singlelockdata.decimal = tokendata.decimals;
        singlelockdata.symbol = tokendata.symbol
        mylockdata.push(singlelockdata);
        console.log("mylck" , mylockdata , i ,mylockaddress.length , mylockdata.length);
        if( mylockdata.length == 3){
          console.log("if", mylockdata , i ,mylockaddress.length , mylockdata.length);
          this.setState({mylocksdata : mylockdata})
          this.setState({mylockindex : i+1})
          return;
        }
        else if(i == mylockaddress.length-1){
          console.log("ifelse", mylockdata , i ,mylockaddress.length , mylockdata.length);
          this.setState({mylocksdata : mylockdata})
          this.setState({mylockindex : i+1})
          return;
        }
        }
        this.hideLoader();
        // this.setState({ mylocksdata: [...this.state.mylocksdata, singlelockdata] })
      }
      // )
    }

    loadmylock = async()=>{
     
      this.setState({isLoading : true})
      console.log("insideload" , this.state.mylockindex , this?.state?.mylocks.length);
      for(var i=this.state.mylocksdata.length ; i<this?.state?.mylocks.length ; i++){
        console.log("insidefor");
        let lockarray = []
        if(i<this.state.mylocks.length){
          let singlelockdata = await ViewMylock(this.state.mylocks[i]);
          const tokendata = await UseTokenInfo(this.state.mylocks[i])
        singlelockdata.name = tokendata.name
        singlelockdata.decimal = tokendata.decimals;
        singlelockdata.symbol = tokendata.symbol
        lockarray.push(singlelockdata);
        if(lockarray.length == 3){
          var total = this.state.mylocksdata.concat(lockarray)
          this.setState({mylocksdata : total})
          this.setState({mylockindex : i-1})
          this.setState({isLoading : false})
          return 0;
        }else if(i==(this.state.mylocks.length-1)){
          var total = this.state.mylocksdata.concat(lockarray)
          this.setState({mylocksdata : total})
          this.setState({mylockindex : i-1})
          this.setState({mylockbutton : false});
          this.setState({isLoading : false})
          return 0;
        }
        }
      }
      this.setState({isLoading : false})
    }

    getalllock = async()=>{
      this.showLoader()
      const lockercount = await Getlockercount();      
      this.setState({lockercount : lockercount});
      const locker = await Getalltokenlock(lockercount , 0 , this.state.interval );
      console.log("locker" , locker);
      this.setState({alllocksdata : locker?.lock});
      this.setState({alllocksindex : locker?.index})
      if(locker.index >= lockercount)
      this.setState({alllockbutton : false})

      this.hideLoader()
    }

    loadalllock = async()=>{
      this.setState({allisLoading : true})
      const lockercount = this.state.lockercount;   
      const locker = await Getalltokenlock(lockercount , this.state.alllocksindex);
      console.log("locker" , locker);
      if(locker?.index >= lockercount)
      this.setState({alllockbutton : false})
      var total = this.state.alllocksdata.concat(locker?.lock);
      this.setState({alllocksdata : total});
      this.setState({alllocksindex : locker?.index})
      this.setState({allisLoading : false});
    }

    constructor(props) {
        super(props);
        this.state = {          
            walletModal: false,
            accountInfo: '',
            isLoading : false,

            mylocks : [],
            mylocksdata : [],
            mylockindex : "",
            mylockbutton : true,
            alllocks : [],
            alllocksdata : [],
            alllocksindex : "",
            alllockbutton : true,
            lockercount : "",
            interval : 3,
            isuser : false,

            singlemylocksdata : {},
            singlealllocksdata : {},
            allisloading : false
        };
    }
 
    render() {


      
      
	return (
    <div id="loader_main">
    <div id="loader_div">
    <span className="spin_round">

    </span>
    <img src={favicon} className="logo_load" />
  </div>
        <div className='logo_overlay' id="logo_overlay">

           <Header/>
          
           <div className="whole_sec pb-5">
           <div className='flex_side_right'>
            <Sidebar />
           {/* ongoing_sec */}
           <div className='right_side_sec'>
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
              <div className='row mt-5'>
           <div className='col-12 col-md-10 col-lg-9 mx-auto'>
           <div className="tab_img">
                 <div className='card_bg card'>
            <div className='card-body'>
            <div className="tab_par px-0 py-3">
                        <input
                          className="common_search searc_style_2"
                          type="text"
                          id='myInput'
                          placeholder="Search by LP token address or token address..."
                          onChange = {searchdata}
                        />
                        <Tab.Container defaultActiveKey="first">
  <Row className="container-fluid mt-4 w-100 mx-0 px-0">
    <Col lg={12} className="px-0">
      <Nav variant="" className="table_nav justify-content-end">
        <Nav.Item>
          <Nav.Link eventKey="first" className="nav_link" id="first">
          <p className='mb-0'>All</p>

          </Nav.Link>
         </Nav.Item>
         
        <Nav.Item>
          <Nav.Link eventKey="second" className="nav_link" id="second">
          <p className='mb-0'>My Lock</p>
   
          </Nav.Link>
                               
        </Nav.Item>
        
        
      </Nav>
    </Col>

    <Col lg={12} className="img_center_lg px-0">
    <div className='container container_custom px-0'>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <div class="table-responsive">
  <table className="table recepients_table" id = "myTable">
    <thead>
    <tr>
      <th>Token</th>
      <th>Amount</th>
    </tr>
    </thead>

    {this.state.alllocksdata.map((data , i)=><>
      <tr>
      <td>
      <div className="d-flex pr-2">
        <div className="d-flex justify-content-center align-items-center">
        <div className="relative_token_div  mr-2">
        <img className="token_image_sm " src={favicon} />
        </div>

        </div>
        <div className="p-0 table_det">
          <span className="table_text">{data?.name}</span>
          <span className="sub_tabletext">LINKS</span>
        </div>
      </div>
      </td>
      <td>{data?.amount/10**data?.decimal+" " + data?.symbol  }</td>
      <td className="d-flex justify-content-end"><a 
      href={`/lockdetail/${data.LPAddress}`} className="link_text" to='/lockdetail'>View</a></td>
      
    </tr>
    </>)}
   
   
   
    {/* <tr>
      <td>
      <div className="d-flex pr-2">
        <div className="d-flex justify-content-center align-items-center">
        <div className="relative_token_div  mr-2">
        <img className="token_image_sm " src={favicon} />
        </div>

        </div>
        <div className="p-0 table_det">
          <span className="table_text">PERAGON</span>
          <span className="sub_tabletext">$Peragon</span>
        </div>
      </div>
      </td>
      <td>100,000,000 $Peragon</td>
      <td className="d-flex justify-content-end"><Link className="link_text" to='/lockdetail'>View</Link></td>
      
    </tr>
    <tr>
      <td>
      <div className="d-flex pr-2">
        <div className="d-flex justify-content-center align-items-center">
        <div className="relative_token_div  mr-2">
        <img className="token_image_sm " src={favicon} />
        </div>

        </div>
        <div className="p-0 table_det">
          <span className="table_text">Chainscan</span>
          <span className="sub_tabletext">LINKS</span>
        </div>
      </div>
      </td>
      <td>600,000,000 LINKS</td>
      <td className="d-flex justify-content-end"><Link className="link_text" to='/lockdetail'>View</Link></td>
      
    </tr> */}
  </table>
</div>
<div className="mt-2 d-flex justify-content-center align-items-center btn_pagin_wrap">
{this.state.alllockbutton &&<button className="get-started-btn" onClick={this.loadalllock.bind(this)} id="load_more_btn">{this.state.allisLoading ? 'Loading...' : 'View More Locks' }</button>}
{/* <button className="pagination_btn"><i class="fa fa-angle-left" aria-hidden="true"></i></button>
  <button className="pagination_btn">1</button>
  <button className="pagination_btn">2</button>
  <button className="pagination_btn">3</button>
  <button className="pagination_btn">4</button>
  <button className="pagination_btn">5</button>
  <button className="pagination_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button> */}
</div>
        
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <div class="table-responsive">
         
  <table className="table recepients_table" id = "myTable">
    <thead>
    <tr>
      <th>Token</th>
      <th>Amount</th>
    </tr>
    </thead>
   {/* { this.state.mylocksdata.map((item,index)=>{
    console.log("mylocksdata" ,item,this.state.mylocksdata.length)
    })} */}
    {this.state.mylocksdata.map((data , i)=><>
    {/* {console.log("data" , data)} */}
      <tr>
      <td>
      <div className="d-flex pr-2">
        <div className="d-flex justify-content-center align-items-center">
        <div className="relative_token_div  mr-2">
        <img className="token_image_sm " src={favicon} />
        </div>

        </div>
        <div className="p-0 table_det">
          <span className="table_text">{data.name}</span>
          {/* <span className="sub_tabletext">LINKS</span> */}
        </div>
      </div>
      </td>
      <td>{data.amount/10**18 + " " + data?.symbol} </td>
      <td className="d-flex justify-content-end"><a className="link_text" onClick={
        (e)=>{
          this.setState({singlemylocksdata : data})
          console.log("data" , data);
          this.props.history.push({
            pathname : "/view-lockinfo",
            state : {lockdata : data , address : this.state.mylocks[i]}
          })
        }
      } 
      // to='/lockdetail'
      >View</a></td>
      
    </tr>
    </>)}
    


    {/* <tr>
      <td>
      <div className="d-flex pr-2">
        <div className="d-flex justify-content-center align-items-center">
        <div className="relative_token_div  mr-2">
        <img className="token_image_sm " src={favicon} />
        </div>

        </div>
        <div className="p-0 table_det">
          <span className="table_text">PERAGON</span>
          <span className="sub_tabletext">$Peragon</span>
        </div>
      </div>
      </td>
      <td>100,000,000 $Peragon</td>
      <td className="d-flex justify-content-end"><Link className="link_text" to='/lockdetail'>View</Link></td>
      
    </tr>
    <tr>
      <td>
      <div className="d-flex pr-2">
        <div className="d-flex justify-content-center align-items-center">
        <div className="relative_token_div  mr-2">
        <img className="token_image_sm " src={favicon} />
        </div>

        </div>
        <div className="p-0 table_det">
          <span className="table_text">Chainscan</span>
          <span className="sub_tabletext">LINKS</span>
        </div>
      </div>
      </td>
      <td>600,000,000 LINKS</td>
      <td className="d-flex justify-content-end"><Link className="link_text" to='/lockdetail'>View</Link></td>
      
    </tr> */}
  </table>
</div>
<div className="mt-2 d-flex justify-content-center align-items-center btn_pagin_wrap">
{this.state.mylocks.length < this.state.mylocksdata.length && <button className="get-started-btn" onClick={this.loadmylock.bind(this)} id="load_more_btn">{this.state.isLoading ? 'Loading...' : 'View More Locks' }</button>}
{/* {this.state.mylockbutton &&<button className="get-started-btn" onClick={this.loadmylock.bind(this)} id="load_more_btn">{this.state.isLoading ? 'Loading...' : 'View More Locks' }</button>} */}
{/* <button className="pagination_btn"><i class="fa fa-angle-left" aria-hidden="true"></i></button>
  <button className="pagination_btn">1</button>
  <button className="pagination_btn">2</button>
  <button className="pagination_btn">3</button>
  <button className="pagination_btn">4</button>
  <button className="pagination_btn">5</button>
  <button className="pagination_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button> */}
</div>
          <Container>
        
</Container>
       
        </Tab.Pane>
        
      </Tab.Content>
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

            <Container className='pb-5 px-0 mt-4'>
                 
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

            {/* <Footer /> */}
        </div>
        </div>
        )
    }
}

export default TokenLock