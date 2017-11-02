import React, {Component} from 'react'
import {Tabs, Tab} from 'react-materialize'
import Donate from './Donate'
import Request from './Request'
import BloodBanks from './BloodBanks'
import Hospitals from './Hospitals'
import Camps from './Camps'

 class Home extends Component{

  constructor(){
    super();
    this.state = {
      screen: 0
    }
  }

  getScreen(){
    switch (this.state.screen){
      case 0:
        return <Camps/>
      case 1: 
        return <BloodBanks/>
      case 2:
        return <Request/>
      case 3:
        return <BloodBanks />
      case 4:
        return <Hospitals />
      default:
        return <h1> hello </h1>
    }
  }

  handleChange = (tabId) =>{
    let screenId  = parseInt(tabId, 10)%10
    this.setState((prevState, props) => {
      return {screen: screenId}     
    });
  }

    render(){
        return(
            <div>
              
                <nav className="nav-extended fucia">
                <div className="nav-wrapper fucia">
                  <a href="" className="m20left main_logo">HumKin</a>
                  <ul id="nav-mobile" className="right">
                    <li><a href="#/login">Login</a></li>
                  </ul>
                </div>
                <div className="nav-content">
                  <Tabs className="tabs tabs-transparent m0" onChange={this.handleChange}>
                    <Tab title="Camps"></Tab>
                    <Tab title="Blood Banks"></Tab>
                  </Tabs>
                </div>
              </nav>
  
          { this.getScreen() }
        </div>
        )
    }
}

export default Home;