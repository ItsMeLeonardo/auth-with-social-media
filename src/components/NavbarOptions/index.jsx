import { Link } from "react-router-dom";

function NavbarOptions({ user = null, logout } = {}) {
  if (!user) {
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
      <Link to={`/profile/${user.id}`}>
        <button className="Tooltip-button">Account</button>
      </Link>
      <Link to="/login">
        <button className="Tooltip-button" onClick={logout}>
          Logout
        </button>
      </Link>
    </aside>
  );
}

export default NavbarOptions;
