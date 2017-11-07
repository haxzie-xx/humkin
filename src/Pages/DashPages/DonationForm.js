import React, {Component} from 'react'
import {Row, Col, Input, Button} from 'react-materialize'

const bloodType = [ 
                    'A+', 'A-',
                    'B+', 'B-',
                    'AB+', 'AB-',
                    'O+', 'O-'
                ]

const Fridges = [
            'F1',
            'F2',
            'F3',
            'F4'
            ]
class DonationForm extends Component{

    componentWillMount(){
        // loadjs('..../public/js/materialize.min.js')
    }
    render(){
        return(
            <Row>
               
            <div className="basic_card m10top row pad20 card-1">
                <Row>
                    <p className="card_title m0top">Donation Entry</p>
                    <hr className="_small_line" />  
                </Row>
                
                <Input s={12} m={6} type="tel" label="Aadhar Number" validate/>
                <Input s={12} m={6} type="email" label="Email Address" validate/>
                <Input s={12} m={6} type="text" label="First Name" validate/>
                <Input s={12} m={6} type="text" label="Last Name" validate/>
                <Input s={12} m={6} type="tel" label="Phone Number" validate/>
                <Input s={12} m={6} type="text" placeholder="" label="Birth Date" onChange={(e, value) => {}}  />
                <Input s={12} m={6} type="text" label="Location/ City" validate/>
                <Input s={12} m={6} type="text" label="Address" validate/>
                <Col s={12} m={12} l={12}>
                    <p className=" pad10">Blood Group</p>
                </Col>
                <Col s={12} className="center">
                    
                    {
                            bloodType.map( (btype, index) => {
                                return <Input name="bloodType" type='radio' value={btype} label={btype} />
                            })
                        }
                </Col>

                <Input s={12} m={6} type="number" label="Quantity in ml" validate/>
                <Input s={12} m={6} type="number" label="Nurse ID" validate/>
                <Col s={12} m={12} l={12}>
                    <p className=" pad10">Storage Fridge Number</p>
                </Col>

                <Col s={12} className="center">
                    
                    {
                            Fridges.map( (fid, index) => {
                                return <Input name="fridge" type='radio' value={fid} label={fid} />
                            })
                        }
                </Col>
        
        <Col s={7}/>
        <div className="col s5 m0 pad10 right">
            <Button className="m10 waves-effect waves-light red accent-2">Cancel</Button>
            <Button className="m10 waves-effect waves-light red accent-2">Add to bank</Button>
        </div>
        </div>        
        </Row>

        )
    }
}

export default DonationForm