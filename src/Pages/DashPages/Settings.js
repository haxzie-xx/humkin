import React, {Component} from 'react'
import {Row, Col, button} from 'react-materialize'
import DRecordItem from '../../components/DRecordItem'

class DonationRecord extends Component{

    render(){
        return(
            <div className="basic_card pad20 card-2 m20top">
                <Row>
                        <p className="card_title">Settings</p>
                        <hr className="_small_line" />  
                    </Row>
            </div>
        )
    }
}

export default DonationRecord