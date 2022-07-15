import React from "react";
import "./latestWork.scss";

const LatestWork = () => {
  return (
    <div className="work-latest">
      <div className="service-head">
        <h2>Our latest work</h2>
        <p>
          Donec eleifend fermentum semper. Etiam enim sapien, <br /> feugiat id
          eros a, lacinia
        </p>
      </div>
      <section className="photo-work">
        <div className="pic-work pic1-work"></div>
        <div className="pic-work pic2-work"></div>
        <div className="pic-work pic3-work"></div>
        <div className="pic-work pic4-work"></div>
        <div className="pic-work pic5-work"></div>
      </section>
      <br />
      <br />
      <button className="land-button center">View All Project</button>
    </div>
  );
};

export default LatestWork;
