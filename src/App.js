import "./App.css";
import Navbar from "./components.js/Navbar";
import About from "./components.js/About";
import Home from "./components.js/Home";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </NoteState>

    </>
  );
}

export default App;
