import { Link } from "react-router-dom";
import "./GigCard.scss";

function GigCard({ item }) {
  return (
    <Link to="/gig/123">
    <div className="gigCard">
      <img src={item.img} alt="" />
      <div className="details">
        <div className="user">
          <img src={item.pp} alt="" />
          <span>{item.username}</span>
        </div>
        <p>{item.desc}</p>
        <div className="stars">
          <img src="/star.png" alt="" />
          <span>{item.star}</span>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <img src="heart.png" alt="" />
        <div className="price">
          <span>STARTING AT</span>
          <h2>${item.price}</h2>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default GigCard;
