import React from "react";
import { Input, Button, Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createEvent } from "../actions/eventActions";
import Geosuggest from "react-geosuggest";
import "react-datepicker/dist/react-datepicker.css";

class CreateEvent extends React.Component {
  state = {
    title: "",
    startDate: moment(),
    endDate: moment(),
    details: "",
    location: "",
    category: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    let valid = true;
    for (var prop in this.state) {
      if (!this.state[prop]) {
        valid = false;
        alert(`${prop} cannot be blank`);
      }
    }

    if (valid) {
      this.props.close();
      this.props.createEvent(this.state, this.props.group.id).then(failure => {
        if (failure) {
          alert(failure);
        }
      });
    } else {
      e.preventDefault();
    }
  };

  handleChangeStart = date => {
    this.setState({
      startDate: date
    });
  };

  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };

  setLocation = suggest => {
    this.setState({
      location: suggest
    });
  };

  handleSelect = e => {
    this.setState({
      category: e.target.parentElement.id
    });
  };

  render() {
    let categories = this.props.categories.map((cat, index) => {
      return { key: index, text: cat, id: index + 1, value: cat };
    });
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Form.Field
            control={Input}
            label="Event Title"
            onChange={this.handleChange}
            id="title"
          />
          <label>Location</label>
          <Geosuggest highlightMatch onSuggestSelect={this.setLocation} />
          <label>Category</label>
          <Form.Dropdown
            placeholder="Select Category"
            options={categories}
            onChange={this.handleSelect}
            id="category"
            scrolling
          />
          <label>Details</label>
          <Form.TextArea onChange={this.handleChange} id="details" />
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
            minTime={moment()
              .hours(9)
              .minutes(0)}
            maxTime={moment()
              .hours(23)
              .minutes(59)}
            dateFormat="LLL"
            id="start"
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
            minTime={moment()
              .hours(9)
              .minutes(0)}
            maxTime={moment()
              .hours(23)
              .minutes(59)}
            dateFormat="LLL"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createEvent }, dispatch);
}

function mapStateToProps(state) {
  return { categories: state.events.categories };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
