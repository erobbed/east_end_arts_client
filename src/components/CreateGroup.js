import React from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createGroup } from '../actions/groupActions';

class GroupForm extends React.Component{

  state = {
    group: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.createGroup(this.state.group, localStorage.getItem('id'))
    this.props.close()
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Group Name</label>
          <Input onChange={this.handleChange} id='group'/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createGroup}, dispatch)
}

export default connect(null, mapDispatchToProps)(GroupForm)
