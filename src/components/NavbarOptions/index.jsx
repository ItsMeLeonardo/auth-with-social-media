import { Link } from "react-router-dom";
import Logout from "../../icons/Logout";
import Account from "../../icons/Account";
import Register from "../../icons/Register";
import Login from "../../icons/Login";

function NavbarOptions({ user = null, logout } = {}) {
  if (!user) {
    return (
      <aside className="Tooltip">
        <Link to="/login">
          <button className="Tooltip-button">
            <span>Login</span>
            <Login />
          </button>
        </Link>
        <Link to="/register">
          <button className="Tooltip-button">
            <span>Register</span>
            <Register />
          </button>
        </Link>
      </aside>
    );
  }

  return (
    <aside className="Tooltip">
      <Link to={`/profile/${user.id}`}>
        <button className="Tooltip-button">
          <span>Account</span>
          <Account className="stroke-black" />
        </button>
      </Link>
      <Link to="/login">
        <button className="Tooltip-button" onClick={logout}>
          <span>Logout</span>
          <Logout className="stroke-black" />
        </button>
      </Link>
    </aside>
  );
}

export default NavbarOptions;
