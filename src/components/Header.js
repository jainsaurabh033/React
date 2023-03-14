import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.js";

const Title = () => (
  <Link to="/">
    <img className="h-24" alt="logo" src={Logo} />
  </Link>
);

const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-100 shadow-sm">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 justify-ce">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">Cart</li>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
      </div>
      <h1> {isOnline ? "🟢" : "🔴"}</h1>
    </div>
  );
};

export default Header;
