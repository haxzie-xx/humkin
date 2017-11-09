import React, {Component} from 'react';
import {Button} from 'react-materialize';
import api from '.././api.json';
import axios from 'axios';
import {browserHistory} from 'react-router'

const  style = {
  margin: "30px auto 0px auto"
};


class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        };
        this.handleClick = this.handleClick.bind(this);
    }
  handleClick(event){ 

    if(this.state.email && this.state.password){
        if( this.state.email.length > 4 && this.state.password.length > 4 ){
            axios.post(api.url+'/login',{
                email: this.state.email,
                password: this.state.password
            }).then((response) => {
                
                if(response.data){
                    alert('Hello');
                    browserHistory.push('/dashboard');
                }
                
            }).catch((error) => {
                console.log(error);
            });
        }
    }
  }

 

    render(){
       return( 
        <div className="sexy_bg">
        <div className="row valign-wrapper">
            <div className="my_card card-3 white">
                <p className="card_title">Sign In</p>
                <hr className="small_line" />
                <div className="row">
                    <div className="input-field">
                        <input id="email" type="email" className="validate" 
                            onChange={ (event) => {
                                this.setState({ email : event.target.value });
                            }}/>
                        <label for="email">Email</label>
                    </div>
                    <div className="input-field" >
                        <input id="password" type="password" className="validate"
                        onChange={ (event) => {
                                this.setState({ password : event.target.value });
                            }}/>
                        <label for="password">Password</label>
                    </div>
                    <div className="m20top col s6 m6">
                            <a href="/"><span className="red-text text-accent-2  m10top">Forgot passowrd?</span></a>
                    </div>
                    <div className="m20top col s6 m6 right-align pad0">
                            <Button className="btn waves-effect waves-light red accent-2" 
                                onClick={ (event) =>{
                                    this.handleClick(event)
                                }}>SignIn</Button>
                    </div>

                    <div className="col s12 pad20 center valign-wrapper">
                        <a href="/signup" className="grey-text" style={style}>
                           Create a new account
                        </a>
                    </div>   
                </div>
            </div>
        </div>
    </div>      
      )
    }
}

export default Login;