import React, { useEffect, useState } from 'react'
import Calendar from "./components/Calendar";
import Mytask from './components/Mytask';

const Homepage = () => {
    const [allEvents, setAllEvents] = useState([]);
    // const getMyTasks = () => {
    useEffect(() => {

        // fetch('http://localhost:8080/myevents', {
        fetch('https://eventscheduler-backend.onrender.com/myevents', {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jtoken")
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllEvents(data);
            })
    },[]);
    // }


    return (
        <div className='homepage' style={{ "display": "flex", "marginTop": "7%", "border": "2px solid red" }}>
            <Calendar />
            <Mytask allEvents={allEvents} />

        </div>
    )
}

export default Homepage
