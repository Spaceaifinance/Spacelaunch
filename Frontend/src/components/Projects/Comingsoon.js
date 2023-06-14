import React, { Component } from 'react';
import { useContext, useEffect, useState } from "react";

import Header from '../Header';
import Sidebar from '../Sidebar';


import { getAccount } from '../../hooks/useAccount'
import {Card} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import bgstyle2 from "../../images/bg_style2.png";

import bgstyle from "../../images/bg_style.png";

import bgoutline1 from "../../images/bg_outline1.png";
import whiteoutline1 from "../../images/outline-white1.png";

import bgoutline from "../../images/bg_outline.png";
import whiteoutline from "../../images/outline-white.png";
import bgoutline2 from "../../images/bg_outline2.png";
import whiteoutline2 from "../../images/outline-white2.png";




import Web3 from "web3";

import {  Container, FormControl, InputGroup } from 'react-bootstrap';
import '../../css/styles.css';

import favicon from "../../images/favicon.png"
import { Link } from 'react-router-dom';

class Comingsoon extends Component {
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
      // this.showLoader();
      this.hideLoader();
    //    this.setState({ accountInfo: getAccount() });
    }

    constructor(props) {
        super(props);
        this.state = {          
           
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
           <div className='right_side_sec'>
           
              <div className="right_side_spacing">
              
                {/* Coming soon session */}

                <Container className="container coming_sec">
                <div className="bg_outline2">
                    <img src={bgoutline2}  className="out_dark" />
                    <img src={whiteoutline2} className="out_light"/>
                  </div>
                 
                  <div className="bg_outline1">
                    <img src={bgoutline1}  className="out_dark" />
                    <img src={whiteoutline1} className="out_light"/>
                  </div>
                  <div className="coming_soon">
                  {/* <div className="bg_style">
                    <img src={bgstyle}  />
            
                  </div> */}
                  <div className="bg_style2">
                    <img src={bgstyle2}  />
            
                  </div>
                    <h1 className="text-white">Coming Soon</h1>
                  </div>
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

                {/* end of Coming soon session */}

           
            </div>
           </div>
           </div>
           </div>

        </div>
        </div>
        )
    }
}

export default Comingsoon