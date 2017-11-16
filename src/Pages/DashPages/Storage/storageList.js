import React, {Component} from 'react';
import {Table} from 'react-materialize';
import StorageListItem from './storageListitem';
import axios from 'axios';
import api from '../../../api.json';

class StorageList extends Component{


    constructor(props){
        super(props);
        this.state = {
            storages : '',
            isAvailable : false
        }
    }

    editCallBack = (fid) => {
        this.props.editCallBack(fid);
    }

    loadStorageList(){
        
                axios.get(api.url+'/all_storage/'+9,{
        
                }).then((response) => {
                    console.log(response);
                     this.setState((prevState, props) => {
                         return({ storages : response.data, isAvailable : true });
                     });
                }).catch((error) => {
                    console.log(error);
                });
    }

    prepareStorageList(){
        let rows = [];
        if(this.state.isAvailable){
            console.log(this.state.storages);
            let storeData = this.state.storages;
            for( let i = 0; i< Object.keys(storeData).length; i++){
                rows.push(
                    <StorageListItem
                        editCallBack={ this.editCallBack }
                        fid={storeData[i].fid} 
                        name={storeData[i].name}
                        capacity={ storeData[i].capacity }
                        ap={ storeData[i].ap }
                        an={ storeData[i].an }
                        bp={ storeData[i].bp }
                        bn={ storeData[i].bn }
                        abp={ storeData[i].abp }
                        abn={ storeData[i].abn }
                        op={ storeData[i].op }
                        o_n={ storeData[i].o_n }
                        used={ storeData[i].used }
                        space_left={ storeData[i].space_left }/>
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
                        <th data-field="fid">FID</th>
                        <th data-field="name">Name</th>
                        <th data-field="A+">A+</th>
                        <th data-field="A-">A-</th>
                        <th data-field="B+">B+</th>
                        <th data-field="B-">B-</th>
                        <th data-field="AB+">AB+</th>
                        <th data-field="AB-">AB-</th>
                        <th data-field="O+">O+</th>
                        <th data-field="O-">O-</th>
                        <th data-field="Capacity(L)">Capacity(L)</th>
                        <th data-field="Used(L)">Used(L)</th>
                        <th data-field="Space(L)">Space Left(L)</th>
                    </tr>
            </thead>
            <tbody>
            { this.state.isAvailable ? this.prepareStorageList() : this.loadStorageList() }
            </tbody>
            </Table>
            </div>
        );
    }
}

export default StorageList;