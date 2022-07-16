import { useState } from "react";
import "./allProject.scss";
import Zoom from "react-reveal/Zoom";

const AllProject = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeElement = (index: number) => {
    setActiveIndex(index);
  };

  const dataTabs = [
    { name: "All", number: 1 },
    { name: "APARTMENT", number: 2 },
    { name: "OFFICES", number: 3 },
    { name: "RESIDENT", number: 4 },
    { name: "SHOPPING", number: 5 },
  ];

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
