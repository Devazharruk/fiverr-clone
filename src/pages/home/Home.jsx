import CategoryCard from "../../components/categoryCards/CategoryCard";
import Featured from "../../components/featured/Featured";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import {cards} from '../../data'
import {projects} from '../../data'
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide  slidesToShow={5} arrowsScroll={5}>
        {cards.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </Slide>

      <div className="section">
        <div className="wrapper">
          <div className="details">
            <h2>A whole world of freelnce at your fingertips</h2>
            <div className="item">
              <div className="title">
                <img src="/check.png" alt="" />
                <span>The best for every budget</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque nostrum tempora.
              </p>
            </div>
            <div className="item">
              <div className="title">
                <img src="/check.png" alt="" />
                <span>The best for every budget</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque nostrum tempora.
              </p>
            </div>
            <div className="item">
              <div className="title">
                <img src="/check.png" alt="" />
                <span>The best for every budget</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque nostrum tempora.
              </p>
            </div>
            <div className="item">
              <div className="title">
                <img src="/check.png" alt="" />
                <span>The best for every budget</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque nostrum tempora.
              </p>
            </div>
            <div className="item">
              <div className="title">
                <img src="/check.png" alt="" />
                <span>The best for every budget</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque nostrum tempora.
              </p>
            </div>
          </div>
          <div className="right">
            <video src="/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="section dark">
        <div className="wrapper">
          <div className="details">
            <h2>A fiverr business</h2>
            <h1>A business solution design for teams</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              possimus omnis itaque quod dolores dolorum.
            </p>
            <div className="item">
              <div className="title">
                <img src="/check.png" alt="" />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
              </div>
            </div>
            <div className="item">
              <div className="title">
                <img src="/check.png" alt="" />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
              </div>
            </div>
            <div className="item">
              <div className="title">
                <img src="/check.png" alt="" />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
              </div>
            </div>

            <button>Explore fiverr business</button>
          </div>
          <div className="right">
            <img src="/team.jpg" controls></img>
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
