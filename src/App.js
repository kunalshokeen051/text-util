import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link

} from "react-router-dom"




function App() {
  const [mode, setMode] = useState("light");    //wheather darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

 
  return (
    <>
      <Router>
        <Navbar title="Text-utils" aboutText="About" />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Routes>
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze" />} />
          <Route exact path="/about" element={<About/>} />
          </Routes>
        </div>
        <div className="container my-3">
        </div>
      </Router>
    </>
  );
}

export default App;
