import { useState } from "react";
import logo from "../assets/img/food-villa-logo.jpg"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";



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
  const isOnline = useOnline();
  const [isLogged , setisLogged] = useState(false);
  return (
    <div className="header">
        <Title/>
      <h1>Food villa</h1>

      <ul>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/Aboutus">About Us</Link></li>
        <li> <Link to="/Contactus">Contact Us</Link></li>
        <li> <Link to="/More">More</Link></li>
        <li> <Link to="/instamart">instamart</Link></li>
        { 
            isLogged ? 
            (<button onClick={()=>{setisLogged(false)}}>logout</button>)  : 
            (<button onClick={()=>{setisLogged(true)}}>login</button>)
        }
        <li> {isOnline ? "🟢":"🔴"}</li>
      </ul>
    </div>
  );
};

export default Header;
