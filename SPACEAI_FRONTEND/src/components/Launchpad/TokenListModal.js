import React, { Component } from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CHAINS } from "../../config/env";
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
  FormControl,
  Modal
} from "react-bootstrap";
import { CreateLiquidityToken, CreateStandardToken, GetAdminfee, Getbalance, toFixedNumber } from "../../hooks/useContract";
import { validliquiditytoken, validstandardtoken } from "../../hooks/kycvalidation";
import { getAccount } from "../../hooks/useAccount";
import { UserTokenList } from "../../hooks/usebackend";
import toast, { Toaster } from 'react-hot-toast';
import { iconTheme, position, style } from '../../hooks/useToast';
import CopyToClipboard from "react-copy-to-clipboard";

class TokenListModal extends Component {
 
  




  constructor(props) {
    super(props);
    this.state = {
      
        TokenListModal: true,
        tokenList : [{}]
       
    };
  }

  
  copyText(a, b){
    toast.success("Address Copied", {
        position: position.position,
        style: style,
        iconTheme: iconTheme,
    }
    )

}

  componentDidMount() {
    
    this.gettokensData()
  }
  
  gettokensData = async () => {

    var accountInfo = await getAccount();
    var Tokensinfo = await UserTokenList(accountInfo)
    console.log("Tokensinfo",Tokensinfo?.data);
    this.setState({tokenList : Tokensinfo?.data})
    
   
    
    
};


 
  render(props) {
    
    const {TokenListModal, settingsModal } = this.state


    return (
      
          
        <Modal className="wallet-modal" show={TokenListModal} centered size="lg">
        <Modal.Header className="pb-0 modal_header">
            
            <button type="button" class="close" onClick={this.props.onDismiss}><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>

        </Modal.Header>
        <Modal.Body className="select-wallet modal_body pt-0 pb-0 px-0">

        
                <div className=''>
<div className="tab_img">
      <div className='card_bg card'>
 <div className='card-body pt-0'>
 <div>
    {/* <span className="text-white f-14">Token List</span> */}
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
             <td><a target="blank" className="fa fa-external-link text-light mr-2" hrefhref={CHAINS[localStorage.getItem("CHAIN")].TokenTracker+data?.tokenaddress}></a>
             <CopyToClipboard text={data?.tokenaddress} onCopy={() => this.copyText('invite link', `${data?.tokenaddress}`)}>
                        
              <span className="fa fa-copy "></span> 
                  </CopyToClipboard>
              </td>
            
             
           </tr> </>)}
           
          
           
       
       
           
         </table>
       </div>
            </div>
      </div>
      </div>
      </div>
      </div>
        </Modal.Body>
    </Modal>
    );
  }
}

export default TokenListModal;
