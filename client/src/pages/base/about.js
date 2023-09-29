import { about, nail1, nail2 } from "../../images";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about background ">
          <img src={about} alt="about caravelle" />
        </div>
        <div className="about infor">
          <h3>~ WHO WE ARE</h3>
          <h1>Queensland - We are Here To Serve The Best Beauty Services</h1>
          <p>
            We take pride in offering an array of nail services designed to
            enhance your natural beauty and boost your confidence.
          </p>
          <div className="about features">
            <div className="icon ramen-icon">
              <img src={nail1} alt="nail icon" />
              <div className="detail ramen">
                <h3>Manicures and Pedicures </h3>
                <p>
                  Our classic manicures and pedicures are designed to maintain
                  the health and beauty of your nails.
                </p>
              </div>
            </div>
            <div className="icon sushi-icon">
              <img src={nail2} alt="nail icon num2" />
              <div className="detail sushi">
                <h3>Nail Spa Packages </h3>
                <p>
                  Celebrate special moments with our nail spa packages. Whether
                  it's a bridal shower, birthday party, or a girls' day out, we
                  offer customized spa experiences for groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
