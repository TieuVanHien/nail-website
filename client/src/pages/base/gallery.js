import {
  Narrow,
  nailEx1,
  nailEx2,
  nailEx3,
  nailEx4,
  vector1,
  vector2,
} from "../../images";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { MenuModal } from "../../components/menuModal";

export const Gallery = () => {
  const [open, handleOpen] = useState(false);
  return (
    <section className="menu" id="menu">
      <div className="container">
        <img className="vector vector1" src={vector1} alt="vector1" />
        <img className="vector vector2" src={vector2} alt="vector2" />
        <div className="menu-header">
          <h1>Welcome</h1>
        </div>
        <div className="menu-text">
          <p>
            Explore our gallery and immerse yourself in the world of exquisite
            nail artistry at QueenIsland.
            <img className="narrow-img" src={Narrow} alt="Narrow" />
            <Button className="button" onClick={() => handleOpen(true)}>
              See More
            </Button>
            {open && <MenuModal OpenModal={handleOpen} />}
          </p>
        </div>
        <div className="menu-images">
          <img className="model model-left" src={nailEx1} alt="model" />
          <img className="model model-right" src={nailEx2} alt="model" />
          <img className="model model-left" src={nailEx3} alt="model" />
          <img className="model model-right" src={nailEx4} alt="model" />
        </div>
      </div>
    </section>
  );
};
