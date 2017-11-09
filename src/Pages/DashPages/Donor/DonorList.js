import React, {Component} from 'react';
import {Table} from 'react-materialize';
import DonorListItem from './DonorListItem';

class DonorList extends Component{


    editCallBack = (adhaar) => {
        this.props.editCallBack(adhaar);
    }

    render(){
        return(
            <div>
            <Table className="highlight">
                <thead>
                    <tr>
                        <th data-field="adhaar">Adhaar</th>
                        <th data-field="name">Name</th>
                        <th data-field="age">Age</th>
                        <th data-field="blood">Blood</th>
                        <th data-field="gender">Gender</th>
                        <th data-field="location">Location</th>
                        <th data-field="phone">Phone</th>
                        <th data-field="Email">Email</th>
                    </tr>
            </thead>
            <tbody>
                <DonorListItem
                    editCallBack={ this.editCallBack }
                    adhaar="22772772" 
                    name="Musthaq Ahamd"
                    age="20" 
                    blood="A+" 
                    gender="M"
                    location="Kasaragod"
                    phone="9539518599"
                    email="musthu.gm@gmail.com" />
                <DonorListItem 
                    adhaar="22772772" 
                    name="Musthaq Ahamd" 
                    age="20" 
                    blood="A+" 
                    gender="M"
                    location="Kasaragod"
                    phone="9539518599"
                    email="musthu.gm@gmail.com" />
                <DonorListItem 
                    adhaar="22772772" 
                    name="Musthaq Ahamd"
                    age="20"  
                    blood="A+" 
                    gender="M"
                    location="Kasaragod"
                    phone="9539518599"
                    email="musthu.gm@gmail.com" />
                <DonorListItem 
                    adhaar="22772772" 
                    name="Musthaq Ahamd" 
                    age="20" 
                    blood="A+" 
                    gender="M"
                    location="Kasaragod"
                    phone="9539518599"
                    email="musthu.gm@gmail.com" />
                <DonorListItem 
                    adhaar="22772772" 
                    name="Musthaq Ahamd" 
                    age="20" 
                    blood="A+" 
                    gender="M"
                    location="Kasaragod"
                    phone="9539518599"
                    email="musthu.gm@gmail.com" />
            </tbody>
            </Table>
            </div>
        );
    }
}

export default DonorList;