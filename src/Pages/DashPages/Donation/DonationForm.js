import React, {Component} from 'react'
import {Row, Col, Input, Button} from 'react-materialize'
import axios from 'axios';
import api from '../../../api.json';
import Auth from '../../../auth';
let auth = new Auth();

const hstyle = {
    'display' : 'none'
}

const vstyle = {
    'display' : 'block'
}

class DonationForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            adhaar      : '',
            newDonor    : false,
            isNurse     : false,
            blood       : '',
            bbid        : auth.getBbid(),
            quantity    : '',
            nid         : ''
        }
    }

    checkAdhaar(adhaarId){
        
        axios.post(api.url+'/check_registered_donor', {
            'adhaar' : adhaarId,
            'bbid'  :   this.state.bbid
        }).then((respose) => {
            if(respose.status === 200){
                console.log(respose.data);
                this.setState({ newDonor : true, adhaar: adhaarId, blood: respose.data[0].blood })
            }else{
                this.setState({ newDonor : false, adhaar: adhaarId })
            }
            
        }).catch((error) => {
            console.log(error)
        });
    }

    checkNurseId(nurse_id){
        axios.post(api.url+'/check_nurse_id', {
            'nurse_id' : nurse_id,
            'bbid'  :   this.state.bbid
        }).then((respose) => {
            if(respose.status === 200){
                console.log(respose.data);
                this.setState({ isNurse : true, nid: nurse_id })
            }else{
                this.setState({ isNurse : false, nid: nurse_id })
            }
            
        }).catch((error) => {
            console.log(error)
        });
    }


    getStyles(){
        if(this.state.newDonor){
            return vstyle;
        }else{
            return hstyle;
        }
    }

    getNurseStyle(){
        if(this.state.isNurse){
            return vstyle;
        }else{
            return hstyle;
        }
    }
    createDonation(){
        axios.post(api.url+'/create_donation', {
            'nid'  : this.state.nid,
            'bbid'      : this.state.bbid,
            'adhaar'    : this.state.adhaar,
            'quantity'  : this.state.quantity
        }).then((respose) => {
            if(respose.status === 200){
                console.log(respose.data);
                
            }else{
                alert('Something went wrong')
            }
            
        }).catch((error) => {
            console.log(error)
        });
    }
    render(){
        return(
            <Row>
               
            <div className="basic_card m10top row pad20 card-1">
                <Row>
                    <p className="card_title m0top">Donation Entry</p>
                    <hr className="_small_line" />  
                </Row>
                
                <Input s={12} m={6} type="tel" label="Aadhar Number" onChange={
                    (e) => {
                        this.checkAdhaar(e.target.value)
                    }
                } validate/>

                <div style={ this.getStyles() }>
                    <Input s={12} m={6} type="text" value={ this.state.blood} disabled/>
                    <Input s={12} m={6} type="number" label="Quantity in ml" 
                    onChange={
                        (e) => {
                            this.setState({ quantity : e.target.value });
                        }
                    } validate/>
                    <Input s={12} m={6} type="number" label="Nurse ID" 
                    onChange={
                        (e) => {
                            this.checkNurseId(e.target.value);
                        }
                    } validate/>

            <Col s={9}/>
            <div className="col s3 m0 pad10 right" style={ this.getNurseStyle() } >
                <Button className="m10 waves-effect waves-light red accent-2" onClick={ ()=> { this.createDonation() }}>Add to bank</Button>
            </div>
        </div>
        </div>        
        </Row>

        )
    }
}

export default DonationForm