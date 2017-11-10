import React, {Component} from 'react'
import {Row, Col, Input, Button} from 'react-materialize'
import axios from 'axios';
import api from '../../../api.json';

const bloodType = [
                    'A+', 'A-',
                    'B+', 'B-',
                    'AB+', 'AB-',
                    'O+', 'O-'
                ];
class DonationForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            adhaar      : '',
            bbid        : 9,
            fname       : '',
            lname       : '',
            email       : '',
            phone       : '',
            gender      : 'M',
            blood       : 'A+',
            dob         : '',
            location    : ''

        }
    }
    componentWillMount(){
        // loadjs('..../public/js/materialize.min.js')
    }

    validateFields(){
        //TODO: create validation logic
    }

    closeRegistration = ()=>{
        this.props.closeCallBack();
    }

    createDonor(){

        axios.post(api.url+'/create_donor',{
                'adhaar'    : this.state.adhaar,
                'bbid'      : this.state.bbid,
                'fname'     : this.state.fname,
                'lname'     : this.state.lname,
                'email'     : this.state.email,
                'phone'     : this.state.phone,
                'gender'    : this.state.gender,
                'blood'     : this.state.blood,
                'dob'       : this.state.dob,
                'location'  : this.state.location
        }).then((response) => {
            console.log(response);
            this.closeRegistration();
        }).catch((error) => {
            console.log(error);
        });
 
    }
    render(){
        return(
            <Row>
                <Row>
                    <p className="card_title m0top">Donor Registration</p>
                    <hr className="_small_line" />  
                </Row>
                
                <Input s={12} m={6} type="tel" label="Aadhar Number" 
                    onChange={
                        (event) =>{
                            this.setState({ adhaar : event.target.value });
                        }
                    } validate/>
                <Input s={12} m={6} type="email" label="Email Address" 
                    onChange={
                        (event) =>{
                            this.setState({ email : event.target.value });

                        }
                    } validate/>
                <Input s={12} m={6} type="text" label="First Name" 
                    onChange={
                        (event) =>{
                            this.setState({ fname : event.target.value });
                        }
                    } validate/>
                <Input s={12} m={6} type="text" label="Last Name" 
                    onChange={
                        (event) =>{
                            this.setState({ lname : event.target.value });
                        }
                    } validate/>
                <Input s={12} m={6} type="tel" label="Phone Number" 
                    onChange={
                        (event) =>{
                            this.setState({ phone : event.target.value });                        }
                    } validate/>
                <Input s={12} m={6} type="text" placeholder="" label="Birth Date" 
                    onChange={
                        (event) =>{
                            this.setState({ dob : event.target.value });                        }
                    } validate/>
                <Input s={12} m={6} type="text" label="City / Address" 
                    onChange={
                        (event) =>{
                            this.setState({ location : event.target.value });
                        }
                    } validate/>
                <Col s={6} m={3}>
                <select className="custom-select" onChange={ (event) => {
                    this.setState({ gender : event.target.value });
                }}>
                        <option disabled>Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Other</option>
                    </select>
                </Col>
                <Col s={6} m={3}>
                <select className="custom-select" onChange={ (event) => {
                    this.setState({ blood : event.target.value });
                }}>
                <option disabled>Blood Type</option>
                {
                            bloodType.map( (btype, index) => {
                                return <option value={btype} label={btype} />
                            })
                        }
        
                    </select>
                </Col>
                
        
        <div className="col s12 m0 pad10 center">
            <Button className="m10 waves-effect waves-light red accent-2" onClick={ (event) => { this.createDonor() }}>Register</Button>
        </div>
        </Row>

        )
    }
}

export default DonationForm