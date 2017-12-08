import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react'

class Login extends React.Component{

  state = {}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render(){
    console.log(this.state);
    return(
      <Form>
        <Form.Field>
          <label>Username</label>
          <Input placeholder='username' onChange={this.handleChange} id='username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input type='password' placeholder='password' onChange={this.handleChange} id='password' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default Login
