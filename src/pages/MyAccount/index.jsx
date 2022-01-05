import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileItem from "../../components/ProfileItem";
import RequireAuth from "../../components/RequireAuth";
import { useAuth } from "../../Hooks/useAuth";
import { getUser } from "../../Services/user";

function MyAccount() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    getUser({ token: user.token, userId: user.id })
      .then((data) => {
        console.log({ data });
        setUserData(data);
      })
      .catch((err) => console.log({ err }));
  }, []);

  return (
    <RequireAuth>
      <main className="Profile">
        <section className="Profile-header">
          <figure className="Profile-avatar">
            <img src={userData.avatar} alt={`avatar of ${userData.name}`} />
            <figcaption className="Profile-avatar-name">
              {userData.name}
            </figcaption>
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
            <ProfileItem title="Username" data={userData?.username} />
            <ProfileItem title="Full name" data={userData.name} />
            <ProfileItem title="Email" data={userData.email} />
            <ProfileItem
              title="Phone"
              data={userData?.phone || "add your phone number"}
            />
            <ProfileItem title="Password" data="********" />
          </ul>
        </section>
      </main>
    </RequireAuth>
  );
}

export default MyAccount;
