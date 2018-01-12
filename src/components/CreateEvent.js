import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createEvent } from '../actions/eventActions';
import Geosuggest from 'react-geosuggest';
import 'react-datepicker/dist/react-datepicker.css';

class CreateEvent extends React.Component{

  state = {
    title: '',
    startDate: moment(),
    endDate: moment(),
    details: '',
    location: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.close()
    this.props.createEvent(this.state, this.props.group.id)

  }

  handleChangeStart = (date) => {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd = (date) => {
    this.setState({
      endDate: date
    });
  }

  setLocation = (suggest) => {
    this.setState({
      location: suggest
    });
  }

  render(){
    console.log(this.state);

    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Form.Field control={Input} label='Event Title' onChange={this.handleChange} id='title'/>
          <label>Location</label>
          <Geosuggest highlightMatch onSuggestSelect={this.setLocation}/>
          <label>Details</label>
          <Form.TextArea onChange={this.handleChange} id='details'/>
          <label>Start Date & Time</label>
          <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
            isClearable={true}
            showTimeSelect
            timeIntervals={15}
            dateFormat="LLL"
            id='start'
          />
          <label>End Date & Time</label>
          <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
            isClearable={true}
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
