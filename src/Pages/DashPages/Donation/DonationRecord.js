import React, {Component} from 'react'
import {Table} from 'react-materialize'
import DRecordItem from './DRecordItem'

class DonationRecord extends Component{

    onChildClicked = (recordId) => {
        console.log('Clicked from record List');
        this.props.onClickEdit(recordId);
    }

    render(){
        return(
            <div className="basic_card pad20 card-2 m20top">
                <Table className="highlight">
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
                <DRecordItem onClickEdit={this.onChildClicked} name="Musthaq Ahamad" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Lalith Sagar" date="15/09/2017" blood_type="B+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Nithin Thomas" date="15/09/2017" blood_type="A-" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Maneesh VS" date="15/09/2017" blood_type="A+" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Nithin Thomas" date="15/09/2017" blood_type="A-" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Nithin Thomas" date="15/09/2017" blood_type="A-" qty="250" fridge="F1" nurse="Prakash"/>
                <DRecordItem onClickEdit={this.onChildClicked} name="Nithin Thomas" date="15/09/2017" blood_type="A-" qty="250" fridge="F1" nurse="Prakash"/>

                </tbody>
                </Table>
            
            </div>
        )
    }
}

export default DonationRecord