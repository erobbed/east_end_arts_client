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
      <div onClick={this.handleClick}>
        <Button animated='fade' color='green'>
          <Button.Content visible>Log In</Button.Content>
          <Button.Content hidden>
            <Icon name='user' />
          </Button.Content>
        </Button>
      </div>
    )

    let signupButton =  (
      <div onClick={this.handleClick}>
        <p>Not a user? Sign up!</p>
        <Button animated='fade' color='blue'>
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
