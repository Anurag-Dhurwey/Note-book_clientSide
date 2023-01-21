import "./App.css";
import { Routes, Route } from "react-router-dom";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NoteState from "./Context/notes/NoteState";
import Home from "./Components/Home";
import Notes from "./Components/Notes";
import Alert from "./Components/Alert";
function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <div className="mt-0 mb-2" style={{ height: "15px"}}>
        <Alert />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </NoteState>
    </>
  );
}

export default App;
