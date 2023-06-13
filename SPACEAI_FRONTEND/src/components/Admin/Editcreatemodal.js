import React, { Component } from 'react';
import { useContext, useEffect, useState } from "react";
import { Modal, FormControl, InputGroup } from 'react-bootstrap';
import isEmpty from "is-empty";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { urlvalidation } from '../../hooks/kycvalidation';

import proof from "../../images/proof.webp"
import { Checkaddress } from '../../hooks/useContract';
import { editdummylaunch } from '../../hooks/usebackend';

class Editcreatemodal extends Component
{
    constructor(props) {
        super(props);
        this.state = {          
            editcreateModal: true,
            tokenaddress : "",
            saleaddress : "",
            currency : "",
            feeoption : "",
            presalerate : "",
            whitelist : "",
            softcap : "",
            hardcap : "",
            minbuy : "",
            maxbuy : "",
            refundtype : "",
            routerexchange : "",
            liquidity : "",
            listingrate : "",
            starttime : "",
            endtime : "",
            logourl : "",
            website : "",
            facebook : "",
            twitter : "",
            github : "",
            telegram : "",
            instagram : "",
            discord : "",
            reddit : "",
            youtubevideo : "",
            description : "",
            button1 : true ,
            tokeninfo : {},
            errors : {},
            withtokenaddress : "",
            isPancake : false,
            isVested : false,
            unlockOn : "",
            earnedcap : "",
            participants : ""
           
        };
    }

    componentDidMount(){
        console.log("props data" , this?.props?.singledata);
        this.setdata()
    }

    async setdata(){
        console.log("date" , new Date(this?.props?.singledata?.startTime));
        this.setState({
            tokenaddress : this?.props?.singledata?.tokenaddress,
            saleaddress : this?.props?.singledata?.saleAddress,
            presalerate : this?.props?.singledata?.presaleRate,
            whitelist : this?.props?.singledata?.whitelist,
            softcap : this?.props?.singledata?.softCap/10**18,
            hardcap : this?.props?.singledata?.hardCap/10**18,
            minbuy : this?.props?.singledata?.minbuy,
            maxbuy : this?.props?.singledata?.maxbuy,
            unlockOn : this?.props?.singledata?.lockingdays,
            starttime : new Date(this?.props?.singledata?.startTime),
            endtime : new Date(this?.props?.singledata?.endTime),
            logourl : this?.props?.singledata?.logo,
            facebook : this?.props?.singledata?.facebook,
            twitter :  this?.props?.singledata?.twitter,
            github :  this?.props?.singledata?.github,
            telegram :  this?.props?.singledata?.telegram,
            instagram : this?.props?.singledata?.instagram,
            discord :  this?.props?.singledata?.discord,
            reddit :  this?.props?.singledata?.reddit,
            youtubevideo :  this?.props?.singledata?.youtubevideo,
            website : this?.props?.singledata?.website,
            tokeninfo : this?.props?.singledata?.tokeninfo,
            earnedcap : this?.props?.singledata?.earnedCap/10**18,
            participants : this?.props?.singledata?.participants
        })
    }

    async settokenaddress(value){
        this.setState({ tokenaddress: value });
        // this.getTokenInfo(e.target.value);
        const tokendata = await Checkaddress(value);
      console.log("tokendata" , tokendata);
      if(tokendata.isValid){
        this.setState({button1 : false})
        this.setState({tokeninfo : tokendata.tokeninfo})
        this.setState({errors : {}});
        // this.setState({approvebutton : tokendata.allowance})
      }
      else{
        let formData = { ...this.state.errors, ["tokenaddress"]: "Invalid token address !" };
        this.setState({errors : formData});
        this.setState({tokeninfo : {}})
        this.setState({button1 : true})
      }
}


