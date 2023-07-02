import { useState } from "react";

const AddEvents = () => {

    const [dateValue, setDateValue] = useState();
    const [titleValue, setTitleValue] = useState();
    function handleDate(e) {
        const dateValue = e.target.value;
        console.log("dateValue", dateValue);
        setDateValue(dateValue);
    }
    function handleTitle(e) {
        const titleValue = e.target.value;
        console.log("dateValue", titleValue);
        setTitleValue(titleValue);
    }
    function handleSubmit() {
        console.log()

    }

    // const onSubmit = async (dateValue, titleValue) => {
    const onSubmit = (dateValue, titleValue) => {
        console.log(dateValue);
        console.log(titleValue);
    }

    return (
        <div>
            <h1>Add your Tasks</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="title" className="form-label">Event Title</label>
                    <input type="text" placeholder="title" className="form-control" id="title" aria-describedby="title"
                        value={titleValue} onChange={(e) => handleTitle(e)} />
                </div>

                <div className="mb-4" style={{ zIndex: "100" }}>
                    <label htmlFor="start" className="form-label">Start Date</label>
                    <input type="date" name="date" id="date" value={dateValue} onChange={(e) => handleDate(e)} />
                </div>


                <input type="submit" />
            </form>
        </div>
    )
}

export default AddEvents
