import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react'

const Login = (props) => {

  return(
    <Form>
      <Form.Field>
        <label>Username</label>
        <Input placeholder='Username' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Input placeholder='Password' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default Login
