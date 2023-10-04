import React from "react";
import Modal from "react-modal";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "@mui/material";

export const ContactModal = ({ OpenModal }) => {
  return (
    <Modal
      isOpen={OpenModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => OpenModal(false)}
      className="mod-contact"
      overlayClassName="over-lay"
    >
      <div className="mod-container">
        <div className="mod-text">
          <div className="mod-header">
            <h2>Contact Us</h2>
          </div>
          <div className="mod-box">
            <div className="mod-phone">
              <p>Phone: +1 (403) 921 9207 </p>
              <div className="line-line"></div>
            </div>
            <div className="mod-email">
              <p>
                Email <br />
                <Link
                  className="email-link"
                  target="_blank"
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=queenslandnailsandspa@gmail.com"
                >
                  queenslandnailsandspa@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
