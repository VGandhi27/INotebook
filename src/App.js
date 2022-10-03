import "./App.css";
import Navbar from "./components.js/Navbar";
import About from "./components.js/About";
import Home from "./components.js/Home";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components.js/Alert";
import Login from "./components.js/Login";
import Signup from "./components.js/Signup";

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /></>}>
            <Route index element={<><Alert message="This is INoteBook made with love"/><Home /></>} />
            <Route path="about" element={<About />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </NoteState>

    </>
  );
}

export default App;
