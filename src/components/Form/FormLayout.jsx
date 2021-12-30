function FormLayout({ title, children }) {
  return (
    <main className="Login">
      <h1 className="Login-title">{title}</h1>
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
      {children}
    </main>
  );
}

export default FormLayout;
