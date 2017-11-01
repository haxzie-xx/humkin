import React, { Component } from 'react';
import MyAwesomeComponent from './MyAwesomeComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      username: '',
      password : ''
    }
  }

  handleClickEvent(event){
    var apiBaseUrl = "http://localhost:4000/api/";
    var seld = this;
    var payload = {
      username : this.state.username,
      password : this.state.password
    }
     
  }
  
  render() {
    return (
      <MuiThemeProvider >
        <AppBar title="HumKin" zDepth='1'/>
        <TextField
          hintText="Enter your Username"
          floatingLabelText="Username"
          onChange = {(event, newValue) => this.setState({username:newValue})} />
        <br/>
        <TextField 
          hintText= "Password"
          floatingLabelText="Password"
          onChange = {(event, newValue) => this.setState({password:newValue})} />
        <br/>
        <RaisedButton
          label="submit"
          primary={true}
          style={style}
          onClick={ (event) => this.handleClickEvent(event)}/>
            
      </MuiThemeProvider>
    );
  }

}

const style = {
  margin : 15
};

export default App;
