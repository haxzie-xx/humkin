import React, {Component} from 'react'
import {Row, Col, Input, Button} from 'react-materialize'

class Campaign extends Component{

    render(){
        return(
            <Row>
            
                <div className="basic_card m10top row pad20 card-1">
                    <Row>
                        <p className="card_title">Create Campaign</p>
                        <hr className="_small_line" />  
                    </Row>
                    <Input s={12} m={6} type="text" label="Camp Name" validate/>
                    <Input s={12} m={6} type="tel" label="Contact Number" validate/>
                    <Input s={12} m={6} type="text" placeholder="" label="Start Date" onChange={(e, value) => {}}  />
                    <Input s={12} m={6} type="text" placeholder="" label="End Date" onChange={(e, value) => {}} />
                    <Input s={12} m={6} type="text" label="Location/ City" validate/>
                    <Input s={12} m={6} type="text" label="Address Line 1" validate/>
                    <Input s={12} m={6} type="text" label="Address Line 2" validate/>
                    <Input s={12} m={6} type="text" label="Caption" validate/>
                    < br/>
                    <Col s={12}>
                    <Col s={6}/>
                    <div className="col s6 m0 pad10 right">
                        <Button className="m10 waves-effect waves-light red accent-2">Cancel</Button>
                        <Button className="m10 waves-effect waves-light red accent-2">Create Campaign</Button>
                    </div>
                    </Col>
                </div>
             </Row>
        )
    }
}

export default Campaign