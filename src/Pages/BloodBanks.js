import React, {Component} from 'react';
import { Row, Input, Icon} from 'react-materialize'
import BBSearchItem from '../components/BBSearchItem'

class BloodBank extends Component{
    render(){
        return(
            <div className="container m20bottom">
            <Row>
                <p className="card_title m0b">Blood Banks</p>
            </Row>
            <div className="row">
                <div className="grad_top_card card-2">
                    <div className="basic_card pad20">
                    <Row className="valign-wrapper">
                        <Input s={4} validate label='Search BloodBank'><Icon>search</Icon></Input>
                        <Input s={4} type='select' label="Sort By Location" defaultValue='1'>
                            <option value='1'>All</option>
                            <option value='2'>Mangalore</option>
                            <option value='3'>Bangalore</option>
                        </Input>
                        <Input s={4} type='select' label="Blood Availability" defaultValue='1'>
                            <option value='1'>All</option>
                            <option value='2'>A+</option>
                            <option value='3'>B+</option>
                        </Input>
                    </Row>
                    </div>
                    
                </div>
                <div className="basic_card pad20 card-2 m20top">
                <BBSearchItem name="BloodBank Name" location="Karavali stadium, Mangalore " />
                <BBSearchItem name="BloodBank Name" location="Karavali stadium, Mangalore " />
                <BBSearchItem name="BloodBank Name" location="Karavali stadium, Mangalore " />
                <BBSearchItem name="BloodBank Name" location="Karavali stadium, Mangalore " />
                </div>
                
            </div>
        </div>
        )
    }
}

export default BloodBank;