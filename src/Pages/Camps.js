import React, {Component} from 'react';
import {Row} from 'react-materialize';
import CampCard from '../components/CampCard'

class Camps extends Component{
    render(){
        return(
            <div className="container">
            <Row>
                <p className="card_title ">Upcoming Camps</p>
            </Row>
            <Row> 
                <CampCard campName="Test Name Goes here"
                            campCaption="Lorem ipsum dolor sit amet concepticus la italicana fil biladil america, va shamsu val qamaru hal fee haza wow"
                            campLocation="Karavali stadium, Mangalore "
                            campDate="25/07/2017 9:30pm "/>
                <CampCard campName="Test Name Goes here"
                            campCaption="Lorem ipsum dolor sit amet concepticus la italicana fil biladil america, va shamsu val qamaru hal fee haza wow"
                            campLocation="Karavali stadium, Mangalore "
                            campDate="25/07/2017 9:30pm "/>
                <CampCard campName="Test Name Goes here"
                            campCaption="Lorem ipsum dolor sit amet concepticus la italicana fil biladil america, va shamsu val qamaru hal fee haza wow"
                            campLocation="Karavali stadium, Mangalore "
                            campDate="25/07/2017 9:30pm "/>
                <CampCard campName="Test Name Goes here"
                            campCaption="Lorem ipsum dolor sit amet concepticus la italicana fil biladil america, va shamsu val qamaru hal fee haza wow"
                            campLocation="Karavali stadium, Mangalore "
                            campDate="25/07/2017 9:30pm "/>
                <CampCard campName="Test Name Goes here"
                            campCaption="Lorem ipsum dolor sit amet concepticus la italicana fil biladil america, va shamsu val qamaru hal fee haza wow"
                            campLocation="Karavali stadium, Mangalore "
                            campDate="25/07/2017 9:30pm "/>
                <CampCard campName="Test Name Goes here"
                            campCaption="Lorem ipsum dolor sit amet concepticus la italicana fil biladil america, va shamsu val qamaru hal fee haza wow"
                            campLocation="Karavali stadium, Mangalore "
                            campDate="25/07/2017 9:30pm "/>
                <CampCard campName="Test Name Goes here"
                            campCaption="Lorem ipsum dolor sit amet concepticus la italicana fil biladil america, va shamsu val qamaru hal fee haza wow"
                            campLocation="Karavali stadium, Mangalore "
                            campDate="25/07/2017 9:30pm "/>
            </Row>
            </div>
        )
    }
}

export default Camps;