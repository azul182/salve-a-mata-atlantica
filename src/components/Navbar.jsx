import { useEffect, useState } from "react";
import "../assets/styles/components/Navbar.scss";
import logo from "/logo.png";

const Navbar = () => {
  const [scrollClass, setScrollClass] = useState("");

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setScrollClass("header-secundary");
    } else {
      setScrollClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <header className="header-secundary header">
    <header className={`${scrollClass} header`}>
      <div className="header-content">
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">O que fazemos</a>
          </li>
          <li>
            <a href="#help">Como ajudar</a>
          </li>
          <li>
            <a href="#doe">Doe</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
