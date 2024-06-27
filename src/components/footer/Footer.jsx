import { Link } from "react-router-dom";
import "./Footer.scss";

const categories = [
  {
    id: 1,
    title: "Creative Works",
    items: [
      "Graphics & Design",
      "Logo Design",
      "Illustration",
      "Photography",
      "Video Production",
      "Animation",
      "3D Modeling",
      "Crafts",
      "Calligraphy",
      "Painting",
      "Sculpture",
    ],
  },
  {
    id: 2,
    title: "Tech & Development",
    items: [
      "Web Development",
      "App Development",
      "Software Engineering",
      "AI & Machine Learning",
      "Database Management",
      "Cybersecurity",
      "Blockchain",
      "Cloud Computing",
      "DevOps",
      "Data Analysis",
    ],
  },
  {
    id: 3,
    title: "Writing & Translation",
    items: [
      "Content Writing",
      "Copywriting",
      "Technical Writing",
      "Creative Writing",
      "Blog Writing",
      "Translation",
      "Transcription",
      "Proofreading",
      "Editing",
      "Ghostwriting",
    ],
  },
  {
    id: 4,
    title: "Marketing & Sales",
    items: [
      "Digital Marketing",
      "SEO",
      "Social Media Marketing",
      "Email Marketing",
      "Content Marketing",
      "Affiliate Marketing",
      "Market Research",
      "Sales Strategy",
      "Advertising",
      "Branding",
    ],
  },
  {
    id: 5,
    title: "Business & Finance",
    items: [
      "Accounting",
      "Financial Planning",
      "Business Consulting",
      "Project Management",
      "Human Resources",
      "Investment Analysis",
      "Tax Preparation",
      "Auditing",
      "Legal Consulting",
      "Business Development",
    ],
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          {categories.map((item) => (
            <div key={item.id} className="category">
                <h2 >{item.title}</h2>
                {item.items.map((value) => (
                  <Link to="/" key={value}>
                    {value}
                  </Link>
                ))}
            </div>
          ))}
        </div>

        <hr />

        <div className="bottom">
          <div className="left">
            <h1>fiverr</h1>
            <span className="copy">© Fiverr International Ltd, 2024</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/facebook.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
              <img src="/pinterest.png" alt="" />
              <img src="/twitter.png" alt="" />
            </div>
            <img src="/language.png" alt="" />
            <span>English</span>
            <img src="/coin.png" alt="" />
            <span>USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
