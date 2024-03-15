import PropTypes from "prop-types";
import { resultTexts } from "./survey-components/resulttexts";
import { levelTexts } from "./survey-components/levelTexts";
import { locationTexts } from "./survey-components/locationTexts";
import { companyTexts } from "./survey-components/companyTexts";

const resultTitle = (choicesScore) => {
  let title = "";
  {
    resultTexts.map(({ text, score }) => {
      if (score <= choicesScore.displayChoices) {
        title = text;
      }
    });
    return title;
  }
};

const levelCheck = (displayLevel) => {
  let levelText = "";
  {
    levelTexts.map(({ text, level }) => {
      if (level === displayLevel.displayLevel) {
        levelText = text;
      }
    });
  }
  return levelText;
};

const locationCheck = (displayLocation) => {
  let locationText = "";
  {
    locationTexts.map(({ text, location }) => {
      console.log(text);
      if (location === displayLocation.displayLocation) {
        locationText = text;
      }
    });
  }
  return locationText;
};

const companyCheck = (displayCompany) => {
  let companyText = "";
  let companyImg = "";
  {
    companyTexts.map(({ text, company, img }) => {
      console.log(text);
      if (company === displayCompany.displayCompany) {
        companyText = text;
        companyImg = img;
      }
    });
  }
  return (
    <div>
      <p>"{companyText}"</p>
      <p>- {displayCompany.displayCompany}</p>
      <img src={companyImg} alt={displayCompany.displayCompany} />
    </div>
  );
};

export const Result = ({
  displayLevel,
  displayChoices,
  displayLocation,
  displayCompany,
}) => {
  return (
    <div className="result-container">
      <h2>{resultTitle({ displayChoices })}</h2>
      <p className="result">{levelCheck({ displayLevel })}</p>
      <p className="result">{locationCheck({ displayLocation })}</p>
      <div className="result company">{companyCheck({ displayCompany })}</div>

      <p className="result">Your level: {displayLevel}</p>
      <p className="result">Your score: {displayChoices}</p>
      <p className="result">Your location: {displayLocation}</p>
      <p className="result">Your company: {displayCompany}</p>
    </div>
  );
};

Result.propTypes = {
  displayLevel: PropTypes.string,
  displayChoices: PropTypes.number,
  displayLocation: PropTypes.string,
  displayCompany: PropTypes.string,
};
