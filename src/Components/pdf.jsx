import React from "react";
import resume from "../assets/SALEEM-Shifnas-CV.webp";

const pdf = () => {
  return (
    <div>
      <button className="cv-download" >
        <a href={resume} download="cv">
          Télécharger CV
        </a>
      </button>
    </div>
  );
};
export default pdf;
