import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Calendar from "./components/Calendar";
import AddEvents from "./components/AddEvents";
// import FormDate from "./components/FormDate";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "./context/LoginContext";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Homepage from "./Homepage";

function App() {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <LoginContext.Provider value={{ setUserLogin }}>
          <Navbar login={userLogin}/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/addevent" element={<AddEvents />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Login />} />
            {/* <Route path="/ff" element={<FormDate />} /> */}
          </Routes>
          {/* <Calendar /> */}
        </LoginContext.Provider>
      </BrowserRouter>
      <ToastContainer theme='dark' />

    </div>
  );
}

export default App;
