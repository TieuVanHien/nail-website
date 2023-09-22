import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Footer } from "./components";
import { Home, About, Gallery, Reservation } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Home />
        <About />
        <Gallery />
        <Reservation />
        {/* <Location /> */}
      </Router>
      <br />
      <Footer />
    </>
  );
}

export default App;
