import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./st2.css";
import { toast } from "react-toastify";



const Signup = () => {
    
    const navigate = useNavigate();

    
    // Toast Functions
    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);

    
    // const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const [values, setValues] = useState({
        firstName: "",
        email: "",
        password: "",
        cnfpassword: ""
    });

    const handleInputChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        setValues((values) => ({
            ...values,
            [name]: value
        }));
    };




    const postData = () => {

        //checking email
        // if (!emailRegex.test(values.email)) {
        //     notifyA("Invalid Email");
        //     return
        // }
        // Sending data to server
        fetch("http://localhost:8080/signup", {
        // fetch("https://eventscheduler-backend.onrender.com/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:values.firstName,
                email: values.email,
                password: values.password,
                // cnfpassword: values.cnfpassword
            })
        }).then(res => res.json())
        .then(data => {
            if (data.error) {
                notifyA(data.error);
            }else{
                notifyB(data.message);
                navigate("/signin"); 
            }
            console.log((data))
        })
    }

    return (
        <div className="signup">
            <div className="form-container">
                <div className="register-form">

                    <input
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleInputChange}
                    />
                    <input
                        className="form-field"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <input
                        className="form-field"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        />
                    {/* <input
                        className="form-field"
                        type="password"
                        placeholder="Confirm Password"
                        name="dnfpassword"
                        value={values.cnfpassword}
                        onChange={handleInputChange}
                    /> */}

                    <button className="form-field" type="submit" onClick={() => { postData() }}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Signup;