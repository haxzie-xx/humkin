import React, {Component} from 'react'
import {Row, Col, Input, Button} from 'react-materialize'
import api from '../../../api.json';
import axios from 'axios';

class EditStorage extends Component{

    constructor(props){
        super(props);

        this.state = {
            isLoaded    : false,
            storage     : {},
            fid         : this.props.fid,
            bbid        : 9,
            name        : '',
            capacity    : '',
        }
    }

    loadData(){
        
                if(!this.isLoaded){
                    axios.get(api.url+'/storage_details/'+9+'/'+this.props.fid, {
                        
                    }).then((response) =>{
                        let storage = response.data;
                        this.setState({ isLoaded : true, storage : storage[0],
                            name      : storage[0].name,
                            capacity  : storage[0].capacity
                        });
                        console.log(response.data);
                       
                    }).catch((error)=>{
                        if(error)
                            console.log('aint got any');
                    });
                }
        
     }

     getInputs(){
         return (
            <div>
                <Input s={12} m={6} type="text" label="Fridge Name" 
                            defaultValue={ this.state.storage.name } 
                            onChange={
                                (e) => {
                                    this.setState({ name : e.target.value });
                                }
                            } validate/>
                    <Input s={12} m={6} type="number" label="Capacity (Liters)" 
                            defaultValue={ this.state.storage.capacity } 
                            onChange={
                                (e) => {
                                    this.setState({ capacity : e.target.value });
                                }
                            }validate/>
            </div>
         )
     }

          /**
     * Method to Delete the current nurse form the bloodbank
     */
    deleteRecord(){
        
                if(this.props.fid){
        
                    axios.post(api.url+'/delete_storage', {
                            'bbid'      : 9,
                            'fid'    : this.state.storage.fid
                    }).then((response) => {
                        if(response.status === 200){
                            alert('storage removed');
                            this.props.closeCallBack();
                        }else{
                            alert('unable to delete storage');
                            this.props.closeCallBack();
                        }
                        
                    }).catch((error) => {
                        console.log('errorr');
                    });
                }
    }

    /**
     * Method to update the nurse record for the entire db
     */
    updateRecord(){
        if(this.props.fid){
            
                        axios.post(api.url+'/update_storage', {
                            'fid'       : this.props.fid,
                            'bbid'      : this.state.bbid,
                            'name'      : this.state.name,
                            'capacity'  : this.state.capacity
                        }).then((response) => {
                            if(response.status === 200){
                                alert('updated details');
                                this.props.closeCallBack();
                            }else{
                                alert('unable to update record');
                                this.props.closeCallBack();
                            }
                            
                        }).catch((error) => {
                            console.log(error);
                        });
        }
    }

    render(){
        return(
            <Row>
            <Row>
                <p className="card_title m0top">Storage Edit</p>
                <hr className="_small_line" />  
            </Row>

            { this.state.isLoaded ? this.getInputs() : this.loadData() }

            <div className="col s12 m0 pad10 center">
            <Button className="m10 waves-effect waves-light red accent-2" onClick={ () => { this.deleteRecord() }}>Delete</Button>
            <Button className="m10 waves-effect waves-light red accent-2" onClick={ () => { this.updateRecord() }}>Update</Button>
        </div>
        </Row>
        )
    }
}

export default EditStorage;