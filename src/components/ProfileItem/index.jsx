function ProfileItem({ title, data }) {
  return (
    <li className="Profile-info-item">
      <header className="Profile-info-title">{title}</header>
      <p className="Profile-info-data">{data}</p>
    </li>
  );
}

export default ProfileItem;
