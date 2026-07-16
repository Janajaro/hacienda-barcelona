import { useState } from "react";
import { bands } from "../../data/bands";
import BandCard from "../BandCard/BandCard";

import "./BandsSection.css";

const BandsSection = () => {
  const [openBandSlug, setOpenBandSlug] = useState(null);

  const handleToggleBand = (clickedSlug) => {
    setOpenBandSlug((currentOpenSlug) =>
      currentOpenSlug === clickedSlug ? null : clickedSlug
    );
  };

  const sortedBands = [...bands].sort((a, b) =>
    a.name.localeCompare(b.name, "cs", { sensitivity: "base" })
  );

  return (
    <div className="bands-container">
      {sortedBands.map((oneBand) => {
        const isOpen = openBandSlug === oneBand.slug;

        return (
          <div key={oneBand.slug} className="band">

            <div className="band-title-row">

              <button
                type="button"
                className={isOpen ? "band-button active" : "band-button"}
                onClick={() => handleToggleBand(oneBand.slug)}
              >
                {oneBand.name}
              </button>

            </div>

            {isOpen && <BandCard band={oneBand} />}

          </div>
        );
      })}
    </div>
  );
};

export default BandsSection;