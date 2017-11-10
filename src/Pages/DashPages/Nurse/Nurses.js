import React, {Component} from 'react';
import {Button} from 'react-materialize';
import NurseList from './NurseList';
import NurseRegistration from './NurseRegistration';
import NurseEdit from './NurseEdit';

class Nurses extends Component{

    constructor(props){
        super(props);
        this.state = {
            screenId : 0,
            donorAdhaar : ''
        }
    }
    getCurrentView(){
        if(this.state.screenId === 1)
            return <NurseRegistration/>;
        else if(this.state.screenId === 2)
            return <NurseEdit adhaar={this.state.donorAdhaar} />

        return <NurseList editCallBack={ this.editCallBack } />;
    }

    getButtonIcon(){
        if(this.state.screenId === 1 || this.state.screenId === 2)
                    return "close";
        else return "add";
    }

    handleClick = () => {
        let sid = this.state.screenId === 0 ? 1 : 0 ;
        this.setState((prevState, props) => {
          return { screenId: sid }     
        });
      }

    editCallBack = (adhaar) =>{
        this.setState((prevState, props) => {
            return { screenId: 2, donorAdhaar: adhaar}
        });
    }
    

    render(){
        return(
            <div className="basic_card pad20 card-2 m20top">
                { this.getCurrentView() }
                <Button floating className='red' large style={{bottom: '45px', right: '24px', position: 'fixed'}} onClick={ this.handleClick }><i className="material-icons">{ this.getButtonIcon() }</i></Button>

            </div>
        )
    }
}

export default Nurses
