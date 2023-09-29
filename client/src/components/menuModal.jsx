import React from "react";
import Modal from "react-modal";
import {
  ex1,
  ex2,
  ex3,
  ex4,
  ex5,
  ex6,
  ex7,
  ex8,
  ex9,
  ex10,
  ex11,
  ex12,
  ex13,
  ex14,
  ex15,
  ex16,
  ex17,
  ex18,
  ex19,
  ex20,
  ex21,
  ex22,
} from "../images/index";

export const MenuModal = ({ OpenModal }) => {
  return (
    <Modal
      isOpen={OpenModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => OpenModal(false)}
      className="mod"
      overlayClassName="over-lay"
    >
      <div className="nail-examples">
        <img className="image" src={ex1} alt="Nail 1" />
        <img className="image" src={ex2} alt="Nail 2" />
        <img className="image" src={ex3} alt="Nail 3" />
        <img className="image" src={ex4} alt="Nail 4" />
        <img className="image" src={ex5} alt="Nail 5" />
        <img className="image" src={ex6} alt="Nail 6" />
        <img className="image" src={ex7} alt="Nail 7" />
        <img className="image" src={ex8} alt="Nail 8" />
        <img className="image" src={ex9} alt="Nail 9" />
        <img className="image" src={ex10} alt="Nail 10" />
        <img className="image" src={ex11} alt="Nail 11" />
        <img className="image" src={ex12} alt="Nail 12" />
        <img className="image" src={ex13} alt="Nail 13" />
        <img className="image" src={ex14} alt="Nail 14" />
        <img className="image" src={ex15} alt="Nail 15" />
        <img className="image" src={ex16} alt="Nail 16" />
        <img className="image" src={ex17} alt="Nail 17" />
        <img className="image" src={ex18} alt="Nail 18" />
        <img className="image" src={ex19} alt="Nail 19" />
        <img className="image" src={ex20} alt="Nail 20" />
        <img className="image" src={ex21} alt="Nail 21" />
        <img className="image" src={ex22} alt="Nail 22" />
      </div>
    </Modal>
  );
};
