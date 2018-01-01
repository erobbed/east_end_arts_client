import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class GroupForm extends React.Component{

  handleSubmit = () => {
    console.log('click');
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input label='Group Name' />

        <Button>Submit</Button>
      </Form>
    )
  }
}