    async handleeditpresale(){
        let error = {}
        if(!this.state.saleaddress){console.log("true");
            let formvalue = {...error , ["saleaddress"] : "Sale address field is required"}
            error = formvalue;
        }
        
        if(isNaN(parseFloat(this.state.presalerate)) || this.state.presalerate <= 0){
            let formvalue = {...error , ["presalerate"] : "Invalid presalerate"}
            error = formvalue;
        }
        
        if(!this.state.whitelist){
            let formvalue = {...error , ["whitelist"] : "Launchpad type field is required"}
            error = formvalue;
        }
        
        if(isNaN(parseFloat(this.state.softcap)) || this.state.softcap <= 0){
            let formvalue = {...error , ["softcap"] : "Softcap field is required"}
            error = formvalue;
        }
       
        if(isNaN(parseFloat(this.state.hardcap)) || this.state.hardcap <= 0){
            let formvalue = {...error , ["hardcap"] : "Invalid hardcap"}
            error = formvalue;
        }
        
        if(isNaN(parseFloat(this.state.minbuy)) || this.state.minbuy <= 0){
            let formvalue = {...error , ["minbuy"] : "Invalid Minimum buy"}
            error = formvalue;
        }
        
        if(isNaN(parseFloat(this.state.maxbuy)) || this.state.maxbuy <= 0){
            let formvalue = {...error , ["maxbuy"] : "Invalid Maximum buy"}
            error = formvalue;
        }
        
        if(this.state.isPancake){
            if(isNaN(parseFloat(this.state.unlockOn)) || this.state.unlockOn <= 0){
                let formvalue = {...error , ["unlockon"] : "Invalid locking days"}
                error = formvalue;
            }
           
        }
        if(!this.state.starttime){
            let formvalue = {...error , ["starttime"] : "Start time field is required"}
            error = formvalue;
        }
        if(this.state.starttime > this.state.endtime){
            let formvalue = {...error , ["endtime"] : "End time must be greater than starttime"}
            error = formvalue;
        }
        
        
        if(!this.state.endtime){
            let formvalue = {...error , ["endtime"] : "End time field is required"}
            error = formvalue;
        }
        
        if(!this.state.logourl){
            let formvalue = {...error , ["logourl"] : "Logo url field is required"}
            error = formvalue;
        }
        else{
            if(!urlvalidation(this.state.logourl)){
                let formvalue = {...error , ["logourl"] : "Invalid logo url"}
                error = formvalue;
            }
        }
        if(!this.state.website){
            let formvalue = {...error , ["website"] : "Redirect website url field is required"}
            error = formvalue;
        }
        else{
            if(!urlvalidation(this.state.website)){
                let formvalue = {...error , ["website"] : "Invalid Redirect website url"}
                error = formvalue;
            }
        }
        if(isNaN(parseFloat(this.state.earnedcap)) || this.state.earnedcap <= 0){
            let formvalue = {...error , ["earnedcap"] : "Invalid earnedcap"}
            // this.setState({errors : formvalue});
            error = formvalue;
        }
    
        if(isNaN(parseFloat(this.state.participants)) || this.state.participants <= 0){
            let formvalue = {...error , ["participants"] : "Invalid participants"}
            // this.setState({errors : formvalue});
            error = formvalue;
        }
        
        console.log("errors" , error);
        if(isEmpty(error)){
            console.log("success");
            let payload = {
                tokenaddress : this.state.tokenaddress,
                saleaddress : this.state.saleaddress,
                presalerate : this.state.presalerate,
                whitelist : this.state.whitelist,
                softcap : this.state.softcap,
                hardcap : this.state.hardcap,
                minbuy : this.state.minbuy,
                maxbuy : this.state.maxbuy,
                listingoption : this.state.isPancake,
                lockingdays : this.state.unlockOn,
                starttime : this.state.starttime,
                enddate : this.state.endtime,
                logourl : this.state.logourl,
                website : this.state.website,
                facebook : this.state.facebook,
            twitter :  this.state.twitter,
            github :  this.state.github,
            telegram :  this.state.telegram,
            instagram : this.state.instagram,
            discord :  this.state.discord,
            reddit :  this.state.reddit,
            youtubevideo :  this.state.youtubevideo,
                tokeninfo : JSON.stringify(this.state.tokeninfo),
                id : this.props.singledata._id,
                earnedcap : this.state.earnedcap,
                participants : this.state.participants
            }
            let result = await editdummylaunch(payload);
            console.log("result" , result);
            this.props.get()
            this.props.onDismiss()
    
        }else{
            console.log("not success");
            this.setState({errors : error})
        }
    
    }


