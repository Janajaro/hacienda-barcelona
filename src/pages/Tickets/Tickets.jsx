import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ticketsContent from "../../content/tickets.json";
import "./Tickets.css";

const Tickets = () => {
  const [imgNumber, setImgNumber] = useState(1);
  const { lang } = useParams();

  const currentContent =
    ticketsContent[lang] || ticketsContent.cs;

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

          <h1>
            {currentContent.textBeforeLink}{" "}
            
            {currentContent.ticketUrl ? (
              <a
                href={currentContent.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentContent.linkText}
              </a>
            ) : (
              <span>{currentContent.linkText}</span>
            )}{" "}

            {currentContent.textAfterLink}
          </h1>
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