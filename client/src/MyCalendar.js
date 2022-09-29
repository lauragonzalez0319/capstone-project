import { React , useEffect, useState } from 'react';
import './MyCalendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

function MyCalendar({ myEvents, currentUser }) {
  const localizer = momentLocalizer(moment)

  if (currentUser !== null) {
    Date.prototype.addDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }

    const periods = myEvents.filter((event) => {
      return event['title'] === "Period"
    })

    const lastPeriod = periods[periods.length-1]
    const lastPeriodEnd = new Date(lastPeriod["end"]);
    const lastPeriodStart = new Date(lastPeriod["start"]);

    const estimatedPeriod = {
      "id": myEvents.length,
      "title": "Estimated Period",
      "start": lastPeriodStart.addDays(parseInt(currentUser["average_cycle_length"])),
      "end": lastPeriodEnd.addDays(parseInt(currentUser["average_cycle_length"])),
      "allDay": true,
    }

      console.log(myEvents.push(estimatedPeriod))
  }
  
  useEffect(() => {
    console.log(myEvents)
  }, [myEvents])

  // useEffect(() => {
  //   console.log(lastPeriodEnd.getDate());
  // }, [myEvents])

  return (
    <div id="calendar-container">
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )
}

export default MyCalendar