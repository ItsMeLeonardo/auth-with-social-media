function MyAccount() {
  return (
    <main className="Profile">
      <section className="Profile-header">
        <figure className="Profile-avatar">
          <img
            src="https://images.unsplash.com/photo-1558473840-767aaeeeae45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="name avatar"
          />
          <figcaption className="Profile-avatar-name">Name</figcaption>
        </figure>
        <button className="btn btn-icon">🖊</button>
      </section>

      <section className="Profile-info">
        <ul className="Profile-info-list">
          <li className="Profile-info-item Profile-edit">
            <header className="Profile-info-title">
              <h2>PROFILE</h2>
              <p>Some info may be visible to other people</p>
            </header>
            <button className="Profile-edit-btn">Edit</button>
          </li>
          <li className="Profile-info-item">
            <header className="Profile-info-title">username</header>
            <p className="Profile-info-data">Anna 2022</p>
          </li>
          <li className="Profile-info-item">
            <header className="Profile-info-title">Name</header>
            <p className="Profile-info-data">Anna Doe</p>
          </li>
          <li className="Profile-info-item">
            <header className="Profile-info-title">email</header>
            <p className="Profile-info-data">Anna@gmail.com </p>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default MyAccount;
