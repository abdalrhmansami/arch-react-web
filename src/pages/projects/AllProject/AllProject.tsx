import { useState } from "react";
import Zoom from "react-reveal/Zoom";

import "./allProject.scss";
import { dataTabs } from "../../../constant/tabs-data";

const AllProject = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeElement = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="tabs-projects">
        <ul>
          {dataTabs.map((el, index) => (
            <li
              key={el.number}
              className={`${activeIndex === index && "active"}`}
              onClick={() => activeElement(index)}
            >
              {el.name}
            </li>
          ))}
        </ul>
        <hr />
      </div>
      <div className="line-project"></div>
      <br />
      <section className="project-section">
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
        </section>
      </section>
    </div>
  );
};

export default AllProject;
