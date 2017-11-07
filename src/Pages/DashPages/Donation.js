import React, {Component} from 'react'
import {Row, Button} from 'react-materialize'
import DonationForm from './DonationForm'
import DonationRecord from './DonationRecord'

class Donation extends Component{

    constructor(){
        super()
        this.state = {
            screenId: 0
        }
    }
    getCurrentView(){
        if(this.state.screenId === 1)
            return < DonationForm />
        else return < DonationRecord />
    }

    getButtonIcon(){
        if(this.state.screenId === 1)
                    return "close"
        else return "add"
    }

    handleClick = () =>{
        let sid = this.state.screenId === 0 ? 1 : 0 ;
        this.setState((prevState, props) => {
          return { screenId: sid }     
        });
      }
    
    render(){
        return(
            <Row>
                { this.getCurrentView() }
                <Button floating className='red' large style={{bottom: '45px', right: '24px', position: 'fixed'}} onClick={ this.handleClick }><i className="material-icons">{ this.getButtonIcon() }</i></Button>

            </Row>

        )
    }
}

export default Donation