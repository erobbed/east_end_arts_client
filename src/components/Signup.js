import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react'

const Signup = (props) => {

  return(
    <Form>
      <Form.Field required>
        <label>Username</label>
        <Input placeholder='Username' />
      </Form.Field>
      <Form.Field required>
        <label>Email</label>
        <Input placeholder='example@example.com' />
      </Form.Field>
      <Form.Field required>
        <label>Password</label>
        <Input placeholder='password' />
      </Form.Field>
      <Form.Field required>
        <label>Confirm Password</label>
        <Input placeholder='confirm password' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default Signup
