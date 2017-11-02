import React, {Component} from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'

class Dashboard extends Component{
    render(){
        return(
            <Navbar className="fucia" brand='&nbsp;HumKin' right>
                <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
            </Navbar>
        )
    }
}

export default Dashboard;