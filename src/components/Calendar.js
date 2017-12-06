import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
require ('react-big-calendar/lib/css/react-big-calendar.css')


BigCalendar.momentLocalizer(moment);

const MyCalendar = (props) => (
  <div>
    <BigCalendar
      events={props.myEventsList}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);

export default MyCalendar
