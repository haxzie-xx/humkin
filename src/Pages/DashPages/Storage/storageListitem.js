import React, {Component} from 'react'

class StorageListItem extends Component{

    handleCLick = () => {
        if (typeof this.props.editCallBack === 'function') {
            this.props.editCallBack(this.props.fid);
        }
        
    }
    render(){
        return(

            <tr onClick={ this.handleCLick }>
                <td> { this.props.fid } </td>
                <td> { this.props.name } </td>
                <td> { this.props.ap } </td>
                <td> { this.props.an } </td>
                <td> { this.props.bp } </td>
                <td> { this.props.bn } </td>
                <td> { this.props.abp } </td>
                <td> { this.props.abn } </td>
                <td> { this.props.op } </td>
                <td> { this.props.o_n } </td>
                <td> { this.props.capacity} </td>
                <td> { this.props.used }</td>
                <td> { this.props.spaceleft }</td>
            </tr>
        )
    }
}

export default StorageListItem;