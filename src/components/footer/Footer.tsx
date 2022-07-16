import { Link } from "react-router-dom";
import pic from "../../assets/icons/paper-plane-solid-24.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="top-section">
        <div className="logo-footer">Arch</div>
        <div className="footer-list-container">
          <ul className="footer-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-icons">
          <img style={{ width: "24px" }} src={pic} alt="footer-pic" />
          <img style={{ width: "24px" }} src={pic} alt="footer-pic" />
          <img style={{ width: "24px" }} src={pic} alt="footer-pic" />
          <img style={{ width: "24px" }} src={pic} alt="footer-pic" />
        </div>
      </div>
      <div className="line-footer"></div>
      <br />
      <div className="copy-right">Copyright © JevelinTheme - Theme by Shufflehound</div>
    </footer>
  );
};

export default Footer;
