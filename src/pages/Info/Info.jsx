import { useParams } from "react-router-dom";
import infoTexts from "../../content/info.json";
import "./Info.css";

const Info = () => {
  const { lang } = useParams();

  const currentTexts = infoTexts[lang] || infoTexts.cs;

  return (
    <div className="main-container-info">
      <div className="info-wrapper">
        <div className="info-wrapper-imgs">
          <img
            src="/images/HB-horizont7.jpg"
            alt="Hacienda Barcelona festival"
          />

          <img
            src="/images/HB-V-1.jpg"
            alt="Hacienda Barcelona festival"
          />

          <img
            src="/images/HB-horizont6.jpg"
            alt="Hacienda Barcelona festival"
          />

          <img
            src="/images/HB-V-2.jpg"
            alt="Hacienda Barcelona festival"
          />
        </div>

        <div className="info-wrapper-texts">
          {currentTexts.map((oneText, index) => (
            <div key={`${oneText.header}-${index}`}>
              <h2>{oneText.header}</h2>
              <p>{oneText.text}</p>
            </div>
          ))}

          <div className="info-wrapper-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5265.175492082429!2d14.7102698!3d48.7133601!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDQyJzQ3LjgiTiAxNMKwNDInNDkuMCJF!5e0!3m2!1sen!2scz!4v1777111308583!5m2!1sen!2scz"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Festival location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;