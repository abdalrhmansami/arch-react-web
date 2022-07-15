import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [NavX, setNavX] = useState(false);
  const clickNav = () => {
    setNavX(!NavX);
  };

  return (
    <div className={NavX ? "navbar active" : "navbar"}>
      <div className="logo">Arch</div>
      <div className="list-nav">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
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
