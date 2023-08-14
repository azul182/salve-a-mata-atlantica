import "../assets/styles/components/Navbar.scss";
import logo from "/logo.png";

const Navbar = () => {
  return (
    // <header className="header-secundary header">
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">O que fazemos</a>
          </li>
          <li>
            <a href="/">Como ajudar</a>
          </li>
          <li >
            <a href="/">Doe</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
