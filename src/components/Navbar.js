import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggle((toggle) => !toggle);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="navbar-container">
      {(toggle || screenWidth > 768) && (
        <div className="navbar-links-wrapper">
          <NavHashLink to="#home" activeClassName="active-link" smooth>
            <h2 onClick={toggleNav}>HOME</h2>
          </NavHashLink>

          <NavHashLink to="#videos" activeClassName="active-link" smooth>
            <h2 onClick={toggleNav}>VIDEOS</h2>
          </NavHashLink>

          <NavHashLink to="#bio" activeClassName="active-link" smooth>
            <h2 onClick={toggleNav}>BIO</h2>
          </NavHashLink>

          <NavHashLink to="#music" activeClassName="active-link" smooth>
            <h2 onClick={toggleNav}>MUSIC</h2>
          </NavHashLink>

          <NavHashLink to="#shows" activeClassName="active-link" smooth>
            <h2 onClick={toggleNav}>SHOWS</h2>
          </NavHashLink>

          <NavHashLink to="#contact" activeClassName="active-link" smooth>
            <h2 onClick={toggleNav}>CONTACT</h2>
          </NavHashLink>
        </div>
      )}
      <i
        className={toggle ? "fas fa-times" : "fas fa-bars"}
        onClick={toggleNav}
      ></i>
    </div>
  );
}
