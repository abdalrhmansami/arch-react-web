import { Link } from "react-router-dom";
import pager from "../../assets/icons/paper-plane-solid-24.png";
import "./card.scss";

const Card = () => {
  return (
    <div className="s-card">
      <img style={{ width: "55px" }} src={pager} alt="" />
      <div className="content-card">
        <h2>Architecture</h2>
        <p>
          Lorem ipsum dolor sit amet, consect tuiscing elit. Mauris vitae undas
          sodales lectus, non ultrices nisi.
        </p>
        <Link className="btn-card" to="/">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Card;
