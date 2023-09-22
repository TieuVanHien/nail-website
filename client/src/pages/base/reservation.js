import { Button } from "@mui/material";
import React from "react";

export const Reservation = () => {
  return (
    <section className="reservation" id="reservation">
      <div className="card">
        <div className="box">
          <h1>
            "Welcome to our Nail Salon's easy and convenient booking system,
            designed to pamper your hands and feet with the utmost care. Treat
            yourself to rejuvenating nail experience by reserving your spot with
            us."
          </h1>
          <Button className="button" variant="contained">
            <a href="https://nailsolutionplus.firebaseapp.com/?storeKey=-NepEiE07PfDpG0CPAhq&fbclid=IwAR0CiAXznHkjYi2JmytyH0-OsMUOqvCfK6sHeSAQFBRs9JkjK1swcISJ-co">
              Book Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
