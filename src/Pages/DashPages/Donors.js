import React, {Component} from 'react'
import {Row, Col, button} from 'react-materialize'
import DRecordItem from '../../components/DRecordItem'

class Donors extends Component{

    render(){
        return(
            <div className="basic_card pad20 card-2 m20top">
            <DRecordItem name="User Name" date="15/09/2017 10:25pm" blood_type="A+" />
            <DRecordItem name="User Name" date="15/09/2017 10:25pm" blood_type="B+" />
            <DRecordItem name="User Name" date="15/09/2017 10:25pm" blood_type="A-" />
            <DRecordItem name="User Name" date="15/09/2017 10:25pm" blood_type="A+" />
            </div>
        )
    }
}

export default Donors