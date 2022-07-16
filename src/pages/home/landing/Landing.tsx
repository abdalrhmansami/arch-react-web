import "./landing.scss";
import Slide from "react-reveal/Slide";

const Landing = () => {
  return (
    <div className="landing-page">
      <Slide bottom>
        <section>
          <p className="land-p">
            Delivering high quality, effective, and inspiring
            <span className="red"> architecture</span>
          </p>
          <p className="land-small-p">Donec et augue pharetra, rutrum leo at</p>
          <button className="land-button">Latest Project</button>
        </section>
      </Slide>
      <Slide right>
        <div className="land-image "></div>
      </Slide>
    </div>
  );
};

export default Landing;
