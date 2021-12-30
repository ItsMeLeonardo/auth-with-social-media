import { Link } from "react-router-dom";
import "../../styles/index.pcss";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="Navbar-list">
        <li className="Navbar-item logo">
          <a href="#" className="Navbar-link">
            <i hidden> REMOVE THIS</i>
          </a>
        </li>
        <li className="Navbar-item section-name">
          <a href="#" className="Navbar-link">
            PROFILE
          </a>
        </li>
        <li className="Navbar-item profile">
          <a href="#" className="Navbar-link">
            <span className="md">username</span>
            <img
              src="https://images.unsplash.com/photo-1558473840-767aaeeeae45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="name avatar"
            />
          </a>
          <aside className="Tooltip">
            <Link to="/profile">
              <button className="Tooltip-button">Account</button>
            </Link>
            <Link to="/login">
              <button className="Tooltip-button">Logout</button>
            </Link>
          </aside>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
