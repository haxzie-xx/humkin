import React, {Component} from 'react';
import {Row, Col} from 'react-materialize'

class Dashboard extends Component{
    render(){
        return(
            <div>
                <div className="navbar-fixed">
                    <nav>
                    <div className="nav-wrapper fucia">
                    <a href="#/dashboard" className="m20left main_logo">HumKin</a>
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
                <Col s={12} m={3} l={3} className="m0 p0 white full-height card-1 fixed"></Col>
                <Col s={12} m={9} l={9} className="m0 p0"></Col>
            </Row>
            </div>
        )
    }
}

export default Dashboard;