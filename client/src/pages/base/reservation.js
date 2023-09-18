import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { sendMail } from "../../api/Mail";

export const Reservation = () => {
  //values users arrayList
  const [values, setValues] = useState({
    name: "",
    date: "",
    time: "",
    email: "",
    phone: "",
    service: "",
  });
  const { name, date, time, email, phone, service } = values;
  const handleChange = (vls) => (event) => {
    setValues({ ...values, [vls]: event.target.value });
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (!name || !date || !time || !email || !phone || !service) {
      return toast.error("Please fill all the form!");
    } else {
      sendMail({ name, date, time, email, phone, service })
        .then((data) => {
          if (data.err) {
            console.log("err", data.err);
          } else {
            console.log("Success", data);
            setValues({
              name: "",
              date: "",
              time: "",
              email: "",
              phone: "",
              service: "",
            });
            return toast.success("Your reservation has been sent!");
          }
        })
        .catch(console.log("error in send email!"));
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="title">
          <h1>Book Your Desired Services </h1>
          <p style={{ width: "50%" }}>
            Ready to experience the luxury and convenience of our nail services?
            Reserve your spot at QueenIsland Nails & Spa today! place, we offer
            best ever!
          </p>
        </div>
        <div className="form-text">
          <ToastContainer position="bottom-center" limit={1} />
          <div className="form">
            <form onSubmit={handleSend}>
              <TextField
                className="input"
                variant="outlined"
                label="Name"
                placeholder="John Wick"
                type="text"
                value={name}
                onChange={handleChange("name")}
              />
              <TextField
                className="input"
                variant="outlined"
                label="Email"
                placeholder="abc@gmail.com"
                type="email"
                value={email}
                onChange={handleChange("email")}
              />
              <TextField
                className="input"
                variant="outlined"
                label="Phone"
                placeholder="(888) 888-8888"
                type="tel"
                value={phone}
                onChange={handleChange("phone")}
              />
              <TextField
                className="input"
                min={1}
                max={20}
                variant="outlined"
                label="Service"
                placeholder="Mandicure, Pandicure, etc."
                type="text"
                value={service}
                onChange={handleChange("service")}
              />
              <TextField
                className="input"
                variant="outlined"
                type="date"
                value={date}
                onChange={handleChange("date")}
              />
              <TextField
                className="input"
                variant="outlined"
                type="time"
                value={time}
                onChange={handleChange("time")}
              />

              <Button className="button" onClick={handleSend} type="submit">
                Submit Resevation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
