import { Button } from "@mui/material";

export const Location = () => {
  return (
    <section className="location" id="location">
      <div className="container">
        <div className="heading">
          <h2 style={{ marginBottom: "1em" }}>
            Come And Join Us at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.ca/maps/dir/51.0283134,-113.983647/star+nails+boutique/@50.9798899,-114.1118722,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x5371771fc7c55555:0x59d9e9b11c6b001a!2m2!1d-114.0254593!2d50.9396207?entry=ttu"
            >
              Unit #2-539 Queensland Dr SE, Calgary, AB T2J 4G4!!
            </a>
          </h2>
        </div>
        <div className="open-time">
          <h2>Open Hours:</h2>
          <div className="time">
            <h3> Monday </h3>
            <p>9 a.m. - 5 p.m</p>
          </div>
          <div className="time">
            <h3> Tuesday </h3>
            <p>9 a.m. - 5 p.m</p>
          </div>
          <div className="time">
            <h3> Wednesday </h3>
            <p>9 a.m. - 5 p.m</p>
          </div>
          <div className="time">
            <h3> Thursday </h3>
            <p>9 a.m. - 5 p.m</p>
          </div>
          <div className="time">
            <h3> Friday </h3>
            <p>9 a.m. - 5 p.m</p>
          </div>
          <div className="time">
            <h3> Saturday </h3>
            <p>8:45 a.m. - 4 p.m</p>
          </div>
          <div className="time">
            <h3> Sunday </h3>
            <p>Closed</p>
          </div>
          <Button
            className="button-dir"
            style={{ marginTop: "2em" }}
            variant="text"
          >
            Get Direction
          </Button>
        </div>
      </div>
    </section>
  );
};
