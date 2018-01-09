import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
require ('react-big-calendar/lib/css/react-big-calendar.css')


BigCalendar.momentLocalizer(moment);

class MyCalendar extends React.Component{

  handleSelect = (event) => {
    console.log(event);
  }

  render(){
    return(
      <div className='column riight' style={this.props.style}>
        <BigCalendar
          popup
          selectable
          events={this.props.myEventsList}
          startAccessor='startDate'
          endAccessor='endDate'
          onSelectEvent={this.handleSelect}
        />
      </div>
    )
  }
}

export default MyCalendar
