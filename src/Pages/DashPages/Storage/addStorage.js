import React, {Component} from 'react'
import {Row, Col, Input, Button} from 'react-materialize'
import api from '../../../api.json';
import axios from 'axios';


class CreateStorage extends Component{

    constructor(props){
        super(props);
        this.state = {
            bbid            : this.props.bbid,
            name            : '',
            capacity        : ''
        }
    }

    createStorage(){

        if(this.props.bbid){

            axios.post(api.url+'/create_storage',{
                'bbid'      : this.state.bbid,
                'name'      : this.state.name,
                'capacity'    : this.state.capacity
            }).then((response) => {
                if(response.status === 200){
                    alert('storage added!');
                    this.closeRegistration();
                }
            }).catch((error) => {
                console.log(error);
            })
        }else{
            console.log('no bbid');
        }
    }

    closeRegistration(){
        this.props.closeCallBack();
    }

    

    render(){
        return(

            <Row>
            
                    <Row>
                        <p className="card_title">Add Storage Fridge</p>
                        <hr className="_small_line" />  
                    </Row>
                    <Input s={12} m={6} type="text" label="Fridge Name" 
                            onChange={
                                (e) => {
                                    this.setState({ name : e.target.value });
                                }
                            } validate/>
                    <Input s={12} m={6} type="number" label="Capacity (Liters)" 
                            onChange={
                                (e) => {
                                    this.setState({ capacity : e.target.value });
                                }
                            }validate/>
                    
                    < br/>
                    <Col s={12}>
                    <div className="col s12 m0 pad10 center">
                        <Button className="m10 waves-effect waves-light red accent-2" onClick={ ()=> { this.createStorage() }}>Add Fridge</Button>
                    </div>
                    </Col>
             </Row>

        )
    }
}

export default CreateStorage;