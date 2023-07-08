import "./st2.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Toast Functions
    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);

    // eslint-disable-next-line
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // const [values, setValues] = useState({
    //     email: "",
    //     password: ""
    // });

    // const handleInputChange = (event) => {
    //     event.preventDefault();

    //     const { name, value } = event.target;
    //     setValues((values) => ({
    //         ...values,
    //         [name]: value
    //     }));
    // };


    const postData = () => {

        //checking email
        if (!emailRegex.test(email)) {
            notifyA("Invalid Email");
            return
        }
        // Sending data to server
        // fetch("http://localhost:8080/signin", {
        fetch("https://eventscheduler-backend.onrender.com/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    notifyA(data.error);
                } else {
                    // notifyB(data.message);
                    notifyB("Signed in Successfully");
                    localStorage.setItem("jtoken", data.jtoken)
                    navigate("/");
                }
                // console.log(data)
            })
    }




    return (
        <div className="signup">
            <div className="form-container">
                <div className="register-form">

                    <input
                        className="form-field"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        // onChange={handleInputChange}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <input
                        className="form-field"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />

                    <button className="form-field" type="submit" onClick={() => { postData() }}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Signup;