import React, {Component} from 'react'
import {Row, Col} from 'react-materialize'
import DashView from './DashPages/DashView'
import Donation from './DashPages/Donation'
import Requests from './DashPages/Requests'
import DonationRecord from './DashPages/DonationRecord'
import Campaign from './DashPages/Campaign'
import Nurses from './DashPages/Nurses'
import Storage from './DashPages/Storage'
import Donors from './DashPages/Donors'
import Settings from './DashPages/Settings'
import {Link} from 'react-router'

const style = {
    "margin": "0px",
    "padding": "0px"
}


const menu = [
                ['dashview','DashBoard'],
                ['blooddonation','Blood Donation'],
                ['donationrecords','Donation Records'],
                ['request','Hospital Requests'],
                ['nurses','Nurses'],
                ['donors','Donors'],
                ['storage','Blood Storage'],
                ['camps','Campaigns'],
                ['settings','Settings']
            ]

class Dashboard extends Component{


    getView(){
      
        switch(this.getCurrentPageId()){
            case 0:
                return <DashView/>
            case 1:
                return <Donation/>
            case 2:
                return <DonationRecord />
            case 3:
                return <Requests/>
            case 4:
                return <Nurses/>
            case 5:
                return <Donors/>
            case 6:
                return <Storage/>
            case 7:
                return <Campaign/>
            case 8:
                return <Settings/>
            default:
                return <Donation/>
            }
    }

    getActiveClass(index){
        if (index === this.getCurrentPageId()){
            console.log(index)
            return "collection-item active"
        }
        else return "collection-item"
    }

    getCurrentPageId(){
        if( !this.props.params.page)
            return 0
        for (var i = 0; i < menu.length; i++){
            if (menu[i][0] === this.props.params.page){
                return i
            }
        }
    }

    render(){
        return(
            <div>
                <div className="navbar-fixed">
                    <nav>
                    <div className="nav-wrapper fucia">
                    <a href="/" className="m20left main_logo">HumKin</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                        <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                        <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                        <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                    </ul>
                    </div>
                </nav>
                </div>

            <Row className="m0 p0">
                <Col s={12} m={3} l={3} className="white full-height card-1 fixed-nav m0 p0" style={style}>
                <div className="collection">
                        {
                            menu.map( (listValue, index) => {
                                return <Link to={'/dashboard/'+listValue[0]}  className={this.getActiveClass(index) } >{listValue[1]}</Link>
                                
                            })
                        }

                </div>
                </Col>
                <Col s={12} m={3} l={3} />
                <Col s={12} m={9} l={9} className="m0 p0">

                    {
                        this.getView(this.props.params.page)
                    }                   
                
                </Col>
            </Row>
            </div>
        )
    }
}

export default Dashboard;