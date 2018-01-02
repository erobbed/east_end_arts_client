import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createGroup } from '../actions/groupActions';

class GroupForm extends React.Component{

  state = {
    group: ''
  }

  handleChange = (e) => {
    this.setState({
      group: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.createGroup(this.state.group, localStorage.getItem('id'));
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input label='Group Name' onChange={this.handleChange}/>
        <Button>Submit</Button>
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createGroup}, dispatch)
}

export default connect(null, mapDispatchToProps)(GroupForm)
