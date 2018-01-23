import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import Event from "./Event";
import Filter from "./Filter";
require("react-big-calendar/lib/css/react-big-calendar.css");

BigCalendar.momentLocalizer(moment);

class MyCalendar extends React.Component {
  state = {
    selectedEvent: "",
    allChecked: true,
    isOpen: false,
    adding: false,
    selections: [],
    categories: [
      { id: 1, name: "Art Exhibit" },
      { id: 2, name: "Music" },
      { id: 3, name: "Theatre" },
      { id: 4, name: "Performance" },
      { id: 5, name: "Readings" },
      { id: 6, name: "Book Signing" },
      { id: 7, name: "Children's Program" }
    ]
  };

  handleSelect = event => {
    this.setState({
      selectedEvent: event,
      isOpen: !this.state.isOpen
    });
  };

  handleClose = () => {
    this.setState({
      selectedEvent: "",
      isOpen: !this.state.isOpen
    });
  };

  handleFilter = newState => {
    this.setState({
      allChecked: false,
      selections: this.props.myEventsList.filter(
        event => newState[event.category_id]
      )
    });
  };

  render() {
    const eventList = this.state.allChecked
      ? this.props.myEventsList
      : this.state.selections;

    return (
      <div className="column riight" style={this.props.style}>
        {this.state.selectedEvent ? (
          <Event
            open={this.state.isOpen}
            event={this.state.selectedEvent}
            close={this.handleClose}
          />
        ) : null}
        <BigCalendar
          popup
          selectable
          events={eventList}
          startAccessor="startDate"
          endAccessor="endDate"
          onSelectEvent={this.handleSelect}
        />
        <Filter
          categories={this.state.categories}
          checkbox={this.handleFilter}
        />
        <div className="footer" />
      </div>
    );
  }
}

export default MyCalendar;
