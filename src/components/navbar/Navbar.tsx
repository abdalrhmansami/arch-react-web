import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./navbar.scss";
import { navData } from "../../constant/navs-data";

const Navbar = () => {
  const location = useLocation();

  const [NavX, setNavX] = useState(false);
  const [ActiveIndex, setActiveIndex] = useState(0);

  const clickNav = () => {
    setNavX(!NavX);
  };

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = navData.findIndex((item) => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className={NavX ? "navbar active" : "navbar"}>
      <div className="logo">Arch</div>
      <div className="list-nav">
        <ul>
          {navData.map((nav, index) => (
            <Link
              key={nav.path}
              to={nav.path}
              className={`${ActiveIndex === index ? "active" : ""}`}
            >
              {nav.name}
            </Link>
          ))}
        </ul>
      </div>
      <div onClick={() => clickNav()} className="humburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Navbar;
