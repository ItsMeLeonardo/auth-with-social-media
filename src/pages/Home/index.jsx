import { useImages } from "../../Hooks/useImages";
import { useEffect, useState } from "react";

function Home() {
  const { images } = useImages({});
  const [picture, setPicture] = useState();

  useEffect(() => {
    if (picture) return;
    setPicture(images[0]);
  }, [images]);

  return (
    <main className="Home">
      <header className="HeroImage-data">
        <figure className="HeroImage-user">
          <img
            src={picture?.user?.profile_image.medium}
            alt={`avatar of ${picture?.user?.name}`}
            className="HeroImage-avatar"
          />
          <figcaption className="HeroImage-info">
            <p className="HeroImage-username">{picture?.user.username}</p>
            <time className="HeroImage-date">{picture?.created_at}</time>
          </figcaption>
        </figure>
        <h1 className="HeroImage-title">{picture?.tags[0].title}</h1>
      </header>

      <img
        src={picture?.urls.regular}
        alt={picture?.alt_description}
        className="HeroImage-body"
      />

      <footer className="HeroImage-similar">
        <ul className="HeroImage-similar-container">
          {images.map((image) => (
            <li
              key={image?.id}
              className={`HeroImage-item ${
                image?.id === picture?.id ? "active" : ""
              }`}
            >
              <img
                src={image?.urls.small}
                alt={image?.alt_description}
                onClick={() => setPicture(image)}
              />
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}

export default Home;

/**
 *           <li className="HeroImage-item">
 *             <img
 *               src="https://images.unsplash.com/photo-1640875257365-5676d2eafa2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
 *               alt="dune"
 *             />
 *           </li>
 *           <li className="HeroImage-item">
 *             <img
 *               src="https://images.unsplash.com/photo-1640829460897-001d82e0680a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
 *               alt="dune"
 *             />
 *           </li>
 *           <li className="HeroImage-item">
 *             <img
 *               src="https://images.unsplash.com/photo-1640654204373-ccb1a0caa890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
 *               alt="dune"
 *             />
 *           </li>
 *           <li className="HeroImage-item active">
 *             <img
 *               src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwyODcyMzF8MHwxfHNlYXJjaHwxMXx8bmF0dXJlfGVufDB8fHx8MTY0MDkwMjQ3Nw&ixlib=rb-1.2.1"
 *               alt="dune"
 *             />
 *           </li>
 */
