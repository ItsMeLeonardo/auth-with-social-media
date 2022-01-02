import { useImages } from "../../Hooks/useImages";
import { useEffect, useState } from "react";
import { formatDate } from "../../Utils/formatDate";
import useEmblaCarousel from "embla-carousel-react";

function Home() {
  const [emblaRef] = useEmblaCarousel();
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
            <time className="HeroImage-date" dateTime={picture?.created_at}>
              {formatDate(new Date(picture?.created_at))}
            </time>
          </figcaption>
        </figure>
        <h1 className="HeroImage-title">{picture?.tags[0].title}</h1>
      </header>

      <img
        src={picture?.urls.regular}
        alt={picture?.alt_description}
        className="HeroImage-body"
      />

      <footer className="HeroImage-similar embla" ref={emblaRef}>
        <ul className="HeroImage-similar-container embla__container">
          {images.map((image) => (
            <li
              key={image?.id}
              className={`HeroImage-item embla__slide ${
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
