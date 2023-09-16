import logo from "../assets/img/food-villa-logo.jpg"
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          alt="logo"
          src={logo}
        />
      </a>
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
        <Title/>
      <h1>Food villa</h1>

      <ul>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/Aboutus">About Us</Link></li>
        <li> <Link to="/Contactus">Contact Us</Link></li>
        <li> <Link to="/More">More</Link></li>
      </ul>
    </div>
  );
};

export default Header;
