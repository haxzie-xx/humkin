import React, {Component} from 'react'

class NurseListItem extends Component{

    render(){
        return(

            <tr>
                <td> { this.props.nid } </td>
                <td> { this.props.name } </td>
                <td> { this.props.email } </td>
                <td> { this.props.phone} </td>
                <td> { this.props.city }</td>
                <td> { this.props.fridge }</td>
                <td> { this.props.nurse }</td>
            </tr>
        )
    }
}

export default NurseListItem