   render() {
        
  
        const {editcreateModal} = this.state

        
      return (
        <Modal className="wallet-modal" show={editcreateModal} centered size="md">
        <Modal.Header className='pt-3 header_odal_head'>
        <h3 className="sec-head ">Edit Launchpad</h3>
            <button type="button" class="close" onClick={() => this.props.onDismiss()}><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>

        </Modal.Header>
        <Modal.Body className="select-wallet modal_body pt-0 pb-0 px-0">
        <div className=" px-2">
                              
        <div className='mod_pad_space pt-0'>
        <div className='row'>
               
                       <div className='col-12 col-md-12 px-1'>
                    <p className='input_desc_sm'>Token Address*</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="tokenaddress" placeholder=""
                                aria-describedby="basic-addon2"
                                value={this.state.tokenaddress}
                                onChange = {e => this.settokenaddress(e.target.value)}
                                readOnly 
                            />
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.tokenaddress}</span>
                    </div>
                    <div className='note_desc mt-1 mb-1'>
                    <p>Pool creation fee: 1 BNB</p>
                    </div>
                        </div>

                       

                        <div className={isEmpty(this.state.tokeninfo) ? "d-none" : 'col-12 col-md-12 mb-3'}>
                        <p className='white_txt_sm d-flex justify-content-between mt-0 mb-1'>
                            <span className='desc_grey_txt'>Name :</span>
                            <span className='desc_grey_txt font_12'>{this.state.tokeninfo?.name}</span>
                                </p>

                        
                                <p className='white_txt_sm d-flex justify-content-between mt-0 mb-1'>
                            <span className='desc_grey_txt'>Symbol :</span>
                            <span className='desc_grey_txt font_12'>{this.state.tokeninfo?.symbol}</span>
                                </p>

                                <p className='white_txt_sm d-flex justify-content-between mt-0 mb-1'>
                            <span className='desc_grey_txt'>Decimals :</span>
                            <span className='desc_grey_txt font_12'>{this.state.tokeninfo?.decimals}</span>
                                </p>
                      </div>

                      <div className='col-12 col-md-12 px-1'>
                    <p className='input_desc_sm'>Sale Address*</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="saleaddress" placeholder=""
                                aria-describedby="basic-addon2"
                                value={this.state.saleaddress}
                                onChange = {e => this.setState({saleaddress : e.target.value})}
                                readOnly
                            />
                        </InputGroup>
                        
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.saleaddress}</span>
                    </div>
                    <div className='note_desc mt-1 mb-1'>
                    <p>Pool creation fee: 1 BNB</p>
                    </div>
                        </div>

                        {/* <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Currency</p>
                    <select className="form-control custm_sel" id="exampleFormControlSelect3" 
                         value={this.state.currency}
                         placeholder="Select Currency"
                       onChange={e => this.GetTokenAddress(e.target.value)}
                        >
                            <option value="">Select Currency</option>
                            <option value="BNB">BNB</option>
                            <option value="BUSD">BUSD</option>   
                            <option value="USDT">USDT</option>                      
                            <option value="USDC">USDC</option>                      


                        </select>
                        </div>  */}

                    {/* <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Fee Options</p>
                    <select className="form-control custm_sel" id="exampleFormControlSelect3" 
                         value = {this.state.feeoption}
                         placeholder="Select Fee Options"
                       onChange={e => this.setState({feeoption : e.target.value})}
                        >
                            <option value="">Select Fee Options</option>
                            <option value="Active">5% BNB raised only (recommended)</option>
                            <option value="Inactive">2% BNB raised + 2% token sold</option>   
                        </select>
                    </div>  */}
                       


                        <div className='col-12 col-md-12 px-1 mb-0'>
                        
                        <p className='input_desc_sm'>Presale Rate*</p>
                        <div className="inputs input-groups">
                            <InputGroup className="">
                                <FormControl pattern="^[1-9]+[0-9]*$" id="presalerate" placeholder=""
                                    aria-describedby="basic-addon2"
                                    value = {this.state.presalerate}
                                    onChange = {e => this.setState({presalerate : e.target.value})}
                                />
                              
