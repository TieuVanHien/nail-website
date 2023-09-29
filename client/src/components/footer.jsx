import { Button } from "@mui/material";
import React, { useState } from "react";
import { ContactModal } from "./modal/contactModal";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const [open, handleOpen] = useState(false);
  return (
    <section className="footer" id="contact">
      <div className="footer-container">
        <div className="left-footer">
          <div className="left-text">
            <h2>Ready to get started?</h2>
            <p>
              Experience the ultimate nail makeover by reserving your spot with
              us. Your beautiful nails await – Contact Us Now!
            </p>
            <Button
              className="button"
              sx={{ mt: "2em" }}
              onClick={() => handleOpen(true)}
            >
              Contact Us
            </Button>
            {open && <ContactModal OpenModal={handleOpen} />}
          </div>
        </div>
        <div className="right-footer">
          <div className="open-time">
            <div className="time">
              <h3> Monday - Saturday </h3>
              <p>9 a.m. - 5 p.m</p>
            </div>
            <div className="time">
              <h3> Sunday </h3>
              <p>Closed</p>
            </div>
            <Button className="button" variant="contained">
              <a
                target="_blank"
                rel="noreferrer"
                href="https:www.google.ca/maps/dir/51.0283134,-113.983647/star+nails+boutique/@50.9798899,-114.1118722,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x5371771fc7c55555:0x59d9e9b11c6b001a!2m2!1d-114.0254593!2d50.9396207?entry=ttu"
              >
                Get Direction
              </a>
            </Button>
          </div>
          <div className="social">
            <h3>Follow Us On:</h3>
            <a href="/">
              <FaFacebook
                className="icon"
                style={{ marginRight: "0.45em" }}
                size={28}
              />
            </a>
            <a href="/">
              <FaInstagram className="icon" size={28} />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="line"></div>
        <h4 style={{ marginTop: "0.5em" }}>
          Copyright © 2023 Queensland Nails & Spa. All Rights Reserved.
        </h4>
      </div>
    </section>
  );
};
