import React, {Component} from 'react';
import {Table} from 'react-materialize';
import DonorListItem from './DonorListItem';
import axios from 'axios';
import api from '../../../api.json';

class DonorList extends Component{

    constructor(props){
        super(props);
        this.state = {
            donors : '',
            isAvailable : false
        }
    }

    editCallBack = (adhaar) => {
        this.props.editCallBack(adhaar);
    }

    loadDonorList(){

        axios.get(api.url+'/all_donors',{

        }).then((response) => {
            console.log(response);
             this.setState((prevState, props) => {
                 return({ donors : response.data, isAvailable : true });
             });
        }).catch((error) => {
            console.log(error);
        });
    }

    prepareDonorList(){
        let rows = [];
        if(this.state.isAvailable){
            console.log(this.state.donors);
            let donorData = this.state.donors;
            for( let i = 0; i< Object.keys(donorData).length; i++){
                rows.push(
                    <DonorListItem
                        editCallBack={ this.editCallBack }
                        adhaar={donorData[i].adhaar} 
                        name={donorData[i].fname+' '+donorData[i].lname}
                        age={ donorData[i].dob }
                        blood={ donorData[i].blood }
                        gender={ donorData[i].gender }
                        location={ donorData[i].location }
                        phone={ donorData[i].phone }
                        email={ donorData[i].email } />
                )
            }

            return rows;
        }else{
            return( <h2> No Data to Display </h2>);
        }
    }

    render(){
        return(
            <div>
            <Table className="highlight">
                <thead>
                    <tr>
                        <th data-field="adhaar">Adhaar</th>
                        <th data-field="name">Name</th>
                        <th data-field="age">Age</th>
                        <th data-field="blood">Blood</th>
                        <th data-field="gender">Gender</th>
                        <th data-field="location">Location</th>
                        <th data-field="phone">Phone</th>
                        <th data-field="Email">Email</th>
                    </tr>
            </thead>
            <tbody>
                { this.state.isAvailable ? this.prepareDonorList() : this.loadDonorList() }
            </tbody>
            </Table>
            </div>
        );
    }
}

export default DonorList;