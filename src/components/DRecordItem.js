import React, {Component} from 'react'
import {Row, Col, Button} from 'react-materialize'

class DRecordItem extends Component{

    render(){
        return(

            <tr>
                <td> { this.props.name } </td>
                <td> { this.props.date } </td>
                <td> { this.props.blood_type} </td>
                <td> { this.props.qty }</td>
                <td> { this.props.fridge }</td>
                <td> { this.props.nurse }</td>
            </tr>
        )
    }
}

export default DRecordItem