import React, { Component } from 'react';
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Modal, FormControl, InputGroup } from 'react-bootstrap';
import { auditkycvalidate, trendingvalidate } from '../../hooks/kycvalidation';
import { addtrendinghook , addsalehook} from '../../hooks/usebackend';

import proof from "../../images/proof.webp"

class EditAuditModal extends Component
{
    constructor(props) {
        super(props);
        this.state = {          
            addauditModal: true,
            saleaddress : "",
            status : "",
            displayname : "",
            type : "Launchpad",
            position : "",
            date : "",
            errors : {},
            audit : "",
            kyc : ""
           
        };
    }

    getsaleinfo = async() => {
        this.setState({saleaddress: this?.props?.data?.saleaddress , audit : this?.props?.data?.audit ,
        kyc : this?.props?.data?.kyc , status : this?.props?.data?.status
        })
    }

    componentDidMount(){
        this.getsaleinfo();
    }

    handleadd = async() => {
        let payload = {
            id : this?.props?.data?._id,
            saleaddress : this.state.saleaddress,
            status : this.state.status,
            audit : this.state.audit , 
            kyc : this.state.kyc
        }
        console.log("payload" , payload);

        let validate = await auditkycvalidate(payload);
        console.log("validate " , validate);
        if(validate.isValid){console.log("true");
            let settingresult = await addsalehook(payload);
            console.log("trending result" , settingresult);
            this.props.onDismiss();
            this.props.getset();
        }
        else{
            this.setState({"errors" : validate.errors})
        }
    }

    filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
    
        return currentDate.getTime() < selectedDate.getTime();
      };


   render() {
        
  
        const {addauditModal} = this.state

        
      return (

        

        <Modal className="wallet-modal" show={addauditModal} centered size="md">
        <Modal.Header className='pt-3 header_odal_head'>
        <h3 className="sec-head ">Add Audit/KYC</h3>
            <button type="button" class="close" onClick={() => this.props.onDismiss()}><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>

        </Modal.Header>
        <Modal.Body className="select-wallet modal_body pt-0 pb-0 px-0">

        <div className="wallet-lists px-2">
                              
        <div className='mod_pad_space pt-0'>
        <div className='row'>
                <div className='col-12 col-md-12 px-1 mb-3'>
                        
                        
                        
                       </div>
                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Sale Address</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="saleaddress" placeholder="Sale Address"
                                aria-describedby="basic-addon2"
                                value = {this.state.saleaddress}
                                onChange = {(e)=>this.setState({saleaddress : e.target.value})}
                            />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.saleaddress}</span>
                    </div>                    
                        </div>

                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Audit</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="audit" placeholder="Audit"
                                aria-describedby="basic-addon2"
                                value = {this.state.audit}
                                onChange = {(e)=>this.setState({audit : e.target.value})}
                            />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.audit}</span>
                    </div>                    
                        </div>

                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>KYC</p>
                    <div className="inputs input-groups">
                        <InputGroup className="">
                            <FormControl id="kyc" placeholder="KYC"
                                aria-describedby="basic-addon2"
                                value = {this?.state?.kyc}
                                onChange = {(e)=>this.setState({kyc : e.target.value})}
                            />
                          
                        </InputGroup>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.kyc}</span>
                    </div>                    
                        </div>
                       
                    

                        <div className='col-12 col-md-12 px-1 mb-3'>
                    <p className='input_desc_sm'>Status</p>

                        <select className="form-control custm_sel" id="exampleFormControlSelect3" 
                         value={this?.state?.status}
                         placeholder="Select Status"
                         onChange = {(e)=>{
                            console.log("status" , e.target.value);
                            this.setState({status : e.target.value})}}
                        >
                            <option value="">Select Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>                      

                        </select>
                        <span className="text-danger f-12 d-block text-left">{this?.state?.errors?.status}</span>
                        </div>
 
                   



               
                       
          
         
                    <div className='col-12 col-md-12 px-1 text-center'>
                        <button className="get-started-btn mt-2" onClick={this.handleadd}>
                           Add
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


export default EditAuditModal