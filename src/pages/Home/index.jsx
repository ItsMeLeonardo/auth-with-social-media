function Home() {
  return (
    <main className="Home">
      <header className="HeroImage-data">
        <figure className="HeroImage-user">
          <img
            src="https://images.unsplash.com/photo-1616461046183-f62780d4f879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
            className="HeroImage-avatar"
          />
          <figcaption className="HeroImage-info">
            <p className="HeroImage-username">Anna Doe</p>
            <time className="HeroImage-date">13 hour ago</time>
          </figcaption>
        </figure>
        <h1 className="HeroImage-title">Photo info</h1>
      </header>

      <img
        src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwyODcyMzF8MHwxfHNlYXJjaHwxMXx8bmF0dXJlfGVufDB8fHx8MTY0MDkwMjQ3Nw&ixlib=rb-1.2.1"
        alt="home"
        className="HeroImage-body"
      />

      <footer className="HeroImage-similar">
        <ul className="HeroImage-similar-container">
          <li className="HeroImage-item">
            <img
              src="https://images.unsplash.com/photo-1640875257365-5676d2eafa2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="dune"
            />
          </li>
          <li className="HeroImage-item">
            <img
              src="https://images.unsplash.com/photo-1640829460897-001d82e0680a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="dune"
            />
          </li>
          <li className="HeroImage-item">
            <img
              src="https://images.unsplash.com/photo-1640654204373-ccb1a0caa890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="dune"
            />
          </li>
          <li className="HeroImage-item active">
            <img
              src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwyODcyMzF8MHwxfHNlYXJjaHwxMXx8bmF0dXJlfGVufDB8fHx8MTY0MDkwMjQ3Nw&ixlib=rb-1.2.1"
              alt="dune"
            />
          </li>
        </ul>
      </footer>
    </main>
  );
}

export default Home;
