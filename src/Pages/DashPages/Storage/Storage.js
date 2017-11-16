import React, {Component} from 'react';
import {Button} from 'react-materialize';
import StorageList from './storageList';
import AddStorage from './addStorage';
import EditStorage from './editStorage';

class Storage extends Component{
    constructor(props){
        super(props);
        this.state = {
            screenId : 0,
            fid : ''
        }
    }

    getCurrentView(){
        if(this.state.screenId === 1)
            return <AddStorage closeCallBack={ this.closeCallBack } bbid={9}/>;
        else if(this.state.screenId === 2)
            return <EditStorage fid={this.state.fid} closeCallBack={ this.closeCallBack } />

        return <StorageList editCallBack={ this.editCallBack } closeCallBack={ this.closeCallBack } />;
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

    editCallBack = (fid) =>{
        this.setState((prevState, props) => {
            return { screenId: 2, fid: fid}
        });
    }

    closeCallBack = () => {
        this.setState({ screenId : 0 });
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

export default Storage