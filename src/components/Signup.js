import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from '../actions/authActions'

class Signup extends React.Component{

  state = {}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.signup(this.state)
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field required>
          <label>Username</label>
          <Input placeholder='username' onChange={this.handleChange} id='username'/>
        </Form.Field>
        <Form.Field required>
          <label>Email</label>
          <Input placeholder='example@example.com'  onChange={this.handleChange} id='email'/>
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <Input placeholder='password' onChange={this.handleChange} id='password' type='password'/>
        </Form.Field>
        <Form.Field required>
          <label>Confirm Password</label>
          <Input placeholder='confirm password' onChange={this.handleChange} id='password confirmation' type='password' />
        </Form.Field>
        <Button type='submit'>Sign Up</Button>
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({signup}, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup)
