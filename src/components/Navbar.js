import { useState, useEffect } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);
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
          <h2>HOME</h2>
          <h2>BIO</h2>
          <h2>MUSIC</h2>
          <h2>SHOWS</h2>
          <h2>CONTACT</h2>
        </div>
      )}
      <i
        className={toggle ? "fas fa-times" : "fas fa-bars"}
        onClick={toggleNav}
      ></i>
    </div>
  );
}
