import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Tickets.css";
import { translations } from "../../data/translations";

const Tickets = () => {
  const [imgNumber, setImgNumber] = useState(1);
  const { lang } = useParams();

  const t = translations[lang] || translations.cs;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgNumber((current) => (current < 5 ? current + 1 : 1));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="tickets-main">
      <section className="tickets-content">
        <div className="tickets-text">
          <h1>{t.tickets}</h1>
        </div>

        <figure className="tickets-image-wrapper">
          <img
            src={`/images/HB-horizont${imgNumber}.jpg`}
            alt="Hacienda Barcelona"
            className="tickets-image"
          />

          <figcaption className="tickets-photo-credit">
            © Gabriela Homolová
          </figcaption>
        </figure>
      </section>
    </main>
  );
};

export default Tickets;