import React, {Component} from 'react'
import {Table} from 'react-materialize'
import DRecordItem from '../../components/DRecordItem'

class DonationRecord extends Component{

    render(){
        return(
            <div className="basic_card pad20 card-2 m20top">
                <Table className="striped">
                    <thead>
                        <tr>
                            <th data-field="name">Name</th>
                            <th data-field="date">Date</th>
                            <th data-field="bloodtype">Blood</th>
                            <th data-field="quantity">Qty</th>
                            <th data-field="fridge">Fridge</th>
                            <th data-field="nurse">Nurse</th>
                        </tr>
                </thead>
                <tbody>
                <DRecordItem name="Musthaq Ahamad" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Lalith Sagar" date="15/09/2017" blood_type="B+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Nithin Thomas" date="15/09/2017" blood_type="A-" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Nithin Thomas" date="15/09/2017" blood_type="A-" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Nithin Thomas" date="15/09/2017" blood_type="A-" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem name="Nithin Thomas" date="15/09/2017" blood_type="A-" qty="250" fridge="F1" nurse="Prakash"/>

                </tbody>
                </Table>
            
            </div>
        )
    }
}

export default DonationRecord