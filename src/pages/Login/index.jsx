import "./styles.css";

function Login() {
  return (
    <main className="Login">
      <h1 className="Login-title">Sign up</h1>
      <section className="Login-row">
        <ul className="Social-content">
          <li className="Social-item facebook">
            <i className="gg-facebook"></i>
          </li>
          <li className="Social-item twitter">
            <i className="gg-instagram"></i>
          </li>
          <li className="Social-item linkedinf">
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
        <a href="#" className="Link">
          Login
        </a>
      </aside>
    </main>
  );
}

export default Login;
