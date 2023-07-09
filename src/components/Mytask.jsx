import React from 'react'

const Mytask = ({ allEvents }) => {
    return (
        <div style={{ "padding": "0.6rem" }}>
            <h1>My Tasks are displayed here</h1>
            <h2>Task To DO</h2>
            <div className="allTasks" style={{
                "boxShadow": "0px 14px 60px 0px rgba(247, 112, 94, 0.4)"
            }}>
                <ul style={{ "width": "50vw", "overflow": "auto" }}>
                    {allEvents.map((event, index) =>
                        <li key={index} style={{ "border": "2px solid red", "background": "pink", "margin": "1rem", "padding": "0.6rem", "fontSize": "0.8rem" }} >
                            <p>{event.title}</p>
                            <p>{event.eventDate}</p>
                        </li>
                    )}
                </ul>

            </div>
            <h2 style={{ "marginTop": "3rem" }}>Task done</h2>
            <div className="allTasks" style={{ "boxShadow": "0px 13px 60px 0px rgba(187, 243, 144, 0.6)" }}>
                <ul style={{ "width": "50vw", "overflow": "auto" }}>
                    {allEvents.map((event, index) =>
                        <li key={index} style={{ "border": "2px solid red", "background": "pink", "margin": "1rem", "padding": "0.6rem", "fontSize": "0.8rem" }} >
                            <p>{event.title}</p>
                            <p>{event.eventDate}</p>
                        </li>
                    )}
                </ul>

            </div>
        </div>
    )
}

export default Mytask
