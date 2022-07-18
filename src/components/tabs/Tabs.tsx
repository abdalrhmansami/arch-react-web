import { useState } from "react";
import "./tabs.scss";
import { dataTabs } from "../../constant/tabs-data";

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeElement = (index: number) => {
    setActiveIndex(index);
  };

  return (
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
  );
};

export default Tabs;
