import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar";
import AddEvents from "./components/AddEvents";
// import FormDate from "./components/FormDate";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calendar/>} />
          <Route path="/addevent" element={<AddEvents/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Login/>} />
          {/* <Route path="/ff" element={<FormDate />} /> */}
        </Routes>
        {/* <Calendar /> */}
      </BrowserRouter>
      <ToastContainer theme='dark' />

    </div>
  );
}

export default App;
