import { useState } from "react";
import { toast } from "react-toastify";

const AddEvents = () => {
    // Toast Functions
    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);

    const [dateValue, setDateValue] = useState();
    const [titleValue, setTitleValue] = useState();
    function handleDate(e) {
        const dateValue = e.target.value;
        // console.log("dateValue", dateValue);
        setDateValue(dateValue);
    }
    function handleTitle(e) {
        const titleValue = e.target.value;
        // console.log("titleValue", titleValue);
        setTitleValue(titleValue);
    }


    const postData = () => {
        // fetch("http://localhost:8080/createEvent", {
        fetch("https://eventscheduler-backend.onrender.com/createEvent", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jtoken")
            },
            body: JSON.stringify({
                title: titleValue,
                eventDate: dateValue
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    notifyA(data.error);
                } else {
                    notifyB(data.message);
                }
                // console.log((data))
            })

            setDateValue("");
            setTitleValue("");
    }

    return (
        <div style={{"marginTop":"10%"}}>
            <h1>Add your Tasks</h1>
            <div >
                <div className="mb-4">
                    <label htmlFor="title" className="form-label">Event Title</label>
                    <input type="text" placeholder="title" className="form-control" id="title" aria-describedby="title"
                        value={titleValue} onChange={(e) => handleTitle(e)} />
                </div>

                <div className="mb-4" style={{ zIndex: "100" }}>
                    <label htmlFor="start" className="form-label">Start Date</label>
                    <input type="date" name="date" id="date" value={dateValue} onChange={(e) => handleDate(e)} />
                    {/* <input type="datetime" name="datetime" id="datetime" value={dateValue} onChange={(e) => handleDate(e)} /> */}
                </div>

                <button type="submit" onClick={() => { postData() }}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default AddEvents
