import React, { useState } from "react";
import closed from "./images/closed.png";
import { AiOutlineClose } from "react-icons/ai";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Footer } from "./components";
import { Home, About, Gallery, Reservation, Service } from "./pages";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <Router>
        <div className="closed">
          {showPopup && (
            <div className="popup">
              <AiOutlineClose className="close-icon" onClick={handlePopup} />
              <img src={closed} alt="temporary closed" />
            </div>
          )}
        </div>
        <Nav />
        <Home />
        <About />
        <Gallery />
        <Service />
        <Reservation />
      </Router>
      <br />
      <Footer />
    </>
  );
}

export default App;
