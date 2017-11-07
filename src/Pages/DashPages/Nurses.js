import React, {Component} from 'react'
import {Row, Col, Input, Button} from 'react-materialize'

class Nurses extends Component{

    render(){
        return(
            <Row>
            
                <div className="basic_card m10top row pad20 card-1">
                    <Row>
                        <p className="card_title m0top">Add a Nurse</p>
                        <hr className="_small_line" />  
                    </Row>
                    <Input s={12} m={6} type="tel" label="Adhaar no" validate/>
                    <Input s={12} m={6} type="text" label="First name" validate/>
                    <Input s={12} m={6} type="text" label="Lasr name" validate/>
                    <Input s={12} m={6} type="tel" label="Phone Number" validate/>
                    <Input s={12} m={6} type="text"  label="Join Date (DD/MM/YYYY)" onChange={(e, value) => {}}  />
                    <Input s={12} m={6} type="text"  label="Date of birth (DD/MM/YYYY)" onChange={(e, value) => {}} />
                    <Input s={12} m={6} type="text" label="Location/ City" validate/>
                    <Input s={12} m={6} type="text" label="Address" validate/>                    
                    < br/>
                    <Col s={12}>
                    <Col s={7}/>
                    <div className="col s5 m0 pad10 right">
                        <Button className="m10 waves-effect waves-light red accent-2">Cancel</Button>
                        <Button className="m10 waves-effect waves-light red accent-2">Add Nurse</Button>
                    </div>
                    </Col>
                </div>
             </Row>
        )
    }
}

export default Nurses