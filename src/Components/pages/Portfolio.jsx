import React, { useEffect, useState } from "react";
import { portfolioData } from "../../portfolioData";
import Cards from "../cards";
import TagButton from "../TagButton";

export default function Portfolio() {
  // Filter

  const [tag, setTag] = useState("all");
  const [filteredPortfolioData, setFilteredPortfolioData] = useState([]);

  useEffect(() => {
    // Quand le composant il est monté
    if (tag === "all") {
      setFilteredPortfolioData(portfolioData);
    } else {
      const filteredData = portfolioData.filter((item) =>
        item.tag.includes(tag)
      );
      setFilteredPortfolioData(filteredData);
      console.log({filteredData});
    }
    console.log('Composant Mounted');
  }, [tag]);
  

  return (
    <div>
      {/* Galery Portfolio */}
      <div className="gallerie">
        <h1>Portfolio</h1>
        {/* Galery Filter */}
        <div className="Portfolio-filter">
          <TagButton setTag={setTag} tag={tag} />
        </div>
        {filteredPortfolioData.map((image) => (
          <div key={image.id}> {image.imageName}</div>
        ))}

      </div>

      <div className="card-container">
        {filteredPortfolioData.map((portfolio) => {
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
              {/* Hover */}
              <div className="portfolio-hover">
                <h3 className="portfolio-title">Plus d'information</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}