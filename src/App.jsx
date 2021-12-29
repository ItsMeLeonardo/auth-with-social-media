import "./App.css";

function App() {
  return (
    <>
      <navbar className="Navbar">
        <ul className="Navbar-list">
          <li className="Navbar-item logo">
            <a href="#" className="Navbar-link">
              /*LOGO*/
            </a>
          </li>
          <li className="Navbar-item section-name">
            <a href="#" className="Navbar-link">
              /*HOME*/
            </a>
          </li>
          <li className="Navbar-item profile">
            <a href="#" className="Navbar-link">
              /*Avatar + tooltip*/
            </a>
          </li>
        </ul>
      </navbar>

      <main className="Profile">
        <section className="Profile-header">
          <figure className="Profile-avatar">
            <img
              src="https://images.unsplash.com/photo-1558473840-767aaeeeae45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="name avatar"
            />
            <figcaption className="Profile-avatar-name">Name</figcaption>
            <button className="Profile-edit-mobile">/*ICON 🖊*/</button>
          </figure>
        </section>
        <section className="Profile-info">
          <ul className="Profile-info-list">
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
    </>
  );
}

export default App;
