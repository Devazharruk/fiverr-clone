import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const breadCrumbs = "FIVVER > GRAPHICS & DESIGN >";
  return (
    <div className="gigs">
      <div className="container">
        <div className="filter">
          <div className="left">
            <span className="breadCrumbs">{breadCrumbs}</span>
            <h2 className="title">Ai Artists</h2>
            <p className="desc">
              Explore the boundries of art and technology with Fiverr's AI
              artists
            </p>
            <div className="filterPrice">
              <span className="type">Budged</span>
              <input type="text" placeholder="min"/>
              <input type="text" placeholder="max"/>
              <button>Apply</button>
            </div>
          </div>
          <div className="right">
            <span>sortBy</span>
            <h3>Newest</h3>
            <img src="/down.png" alt="" />

            <div className="options">
              <h3>Newest</h3>
              <h3>Best Selling</h3>
            </div>
          </div>
        </div>

        <div className="gigContainer">
          {gigs.map((item) => (
            <GigCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
