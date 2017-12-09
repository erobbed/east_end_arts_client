import React from 'react';
import Login from './Login';
import Signup from './Signup';
import SignupButton from './assets/SignupButton'
import LoginButton from './assets/LoginButton'

class FormContainer extends React.Component {

  state = {
    alreadyUser: true
  }

  handleClick = (event) => {
    this.setState({
      alreadyUser: !this.state.alreadyUser
    })
  }

  render(){
    return(
      <div>
        { this.state.alreadyUser ? <Login/> : <Signup/> }
        <center>
          { this.state.alreadyUser ? <SignupButton handleClick={this.handleClick}/> : <LoginButton handleClick={this.handleClick}/> }
        </center>
      </div>
    )
  }
}

export default FormContainer
