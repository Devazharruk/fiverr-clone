import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const navLinks = ["Fiverr Business", "Explore", "English", "Sign in"];
const menus = [
  "Graphics & Design",
  "Video & Animations",
  "Writing & Translation",
  "Ai Services",
  "Digital Marketing",
  "Music & Audi0",
  "Programming & Tech",
  "Business",
  "Lifestyles",
];

const user = {
  id: 1,
  username: "John Doe",
  isSeller: true,
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 1 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
  }, []);

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="wrapper">
        <div className="top">
          <Link to="/" className="logo">
            <h2>
              fiverr<span>.</span>
            </h2>
          </Link>
          <div className="links">
            {navLinks.map((item) => (
              <Link to="/" key={item}>
                {item}
              </Link>
            ))}
            {!user.isSeller && <Link to="/">Become a Seller</Link>}
            <div onClick={() => setOpen((prev) => !prev)} className="user">
              <img src="/logo.webp" alt="" />
              <span>John</span>
              {open && (
                <div className="options">
                  {user.isSeller && (
                    <>
                      <Link to="/add">Add new gig</Link>
                      <Link to="/mygigs">My Gigs</Link>
                    </>
                  )}
                  <Link to="/orders">Orders</Link>
                  <Link to="/messages">Messages</Link>
                  <Link to="/">Log out</Link>
                </div>
              )}
            </div>
          </div>
        </div>


        <div className="mobilesMenu">
          <i
            style={openMenu ? {color:"black"} : {color:"white"}}
            onClick={() => setOpenMenu((prev) => !prev)}
            class={openMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars" }
          ></i>

          {
            <div className={openMenu ? "links activeMenu" : "links" } >
              {navLinks.map((item) => (
                <Link to="/" key={item}>
                  {item}
                </Link>
              ))}
              {!user.isSeller && <Link to="/">Become a Seller</Link>}
              {user.isSeller && (
                <>
                  <Link to="/add">Add new gig</Link>
                  <Link to="/mygigs">My Gigs</Link>
                </>
              )}
              <Link to="/orders">Orders</Link>
              <Link to="/messages">Messages</Link>
              <Link to="/">Log out</Link>
            </div>
          }
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="bottom">
            {menus.map((menu) => (
              <Link to="/" key={menu}>
                {menu}
              </Link>
            ))}
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
