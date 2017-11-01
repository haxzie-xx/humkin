import React, {Component} from 'react';

class SignupForm extends Component{

    render(){
        return(
            <div className="container">
            <div className="row">
                <p className="card_title">Manager Details</p>
                <hr className="_small_line" />
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
                    <input id="password" type="password" className="validate"/>
                    <label for="password">Password</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input id="repassword" type="password" className="validate"/>
                    <label for="repassword">Confirm Password</label>
                </div>
            </div>
            <div className="row">
                <p className="card_title">Blood Bank Details</p>
                <hr className="_small_line" />
                <div className="input-field col s12 m6 l6">
                    <input id="bname" type="text" className="validate"/>
                    <label for="bname">Blood Bank Name</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input id="bemail" type="email" className="validate"/>
                    <label for="bemail">email</label>
                </div>
                <div className="input-field col s12 m6 l6">
                    <input id="bphone" type="tel" className="validate"/>
                    <label for="bphone">Phone Number</label>
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
        </div>
        )
    }
}
export default SignupForm;