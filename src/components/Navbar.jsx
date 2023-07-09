import React from 'react'
// import React, { useEffect } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'


import { LoginContext } from '../context/LoginContext';
import { useContext } from 'react'


export default function Navbar({ login }) {
    const navigate = useNavigate();
    const { setUserLogin } = useContext(LoginContext)

    const loginStatus = () => {
        const token = localStorage.getItem("jtoken");
        if (token || login) {
            return true;
        }
        else {
            return false;
        }
    }

    // useEffect(()=>{
    //     loginStatus();
    // },[login]);


    return (
        <div className='navbar'>
            <div className="nav-img">
                <Link to="/" className='linkHome' >
                    <h1>Event Scheduler</h1>
                </Link>
            </div>
            <ul className='nav-menu'>
                {loginStatus() &&
                    <Link to="/addevent">
                        <li>
                            Add Events
                        </li>
                    </Link>
                }
                {!loginStatus() && <Link to="/signup"><li>SignUp</li></Link>}
                {!loginStatus() && <Link to="/signin"><li>SignIn</li></Link>}
                {loginStatus() &&
                    <button
                        className='primaryBtn'
                        onClick={() => {
                            localStorage.clear();
                            setUserLogin(false);
                            navigate("/signin")
                        }}
                    >
                        Log Out
                    </button>
                }
            </ul>

        </div>
    )
}