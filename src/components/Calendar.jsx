import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";
function Calendar() {
  fetch('https://eventscheduler-backend.onrender.com/myevents',{
    method: "get",
    headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGExNDEwMmE4MTE3NDIwY2Q1OTE0MTkiLCJpYXQiOjE2ODgyODk4MzN9.kJOkUmNFYAvFaJuwOvATLPSI6awVa83TnDvWNk5v9OA"
    },
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  return (
    <div className="calender-view">
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        events={[
          { title: 'event 1', date: '2023-07-02' },
          { title: 'event 1', date: '2023-07-02' },
          { title: 'event 2', date: '2023-07-04' }
        ]}
      />
    </div>
  );
}

export default Calendar;
