import React, {Component} from 'react'
import {Table} from 'react-materialize'
import DRecordItem from './DRecordItem'
import axios from 'axios';
import api from '../../../api.json';
import Auth from '../../../auth';
let auth = new Auth();


class DonationRecord extends Component{

    constructor(props){
        super(props);
        this.state = {
            donations : '',
            isAvailable : false,
            bbid        : auth.getBbid()
        }
    }

    editCallBack = (nid) => {
        this.props.editCallBack(nid);
    }

    onChildClicked = (recordId) => {
        console.log('Clicked from record List');
        this.props.onClickEdit(recordId);
    }
    loadDonationList(){
        
                axios.post(api.url+'/donation_record/'+this.state.bbid,{
        
                }).then((response) => {
                    console.log(response);
                     this.setState((prevState, props) => {
                         return({ donations : response.data, isAvailable : true });
                     });
                }).catch((error) => {
                    console.log(error);
                });
    }

    prepareDonationList(){
        let rows = [];
        if(this.state.isAvailable){
            console.log(this.state.donations);
            let ddata = this.state.donations;
            for( let i = 0; i< Object.keys(ddata).length; i++){
                rows.push(
                    <DRecordItem 
                    onClickEdit={this.onChildClicked} 
                    did={ddata[i].did}
                    name={ddata[i].fname+' '+ddata[i].lname} 
                    date={ddata[i].don_date} 
                    btype={ddata[i].blood} 
                    qty={ddata[i].quantity}
                    nurse={ddata[i].nurse_name}/>
                )
            }

            return rows;
        }else{
            return( <h2> No Data to Display </h2>);
        }
    }


    render(){
        return(
            <div className="basic_card pad20 card-2 m20top">
                <Table className="stripped">
                    <thead>
                        <tr>
                            <th data-field="fridge">DID</th>
                            <th data-field="name">Name</th>
                            <th data-field="date">Date</th>
                            <th data-field="bloodtype">Blood</th>
                            <th data-field="quantity">Qty</th>
                            <th data-field="nurse">Nurse</th>
                        </tr>
                </thead>
                <tbody>

                { this.state.isAvailable ? this.prepareDonationList() : this.loadDonationList() }
                </tbody>
                </Table>
            
            </div>
        )
    }
}

export default DonationRecord