import React, { useEffect } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import "./Calendar.css";
//Reference
// https://medium.com/@martin.crabtree/javascript-tracking-key-value-pairs-using-hashmaps-7de6df598257

function Calendar({ allEvents }) {
  const complete = [];
  const incomplete = [];

  allEvents.forEach(event => {
    if (event.completed) {
      complete.push(event);
    }
    else {
      incomplete.push(event);
    }
  });

  // let fh = new Map([
  //   [1, "first"],
  //   [2, "second"],
  //   [5, "fifth"]
  // ]);

  let sh = new Map();
  // const divide = async () => {

  incomplete.forEach(event => {
    let dtstring = event.eventDate;
    let dt = dtstring.slice(0, 10);
    if (sh.has(dt)) {
      let x = sh.get(dt);
      sh.set(dt, x + 1);
    }
    else {
      sh.set(dt, 1);
    }
    // console.log(dt);
  });
  console.log(" ", sh);

  // }

  // useEffect(() => {
  // divide();
  // console.log(" ", fh.get(12));
  // }, [divide])

  const arr = [];
  sh.forEach((values, keys) => {
    // console.log(values, keys)
    arr.push({ "title": values, "date": keys })
  })

  return (
    <div className="calender-view" style={{ "marginTop": "1%", "border": "2px solid black", "padding": "0.6rem", "width": "50%" }}>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        // headerToolbar={{
        //   start: "today prev,next", // will normally be on the left. if RTL, will be on the right
        //   center: "title",
        //   end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        // }}
        height={"90vh"}
        events={arr

          //   [
          //   { title: 'ev5', date: '2023-07-09' },
          //   { title: 'event 1', date: '2023-07-12' },
          //   { title: 'event 2', date: '2023-07-11' }
          // ]
        }
      />
    </div>
  );
}

export default Calendar;
