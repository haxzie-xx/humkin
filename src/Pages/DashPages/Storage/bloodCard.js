import React, {Component} from 'react';
import {Col, Row} from 'react-materialize';

class BloodCard extends Component{

    render(){
        return(
            <Col s={12} m={6} l={4}>
            <div className="grad_top_card card-2">
                <div className="basic_card ">
                    <p className="card_title">{ this.props.btype }</p>
                    <div className="small_line m0"/>
                    <p className="_caption">{ this.props.value }</p>
                    <Row className="m0 pad10">
                    </Row>
                </div>
            </div>
        </Col>
        )
    }
}
export default BloodCard