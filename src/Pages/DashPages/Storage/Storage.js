import React, {Component} from 'react'
import {Row, Col, Input, Button} from 'react-materialize'

class Storage extends Component{

    render(){
        return(
            <Row>
            
                <div className="basic_card m10top row pad20 card-1">
                    <Row>
                        <p className="card_title">Add Storage Fridge</p>
                        <hr className="_small_line" />  
                    </Row>
                    <Input s={12} m={6} type="text" label="Fridge Name" validate/>
                    <Input s={12} m={6} type="number" label="Capacity (Liters)" validate/>
                    
                    < br/>
                    <Col s={12}>
                    <Col s={6}/>
                    <div className="col s6 m0 pad10 right">
                        <Button className="m10 waves-effect waves-light red accent-2">Cancel</Button>
                        <Button className="m10 waves-effect waves-light red accent-2">Add Fridge</Button>
                    </div>
                    </Col>
                </div>
             </Row>
        )
    }
}

export default Storage