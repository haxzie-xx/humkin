import React, {Component} from 'react'
import {Row, Col, Input, Button} from 'react-materialize'

const bloodType = [
                    'A+', 'A-',
                    'B+', 'B-',
                    'AB+', 'AB-',
                    'O+', 'O-'
                ];
class DonationForm extends Component{

    componentWillMount(){
        // loadjs('..../public/js/materialize.min.js')
    }
    render(){
        return(
            <Row>
                <Row>
                    <p className="card_title m0top">Donor Registration</p>
                    <hr className="_small_line" />  
                </Row>
                
                <Input s={12} m={6} type="tel" label="Aadhar Number" validate/>
                <Input s={12} m={6} type="email" label="Email Address" validate/>
                <Input s={12} m={6} type="text" label="First Name" validate/>
                <Input s={12} m={6} type="text" label="Last Name" validate/>
                <Input s={12} m={6} type="tel" label="Phone Number" validate/>
                <Input s={12} m={6} type="text" placeholder="" label="Birth Date" onChange={(e, value) => {}}  />
                <Input s={12} m={6} type="text" label="City / Address" validate/>
                <Col s={6} m={3}>
                <select className="custom-select">
                        <option disabled>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </Col>
                <Col s={6} m={3}>
                <select className="custom-select">
                <option disabled>Blood Type</option>
                {
                            bloodType.map( (btype, index) => {
                                return <option value={btype} label={btype} />
                            })
                        }
        
                    </select>
                </Col>
                
        
        <div className="col s12 m0 pad10 center">
            <Button className="m10 waves-effect waves-light red accent-2">Register</Button>
        </div>
        </Row>

        )
    }
}

export default DonationForm