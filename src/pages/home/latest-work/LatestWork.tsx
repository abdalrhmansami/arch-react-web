import "./latestWork.scss";
import Zoom from "react-reveal/Zoom";
import { workData } from "../../../constant/work-data";

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
        {workData.map((item) => (
          <Zoom bottom key={item.id}>
            <div className="parent-work-pic">
              <div className={`pic-work pic${item.id}-work`}>
                <div className="red-overly">
                  <div className="caption-work">
                    <h2>{item.name}</h2>
                    <p>{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </section>
      <br />
      <br />
      <button className="land-button center">View All Project</button>
    </div>
  );
};

export default LatestWork;
