import React, { useEffect, useState } from 'react'
// import React, { useEffect, useState, useCallback } from 'react'
import Calendar from "./components/Calendar";
import Mytask from './components/Mytask';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const Homepage = () => {

    const navigate = useNavigate();
    const [allEvents, setAllEvents] = useState([]);
    // const [comp, setcomp] = useState([]);
    // const [incomp, setincomp] = useState([]);

    // Toast Functions
    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);




    // const updateTask = useCallback((id) => {
    const updateTask = (id) => {
        fetch('https://eventscheduler-backend.onrender.com/update', {
            // fetch('http://localhost:8080/update', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jtoken")
            },
            body: JSON.stringify({
                eventId: id
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    notifyA(data.error);
                } else {
                    notifyB(`"${data.title}" :)  COMPLETED`);
                }
                // console.log(data)
            })
    }
    // }, [])


    useEffect(() => {
        const token = localStorage.getItem("jtoken");
        if (!token) {
            navigate("/signin");
        }
        else {
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
                .catch(err => console.log(err))
        }
    }, [navigate, updateTask]);

    return (
        <div className='homepage' style={{ "display": "flex", "marginTop": "7%", "border": "2px solid red" }}>
            <Calendar allEvents={allEvents} />
            <Mytask allEvents={allEvents} handleUpdate={updateTask}/>

        </div>
    )
}

export default Homepage
