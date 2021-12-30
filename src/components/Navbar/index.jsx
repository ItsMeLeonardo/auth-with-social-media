import { Link } from "react-router-dom";
import "../../styles/index.pcss";
import NavbarOptions from "../NavbarOptions";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="Navbar-list">
        <Link to="/" className="Navbar-item logo">
          <li className="Navbar-link">
            <i hidden> REMOVE THIS</i>
          </li>
        </Link>
        <li className="Navbar-item section-name">
          <header className="Navbar-link">PROFILE</header>
        </li>
        <li className="Navbar-item profile">
          <figure className="Navbar-link">
            <figcaption className="md">username</figcaption>
            <img
              src="https://images.unsplash.com/photo-1558473840-767aaeeeae45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="name avatar"
            />
          </figure>
          <NavbarOptions userIsAuth />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
