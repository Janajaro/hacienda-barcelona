import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import homeContent from "../../content/home.json";
import "./Home.css";

const Home = () => {
  const { lang } = useParams();

  const currentContent = homeContent[lang] || homeContent.cs;

  const [imgNumber, setImgNumber] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgNumber((current) => (current < 5 ? current + 1 : 1));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="home-main">
      <section className="home-hero">
        <div className="home-text">
          <p className="home-annotation">
            {currentContent.textBeforeHighlight}{" "}

            <span className="highlight">
              {currentContent.highlightedText}
            </span>{" "}

            {currentContent.textAfterHighlight}
          </p>
        </div>

        <figure className="home-image-wrapper">
          <img
            src={`/images/Hacienda-Barcelona-fotky-Gabriela-Homolova-(${imgNumber}).jpg`}
            alt="Hacienda Barcelona"
            className="home-image"
          />

          <figcaption className="home-photo-credit">
            © Gabriela Homolová
          </figcaption>
        </figure>
      </section>
    </main>
  );
};

export default Home;