import React, {Component} from 'react'
import {Row, Col, Input, Button} from 'react-materialize'
import axios from 'axios';
import api from '../../../api.json';

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
            fridges     : {},
            isLoaded    : false,
            adhaar      : '',
            newDonor    : false,
            blood       : ''
        }
    }

    checkAdhaar(adhaarId){
        
        axios.post(api.url+'/check_registered_donor', {
            'adhaar' : adhaarId,
            'bbid'  :   9
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


    getStyles(){
        if(this.state.newDonor){
            return vstyle;
        }else{
            return hstyle;
        }
    }

    getFridges(){
        axios.get(api.url+'/storage_names/'+9,{

        }).then((results) => {
            console.log(results);
            this.setState({ fridges : results.data , isLoaded : true });
        }).catch((error) => {
            console.log(error);
        })
    }

    getFridgeRadios(){
        if(this.state.isLoaded){
            let radios = []
            let radioData = this.state.fridges;
            for( let i = 0; i < Object.keys(radioData).length; i++){
                radios.push(
                    <Input name="fridge" type='radio' value={radioData[i].fid} label={radioData[i].name} />
                );
            }

            return radios;
        }
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
                    <Input s={12} m={6} type="text" value={ this.state.blood}disabled/>
                    <Input s={12} m={6} type="number" label="Quantity in ml" validate/>
                    <Input s={12} m={6} type="number" label="Nurse ID" validate/>
                    <Col s={12} m={12} l={12}>
                        <p className=" pad10">Storage Fridge Number</p>
                    </Col>

                    <Col s={12} className="center">
                        
                        {
                            this.state.isLoaded ? this.getFridgeRadios() : this.getFridges()
                            }
                    </Col>
            
            <Col s={9}/>
            <div className="col s3 m0 pad10 right">
                <Button className="m10 waves-effect waves-light red accent-2">Add to bank</Button>
            </div>
        </div>
        </div>        
        </Row>

        )
    }
}

export default DonationForm