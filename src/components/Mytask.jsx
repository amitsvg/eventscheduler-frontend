import React from 'react'
// import React, { useState } from 'react'

const Mytask = ({ allEvents, handleUpdate}) => {
    
    const complete = [];
    const incomplete = [];

    allEvents.forEach(event => {
        if(event.completed){
            complete.push(event);
        }
        else{
            incomplete.push(event);
        }
    });

    // console.log(allEvents);

    return (
        <div style={{ "padding": "0.6rem" }}>
            <h1>My Tasks are displayed here</h1>
            <h2>Task To DO</h2>
            <div className="allTasks" style={{
                "boxShadow": "0px 14px 60px 0px rgba(247, 112, 94, 0.4)"
            }}>
                <ul style={{ "width": "50vw", "overflow": "auto" }}>
                    {incomplete.map((event, index) =>
                        <li key={index} style={{ "border": "2px solid red", "background": "pink", "margin": "1rem", "padding": "0.6rem", "fontSize": "0.8rem", "width":"100px" }} >
                            <p style={{"marginBottom":"0px"}}>{event.title}</p>
                            {/* <p>{event.eventDate}</p> */}
                            <p style={{"color":"transparent","margin":"0px"}}>{event.eventDate}</p>
                            <p >{event.eventDate.slice(0,10)}</p>
                            {/* <p>{event._id}</p> */}
                            <button onClick={() => {handleUpdate(event._id);}} >Done</button>
                        </li>
                    )}
                </ul>

            </div>
            <h2 style={{ "marginTop": "3rem" }}>Task done</h2>
            <div className="allTasks" style={{ "boxShadow": "0px 13px 60px 0px rgba(187, 243, 144, 0.6)" }}>
                <ul style={{ "width": "50vw", "overflow": "auto" }}>
                    {complete.map((event, index) =>
                        <li key={index} style={{ "border": "2px solid green", "background": "rgba(154, 243, 0, 0.6)", "margin": "1rem", "padding": "0.6rem", "fontSize": "0.8rem" }} >
                            <p style={{"marginBottom":"0px"}}>{event.title}</p>
                            <p style={{"color":"transparent","margin":"0px"}}>{event.eventDate}</p>
                            <p >{event.eventDate.slice(0,10)}</p>
                        </li>
                    )}
                </ul>

            </div>
        </div>
    )
}

export default Mytask
