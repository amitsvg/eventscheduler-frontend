import React from 'react'

const Mytask = ({ allEvents }) => {
    return (
        <div>
            <h1>My Tasks are displayed here</h1>
            {/* <button onClick={getMyTasks}>
                Get work
            </button> */}
            <div className="allTasks">
                <ul>
                    {allEvents.map((event, index) =>
                        <li key={index}>
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
