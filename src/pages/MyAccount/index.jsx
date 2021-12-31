import ProfileItem from "../../components/ProfileItem";
import { Link } from "react-router-dom";
import RequireAuth from "../../components/RequireAuth";

function MyAccount() {
  return (
    <RequireAuth>
      <main className="Profile">
        <section className="Profile-header">
          <figure className="Profile-avatar">
            <img
              src="https://images.unsplash.com/photo-1558473840-767aaeeeae45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="name avatar"
            />
            <figcaption className="Profile-avatar-name">Name</figcaption>
          </figure>
          <Link to="/profile/edit" className="Profile-edit-mobile">
            <button className="btn btn-icon">🖊</button>
          </Link>
        </section>

        <section className="Profile-info">
          <ul className="Profile-info-list">
            <li className="Profile-info-item Profile-edit">
              <header className="Profile-info-title">
                <h2>PROFILE</h2>
                <p>Some info may be visible to other people</p>
              </header>
              <Link to="/profile/edit">
                <button className="Profile-edit-btn">Edit</button>
              </Link>
            </li>
            <ProfileItem title="Username" data="Anna 2022" />
            <ProfileItem title="Full name" data="Anna Doe" />
            <ProfileItem title="Email" data="Anna@gmail.com" />
            <ProfileItem title="Username" data="Anna 2022" />
            <ProfileItem title="Password" data="********" />
          </ul>
        </section>
      </main>
    </RequireAuth>
  );
}

export default MyAccount;
