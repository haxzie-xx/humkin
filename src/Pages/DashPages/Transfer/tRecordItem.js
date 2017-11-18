import React, {Component} from 'react'

class TRecordItem extends Component{

    handleCLick = () => {
        if (typeof this.props.editCallBack === 'function') {
            this.props.editCallBack(this.props.tid);
        }
        
    }
    render(){
        return(
            <tr onClick={ this.handleCLick }>
                <td> { this.props.tid } </td>
                <td> { this.props.hid } </td>
                <td> { this.props.name } </td>
                <td> { this.props.date} </td>
                <td> { this.props.quantity }</td>
                <td> { this.props.blood }</td>
                <td> { this.props.status }</td>
            </tr>
        )
    }
}

export default TRecordItem;