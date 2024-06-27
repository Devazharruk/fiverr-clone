import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="textContainer">
          <h2>Find the perfect freelance services for your business</h2>
          <div className="searchBox">
            <div className="searchInput">
              <img src="/search.png" alt="" />
              <input type="text" placeholder='try "building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web development</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>Ai Services</button>
          </div>
        </div>
        <div className="imageContainer">
          <img src="/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
