import React, {Component} from 'react'

class DRecordItem extends Component{

    handleClick = () => {
        console.log('clicked from item');
        this.props.onClickEdit(this.props.recordId);
    }
    render(){
        return(

            <tr onClick={ this.handleClick }>
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