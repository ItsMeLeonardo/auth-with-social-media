import { Link } from "react-router-dom";
import NavbarOptions from "../NavbarOptions";
import { useAuth } from "../../Hooks/useAuth";

const DEFAULT_AVATAR =
  "https://images.unsplash.com/photo-1558473840-767aaeeeae45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

function Navbar() {
  const { user, signOut } = useAuth();
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
            <figcaption className="md">
              {user ? user?.email : "Star now"}
            </figcaption>
            <img src={user ? user?.avatar : DEFAULT_AVATAR} alt="name avatar" />
          </figure>

          <NavbarOptions userIsAuth={user} logout={signOut} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
