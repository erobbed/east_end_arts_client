import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/authActions';

class Login extends React.Component{

  state = {}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.login(this.state)
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <Input placeholder='username' onChange={this.handleChange} id='username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input type='password' placeholder='password' onChange={this.handleChange} id='password' />
        </Form.Field>
        <Button type='submit'>Log In</Button>
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({login}, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