                            </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.presalerate}</span>

                        </div>
                        <div className='note_desc mt-1 mb-1'>
                    {/* <p>If I spend 1 BNB how many tokens will I receive?</p> */}
                    </div>
                            </div>

                            <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Launchpad type</p>
                    <select className="form-control custm_sel" id="exampleFormControlSelect3" 
                         value = {this.state.whitelist}
                         placeholder="Select Whitelist"
                       onChange={e => this.setState({whitelist : e.target.value})}
                        >
                            <option value="">Select Launchpadtype</option>
                            <option value="launchpad">Launchpad</option>
                            <option value="fairlaunch">Fairlaunch</option>   
                            <option value="privatesale">Privatesale</option>
                        </select>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.whitelist}</span>

                        </div> 


                        <div className='col-12 col-md-12 px-1 mb-0'>
                    <p className='input_desc_sm'>Softcap (BNB)*</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl value={this.state.softcap} 
                            onChange={(e)=>this.setState({ softcap: e.target.value }) } id="softcap" placeholder=""
                                aria-describedby="basic-addon2"
                            />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.softcap}</span>

                    </div>
                    <div className='note_desc mt-1 mb-0'>
                    <p>{"Softcap must be >= 50% of Hardcap"}</p>
                    </div>
                        </div>

                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>HardCap (BNB)*</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="hardcap" value={this.state.hardcap} onChange={(e)=>{this.setState({ hardcap: e.target.value }); }} placeholder=""
                                aria-describedby="basic-addon2"
                            />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.hardcap}</span>

                    </div>
                        </div> 

                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Minimum Buy (BNB)*</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="mincontribution" 
                            value={this.state.minbuy} 
                            onChange={(e)=>this.setState({ minbuy: e.target.value }) } placeholder=""
                                aria-describedby="basic-addon2"
                            />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.minbuy}</span>

                    </div>
                        </div>
                        
                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Maximum Buy (BNB)*</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="maxcontribution" 
                            value={this.state.maxbuy} 
                            onChange={(e)=>this.setState({ maxbuy : e.target.value }) } placeholder=""
                                aria-describedby="basic-addon2"
                            />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.maxbuy}</span>

                    </div>
                        </div> 

                        <div className='col-12 col-md-12 px-1 mb-3'>
                        <p className='input_desc_sm'>Listing Options</p>
                        <div className='d-flex'>
                            <div className={`currency_badge  mr-2 ${this.state.isPancake === true? "active" : ""} `} onClick={(e)=> {
                                this.setState({isPancake : true});
                                
                                // this.forceUpdate();
                                // this.handledisable();
                                }}>Auto</div>
                            <div className={`currency_badge  mr-2 ${this.state.isPancake === false? "active" : ""} `} onClick={(e)=> {
                                this.setState({isPancake : false});
                                // this.forceUpdate();
                                // this.handledisable();
                                }}>Manual</div>                           
                        </div>
                    
                        </div>

                        {this.state.isPancake ?
                        <>
                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Locking Days</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="liquidity" value={this.state.unlockOn} onChange={(e)=>{
                                this.setState({ unlockOn: e.target.value });
                             } } placeholder="0" aria-describedby="basic-addon2" />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.unlockon}</span>
                    </div>
                        </div> 

                        {/* <div className='col-12 col-md-12 px-1 mb-0'>
                    <p className='input_desc_sm'>Listing Rate per {this.state.currency}</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="maxcontribution" value={this.state.pancakeRate} onChange={(e)=>{
                                this.setState({ pancakeRate: e.target.value })
                                }} placeholder="0" aria-describedby="basic-addon2" />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.listingrate}</span>
                    </div>
                    <div className='note_desc mt-1 mb-1'>
                    </div>
                        </div> 
                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Pancakeswap Liquidity</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="liquidity" value={this.state.liquidityPercent} onChange={(e)=>{
                                 this.setState({ liquidityPercent: e.target.value });
                                    }} placeholder="0" aria-describedby="basic-addon2" />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.liquidity}</span>
                    </div>
                        </div>  */}
                        </>:<></>}

                        {/* <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Refund Type</p>
                    <select className="form-control custm_sel" id="exampleFormControlSelect3">
                        <option>Burn</option>                       
                        </select>
                        </div> */}

                        {/* <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Select Router Exchange</p>
                    <select className="form-control custm_sel" id="exampleFormControlSelect4">
                        <option>Pancakeswap</option>                       
                        </select>
                        </div> */}

                        {/* <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Liquidity (%)*</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="liquidity" placeholder="0" aria-describedby="basic-addon2" />
                          
                        </InputGroup>
                    </div>
                        </div>  */}

                      

                        {/* <div className='col-12 col-md-12 px-1 mb-0'>
                    <p className='input_desc_sm'>Listing Rate*</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="maxcontribution" placeholder="0" aria-describedby="basic-addon2" />
                          
                        </InputGroup>
                    </div>
                    <div className='note_desc mt-1 mb-1'>
                    <p>1 BNB = 0 CTD</p>
                    </div>
                        </div>  */}

                    <div className='col-12 col-md-12 px-1 mb-0'>
                    <p className='input_desc_sm'>Select Start time & End time (UTC)*</p>
                    </div>
                    <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Start Time (UTC)*</p>
                    <div className="inputs input-groups date_inoput_grps">
                        <InputGroup className="datepicker_input" value = {this.state.starttime}>
                        <DatePicker
                            // minDate={new Date()}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            selected={this.state.starttime}
                            onChange={(date)=> {
                                this.setState({starttime: date})
                            }}
                          
                            />
                          
                        </InputGroup>
                        <InputGroup.Append className='cur_pointer'>
                                <button variant="outline-secondary" className="trans_cal_btn">
                                <i class="far fa-calendar-alt"></i>
                                </button>
                            </InputGroup.Append>
                    </div>
                    <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.starttime}</span>

                        </div>
                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>End Time (UTC)*</p>
                    <div className="inputs input-groups date_inoput_grps">
                        <InputGroup className="datepicker_input" value = {this.state.endtime}>
                        <DatePicker
                            // minDate={new Date()}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            selected={this.state.endtime}
                            onChange={(date)=> {
                                this.setState({endtime : date})
                            }}
                        />
                          
                        </InputGroup>
                        <InputGroup.Append className='cur_pointer'>
                                <button variant="outline-secondary" className="trans_cal_btn">
                                <i class="far fa-calendar-alt"></i>
                                </button>
                            </InputGroup.Append>
                    </div>
                    <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.endtime}</span>
                        </div>  

                        {/* <div className='col-12 col-md-12 px-1'>
               <div className="custom-control custom-checkbox">
  <input type="checkbox" checked={this.state.isVested} onChange={(e)=> this.setState({isVested : e.target.checked})} className="custom-control-input" id="customCheck1" />
  <label className="custom-control-label" for="customCheck1">Using Vesting Contributor?</label>
</div></div>  

{this.state.isVested ?
            <>
            <div className='col-12 col-md-12 mb-3 px-1 mt-4'>
                    <p className='input_desc_sm'>Vesting Period Days</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="liquiditylockingdays" value={this.state.vestInterval} onChange={(e)=>{
                                this.setState({ vestInterval: e.target.value });
                            } }  placeholder=""
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.vestinterval}</span>
                    </div>
                        </div>
                        <div className='col-12 col-md-12 mb-3 px-1 mt-4'>
                    <p className='input_desc_sm'>Rewards % per Vesting Period</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="liquiditylockingdays"value={this.state.vestPercent} onChange={(e)=>{
                                this.setState({ vestPercent: e.target.value }) ;
                               
                                }} placeholder=""
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.vestpercent}</span>
                    </div>
                        </div>
               </>:<></>     }  */}


