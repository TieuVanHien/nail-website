import home from "../../images/home.jpeg";
import Logo from "../../assets/queenisland.jpg";
import { Roll } from "react-reveal";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="bg">
          <img src={home} alt="home page background" />
        </div>
        <Roll style={{ position: "relative" }} left>
          <img
            style={{
              borderRadius: "50%",
              position: "absolute",
              marginTop: "5em",
              width: "15em",
              height: "15em",
            }}
            src={Logo}
            className="logo"
            alt="logo"
          />
        </Roll>
      </div>
    </section>
  );
};
