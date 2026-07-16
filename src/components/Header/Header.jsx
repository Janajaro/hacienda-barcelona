import { Link } from "react-router-dom";
import { translations } from "../../data/translations.jsx";

const Header = ({ lang }) => {
  const currentLang = lang || "cs";
  const nextLang = currentLang === "cs" ? "en" : "cs";
  const t = translations[currentLang] || translations.cs;

  return (
    <header className="header-nav">
      <Link to={`/${currentLang}`} className="header-link">
        <div className="hero-logotype">Hacienda Barcelona</div>

        <div className="hero-logotype-date">
          <div className="hero-logotype-date-days">7. — 8. 08.</div>
          <div className="hero-logotype-date-year">2026</div>
        </div>
      </Link>

      <nav className="header-sub-nav" aria-label="Main navigation">
        <Link to={`/${currentLang}/info`} className="header-link">
          {t.navInfo}
        </Link>

        <Link to={`/${currentLang}/lineup`} className="header-link">
          {t.navLineUp}
        </Link>

        <Link to={`/${currentLang}/tickets`} className="header-link">
          {t.navTickets}
        </Link>

        <Link to={`/${nextLang}`} className="header-link">
          {t.navLang}
        </Link>
      </nav>
    </header>
  );
};

export default Header;