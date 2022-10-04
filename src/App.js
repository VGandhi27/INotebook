import "./App.css";
import Navbar from "./components.js/Navbar";
import About from "./components.js/About";
import Home from "./components.js/Home";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components.js/Alert";
import Login from "./components.js/Login";
import Signup from "./components.js/Signup";
import {useState} from 'react'
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /></>}>
            <Route index element={<><Alert alert={alert}/><Home showAlert={showAlert} /></>} />
            <Route path="about" element={<About />} />
            <Route path="home" element={<Home  showAlert={showAlert}/>} />
            <Route path="login" element={<><Alert alert={alert}/><Login  showAlert={showAlert} /></>} />
            <Route path="signup" element={<><Alert alert={alert}/><Signup  showAlert={showAlert} /></>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </NoteState>

    </>
  );
}

export default App;
