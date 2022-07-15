import "./landing.scss";

const Landing = () => {
  return (
    <div className="landing-page">
      <section>
        <p className="land-p">
          Delivering high quality, effective, and inspiring 
          <span className="red"> architecture</span>
        </p>
        <p className="land-small-p">Donec et augue pharetra, rutrum leo at</p>
        <button className="land-button">Latest Project</button>
      </section>
      <div className="land-image "></div>
    </div>
  );
};

export default Landing;
