import { Link } from "react-router-dom";

function NavbarOptions({ userIsAuth = false } = {}) {
  if (!userIsAuth) {
    return (
      <aside className="Tooltip">
        <Link to="/login">
          <button className="Tooltip-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="Tooltip-button">Register</button>
        </Link>
      </aside>
    );
  }

  return (
    <aside className="Tooltip">
      <Link to="/profile">
        <button className="Tooltip-button">Account</button>
      </Link>
      <Link to="/login">
        <button className="Tooltip-button">Logout</button>
      </Link>
    </aside>
  );
}

export default NavbarOptions;
