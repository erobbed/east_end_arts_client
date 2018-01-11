import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createEvent } from '../actions/eventActions';
import 'react-datepicker/dist/react-datepicker.css';

class CreateEvent extends React.Component{

  state = {
    title: '',
    date: moment()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.close()

  }

  handleDateChange = (date) => {
    this.setState({
      date: date
    });
  }

  render(){
    console.log(this.state);
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Event Title</label>
          <Input onChange={this.handleChange} id='title'/>
          <label>Date and Time</label>
          <DatePicker
            selected={this.state.date}
            onChange={this.handleDateChange}
            showTimeSelect
            timeIntervals={15}
            dateFormat="LLL"
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createEvent}, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateEvent)
