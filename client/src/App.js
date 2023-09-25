import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Footer } from "./components";
import { Home, About, Gallery, Reservation, Service } from "./pages";

function App() {
  return (
    <>
      <Router>
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
