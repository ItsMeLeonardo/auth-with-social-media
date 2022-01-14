import {
  facebookAuthUrl,
  twitterAuthUrl,
  googleAuthUrl,
} from "../../Services/authWithSocialMedia";

function FormLayout({ title, children }) {
  return (
    <main className="Login">
      <h1 className="Login-title">{title}</h1>
      <section className="Login-row">
        <ul className="Social-content">
          <li className="facebook">
            <a className="Social-item" href={facebookAuthUrl}>
              <i className="gg-facebook" />
            </a>
          </li>
          <li className="twitter">
            <a className="Social-item" href={twitterAuthUrl}>
              <i className="gg-twitter" />
            </a>
          </li>
          <li className="google">
            <a className="Social-item" href={googleAuthUrl}>
              <i className="gg-google" />
            </a>
          </li>
        </ul>
      </section>
      <aside className="small-text">or use your email</aside>
      {children}
    </main>
  );
}

export default FormLayout;
