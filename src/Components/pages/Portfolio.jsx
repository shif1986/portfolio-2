import React from "react";
import { portfolioData } from "../../portfolioData";
import Cards from "../cards";


export default function Portfolio() {
  return (
    <div>

              {/* Galery Porfolio */}
      <div className="gallerie">
        <h1>Portfolio</h1>
     

      <div className="card-container">
        {portfolioData.map((portfolio) => {
          return (
            <div className="card-list" key={portfolio.id}>
              <Cards
                id={portfolio.id}
                image={portfolio.image}
                name={portfolio.name}
                alt={portfolio.alt}
                language={portfolio.language}
                link={portfolio.link}
              />
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
