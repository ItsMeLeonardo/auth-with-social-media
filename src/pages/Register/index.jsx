import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="Login">
      <h1 className="Login-title">Sign in</h1>
      <section className="Login-row">
        <ul className="Social-content">
          <li className="Social-item facebook">
            <i className="gg-facebook"></i>
          </li>
          <li className="Social-item twitter">
            <i className="gg-instagram"></i>
          </li>
          <li className="Social-item google">
            <i className="gg-google"></i>
          </li>
        </ul>
      </section>
      <aside className="small-text">or use your email</aside>
      <section className="Login-row">
        <form className="Form">
          <div className="Form-field">
            <input
              className="Form-input"
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
            />
            <label htmlFor="name" className="Form-label">
              Full name
            </label>
          </div>
          <div className="Form-field">
            <input
              className="Form-input"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <label htmlFor="username" className="Form-label">
              Username
            </label>
          </div>
          <div className="Form-field">
            <input
              className="Form-input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <label htmlFor="email" className="Form-label">
              Email
            </label>
          </div>
          <div className="Form-field">
            <input
              className="Form-input"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <label htmlFor="password" className="Form-label">
              password
            </label>
          </div>
          <div className="Form-aside">
            <label className="Form-label flex-center gap-1" htmlFor="remenber">
              <input
                className="Form-checkbox"
                type="checkbox"
                name="remenber"
                id="remenber"
              />
              <span className="Form-label Link">Remenber me</span>
            </label>
            <a href="#" className="Form-label Link">
              Forgot Password?
            </a>
          </div>
          <div className="Form-field">
            <button className="Form-button">Submit</button>
          </div>
          <div className="Form-aside">
            <a href="#" className="Form-label Link">
              Privacity Policy
            </a>
            <a href="#" className="Form-label Link">
              Terms and coditions
            </a>
          </div>
        </form>
      </section>
      <aside className="small-text">
        Already a member?{" "}
        <Link to="/login" className="Link">
          Login
        </Link>
      </aside>
    </main>
  );
}

export default Register;
