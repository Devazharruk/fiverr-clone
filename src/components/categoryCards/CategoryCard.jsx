import { Link } from "react-router-dom";
import "./CategoryCard.scss";

function CategoryCard({ item }) {
  return (
    <Link to="/gigs">
    <div className="card">
      <div className="overlay"></div>
      <img src={item.img} alt="" />
      <div className="desc">
        <span>{item.desc}</span>
        <h2>{item.title}</h2>
      </div>
    </div>
    </Link>
  );
}

export default CategoryCard;
