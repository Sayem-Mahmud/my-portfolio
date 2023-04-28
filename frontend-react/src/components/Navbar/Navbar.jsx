import React, { useEffect, useState } from "react";
// import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 64) {
      setNavbarColor(true);
      // return "app__navbar"
    } else {
      setNavbarColor(false);
      // return "app__navbar-color"
    }
  };
  return (
    <nav className="app__navbar" style={{backgroundColor:navbarColor?'rgba(43,41,41,.089)':'rgba(255, 255, 255, 0.25)'}}>
      <div className="app__navbar_logo">
        {/* <img src={images.logo} alt="logo" /> */}
          <p style={{color:'white',backgroundColor:'black',fontSize:'18px',fontWeight:'bold', letterSpacing:'0.2rem',padding:'2px 7px'}}>SAYEM MAHMUD</p>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} className="linkSyle2">{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
