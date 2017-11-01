import React, {Component} from 'react'
import {Button} from 'react-materialize'

class DonationForm extends Component{
    render(){
        return(
            <div>
                <div className="row pad20">
                <div className="input-field col s12 m6 l6">
                    <input id="fname" type="text" className="validate"/>
                    <label for="fname">First name</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input id="lname" type="text" className="validate"/>
                    <label for="lname">Last name</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input id="phone" type="tel" className="validate"/>
                    <label for="phone">Phone Number</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input id="email" type="email" className="validate"/>
                    <label for="email">Email id</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input id="dob" type="text" class="datepicker"/>
                    <label for="dob">Birth Date</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input id="last_donation" type="text" class="datepicker"/>
                    <label for="last_donation">Last Donation</label>
                </div>
                <div className="input-field col s12 m6 l6">
                        <select>
                            <option value="" disabled selected>Blood Type</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Blood Type</label>
                </div>
                <div className="input-field col s12 m6 l6">
                        <select>
                            <option value="" disabled selected>Choose Location</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>City</label>
                </div>
                
                <div className="input-field col s12 m6 l6">
                    <input id="address1" type="text" className="validate"/>
                    <label for="address1">Address Line 1</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input id="address2" type="text" className="validate"/>
                    <label for="address2">Address Line 2</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input id="pincode" type="tel" className="validate"/>
                    <label for="pincode">PinCode</label>
                </div>
                
            </div>
            <div className="row m0 pad10 center">
                 <Button className="m10 waves-effect waves-light red accent-2">Register</Button>
            </div>
        </div>
        )
    }
}

export default DonationForm;