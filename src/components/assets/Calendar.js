import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import Event from "../events/Event";

require("react-big-calendar/lib/css/react-big-calendar.css");

BigCalendar.momentLocalizer(moment);

class MyCalendar extends React.Component {
  state = {
    selectedEvent: "",
    allChecked: true,
    isOpen: false,
    adding: false
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

  render() {
    return (
      <div>
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
          events={this.props.myEventsList}
          startAccessor="startDate"
          endAccessor="endDate"
          onSelectEvent={this.handleSelect}
          views={["month", "week", "agenda"]}
          min={moment("8:00am", "h:mma").toDate()}
        />
      </div>
    );
  }
}

export default MyCalendar;