<div className='col-12 col-md-12 px-1 mb-0 mt-4'>
                        
                        <p className='input_desc_sm'>Logo URL*</p>
                        <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="file" 
                            value={this.state.logourl} 
                            onChange={(e)=>this.setState({ logourl: e.target.value }) } placeholder=""
                                aria-describedby="basic-addon2"
                            />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.logourl}</span>

                    </div>
                        <div className='note_desc mt-1 mb-0'>
                    <p>URL must be end with a supported image extension .png, .jpg,</p>
                    </div>
                            </div>

                            <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Website*</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl 
                            id="logolink1" placeholder="https://cryptolaunchpad.app"
                                aria-describedby="basic-addon2"
                                value={this.state.website}
                                onChange = {e => this.setState({website : e.target.value})}
                            />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.website}</span>

                    </div>
                        </div>
                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Facebook</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl  id="logolinkfb" placeholder="https://facebook.com"
                                aria-describedby="basic-addon2"
                                value={this.state.facebook}
                                onChange = {e => this.setState({facebook : e.target.value})}
                            />
                          
                        </InputGroup>
                    </div>
                        </div>

                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Twitter</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl 
                            id="logolink2" placeholder="https://twitter.com"
                                aria-describedby="basic-addon2"
                                value = {this.state.twitter}
                                onChange = {e => this.setState({twitter : e.target.value})}
                            />
                          
                        </InputGroup>
                    </div>
                        </div> 

                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Github</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="logolinkgit" placeholder="https://github.com"
                                aria-describedby="basic-addon2"
                                value={this.state.github}
                                onChange = {e => this.setState({github : e.target.value})}
                            />
                          
                        </InputGroup>
                    </div>
                        </div>

                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Telegram</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl 
                            
                            id="logolink3" placeholder="https://telegram.com"
                                aria-describedby="basic-addon2"
                                value = {this.state.telegram}
                                onChange = {e => this.setState({telegram : e.target.value})}
                            />
                          
                        </InputGroup>
                    </div>
                        </div>

                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Instagram</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl  id="logolinkinsta" placeholder="https://instagram.com"
                                aria-describedby="basic-addon2"
                                value= {this.state.instagram}
                                onChange = {e => this.setState({instagram : e.target.value})}
                            />
                          
                        </InputGroup>
                    </div>
                        </div>

                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Discord</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl  id="logolinkdiscord" placeholder="https://discord.com"
                                aria-describedby="basic-addon2"
                                value={this.state.discord}
                                onChange = {e => this.setState({discord : e.target.value})}
                            />
                          
                        </InputGroup>
                    </div>
                        </div>
                        
                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Reddit</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl  id="logolinkreddit" placeholder="https://reddit.com"
                                aria-describedby="basic-addon2"
                                value = {this.state.reddit}
                                onChange = {e => this.setState({reddit : e.target.value})}
                            />
                          
                        </InputGroup>
                    </div>
                        </div>

                        <div className='col-12 col-md-12 px-1 mb-0'>
                    <p className='input_desc_sm'>Youtube Video</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl  id="logolinkyoutube" placeholder="https://youtube.com"
                                aria-describedby="basic-addon2"
                                value={this.state.youtubevideo}
                                onChange = {e => this.setState({youtubevideo : e.target.value})}
                            />
                          
                        </InputGroup>
                    </div>

                    <div className='note_desc mt-1 mb-0'>
                    <p>Input your youtube URL or youtube video ID.</p>
                    </div>
                        </div>

                         {/* <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Description</p>
                    <div className="inputs input-groups text_are_grp">
                        <InputGroup className="">
                            <textarea  
                            id="description" rows="3"
                                aria-describedby="basic-addon2"
                                value = {this.state.description}
                                onChange = {e => this.setState({description : e.target.value})}
                            />
                          
                        </InputGroup>
                    </div>
                    </div> */}

<div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Earned cap*</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="maxcontribution" 
                            value={this.state.earnedcap} 
                            onChange={(e)=>this.setState({ earnedcap : e.target.value }) } placeholder=""
                                aria-describedby="basic-addon2"
                            />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.earnedcap}</span>

                    </div>
                 </div> 

                 <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>participants*</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="maxcontribution" 
                            value={this.state.participants} 
                            onChange={(e)=>this.setState({ participants : e.target.value }) } placeholder=""
                                aria-describedby="basic-addon2"
                            />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.participants}</span>

                    </div>
                 </div> 


          
         
                    <div className='col-12 col-md-12 px-1 text-center'>
                        <button className="get-started-btn mt-2" onClick = {() => this.handleeditpresale()}>
                           Edit
                        </button>
                        
                        </div>
                </div>

            </div>
    </div>
        </Modal.Body>
    </Modal>
      )
    }
}


export default Editcreatemodal