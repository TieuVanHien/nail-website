import home from "../../images/home-background.png";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="heading">
          <h1 className="head1">Discover the Artistry of </h1>
          <h1 className="head2" style={{ marginLeft: "4em" }}>
            Nail Elegance at Our Salon
          </h1>
        </div>
        <div className="home-img">
          <img src={home} alt="home page background" />
        </div>
      </div>
    </section>
  );
};
