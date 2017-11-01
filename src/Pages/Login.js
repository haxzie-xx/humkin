import React, {Component} from 'react';

const  style = {
  margin: "30px auto 0px auto"
}


class Login extends Component{

  handleClick(event){ 
    // this.setState((prevState, props) => {
    //   return {showLogin: !this.state.showLogin}
    // });
  }

 

    render(){
       return( 
        <div className="sexy_bg">
        <div className="row valign-wrapper">
            <div className="my_card card-3 white">
                <p className="card_title">Sign In</p>
                <hr className="small_line" />
                <div className="row">
                    <div className="input-field">
                        <input id="email" type="email" className="validate"/>
                        <label for="email">Email</label>
                    </div>
                    <div className="input-field" >
                        <input id="password" type="password" className="validate"/>
                        <label for="password">Password</label>
                    </div>
                    <div className="m20top col s6 m6">
                            <a href="/"><span className="red-text text-accent-2  m10top">Forgot passowrd?</span></a>
                    </div>
                    <div className="m20top col s6 m6 right-align pad0">
                            <button className="btn waves-effect waves-light red accent-2" type="submit" name="action">SignIn</button>
                    </div>

                    <div className="col s12 pad20 center valign-wrapper">
                        <a href="#/signup" className="grey-text" style={style}>
                           Create a new account
                        </a>
                    </div>   
                </div>
            </div>
        </div>
    </div>      
      )
    }
}

export default Login;