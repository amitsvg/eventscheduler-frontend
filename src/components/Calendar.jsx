import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import "./Calendar.css";
function Calendar() {
  return (
    <div className="calender-view" style={{"marginTop":"1%","border":"2px solid black","padding":"1rem","width":"50%"}}>
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
