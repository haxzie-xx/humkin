import React, {Component} from 'react'
import {Row} from 'react-materialize'

class DashView extends Component{

    render(){
        return(
            <Row>
                <div className="basic_card pad5 m10top card-1">
                    <p className="_title pad10">Blood Availability</p>
                    <div className="divider"/>
                </div>
                <div className="basic_card pad5 m10top card-1">
                    <p className="_title pad10">Storage Status</p>
                    <div className="divider"/>
                </div>
                <div className="basic_card pad5 m10top card-1">
                    <p className="_title pad10">Statistics</p>
                    <div className="divider"/>
                </div>
            </Row>
        )
    }
}

export default DashView