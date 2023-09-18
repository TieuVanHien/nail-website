import { Button } from "@mui/material";

export const Location = () => {
  return (
    <section className="location" id="location">
      <div className="container">
        <div className="location">
          <div className="heading">
            <h2 style={{ marginBottom: "1em" }}>
              Come And Join Us at Unit #2-539 Queensland Dr SE, Calgary, AB T2J
              4G4!!
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
      </div>
    </section>
  );
};
