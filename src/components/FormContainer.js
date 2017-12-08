import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { Button, Icon } from 'semantic-ui-react'

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

    let loginButton = (
      <Button animated='fade' color='green' onClick={this.handleClick}>
        <Button.Content visible>Log In</Button.Content>
        <Button.Content hidden>
          <Icon name='user' />
        </Button.Content>
      </Button>
    )

    let signupButton =  (
      <div>
        <p>Not a user? Sign up!</p>
        <Button animated='fade' color='blue' onClick={this.handleClick}>
          <Button.Content visible>Sign Up</Button.Content>
          <Button.Content hidden>
            <Icon name='user' />
          </Button.Content>
        </Button>
      </div>
    )

    return(
      <div>
        { this.state.alreadyUser ? <Login/> : <Signup/> }
        <center>
          { this.state.alreadyUser ? signupButton : loginButton }
        </center>
      </div>
    )
  }
}

export default FormContainer
