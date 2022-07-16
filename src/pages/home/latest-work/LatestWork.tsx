import "./latestWork.scss";
import Zoom from "react-reveal/Zoom";

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
        <Zoom bottom>
          <div className="parent-work-pic">
            <div className="pic-work pic1-work">
              <div className="red-overly">
                <div className="caption-work">
                  <h2>Central Office</h2>
                  <p>OFFICES</p>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom bottom>
          <div className="parent-work-pic">
            <div className="pic-work pic2-work">
              <div className="red-overly">
                <div className="caption-work">
                  <h2>Shopping center</h2>
                  <p>SHOPPING</p>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom bottom>
          <div className="parent-work-pic">
            <div className="pic-work pic3-work">
              <div className="red-overly">
                <div className="caption-work">
                  <h2>Resident area</h2>
                  <p>RESIDENT</p>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom bottom>
          <div className="parent-work-pic">
            <div className="pic-work pic4-work">
              <div className="red-overly">
                <div className="caption-work">
                  <h2>Office center</h2>
                  <p>OFFICES</p>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom bottom>
          <div className="parent-work-pic">
            <div className="pic-work pic5-work">
              <div className="red-overly">
                <div className="caption-work">
                  <h2>Appartments</h2>
                  <p>APPARTMENTS</p>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </section>
      <br />
      <br />
      <button className="land-button center">View All Project</button>
    </div>
  );
};

export default LatestWork;
