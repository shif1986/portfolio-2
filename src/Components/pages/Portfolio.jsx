import React, { useState } from "react";
import { portfolioData } from "../../portfolioData";
import Cards from "../cards";
import TagButton from "../TagButton";

export default function Portfolio() {
  // Filter

  const [tag, setTag] = useState("all");
  const [filteredPortfolioData, setFilteredPortfolioData] = useState([]);

  // useState(() => {
  //   tag === "all"
  //     ? setFilteredPortfolioData(portfolioData)
  //     : setFilteredPortfolioData.filter((image) => image.tag === tag);
  // }, [tag]);

  const updateItem = portfolioData.filter(
    (currentItem) => currentItem.tag.includes(tag) || tag === "all"
  );
  console.log({updateItem});

  

  const extractUniqueCategories = (data) => {
    const categories = data.reduce((acc, item) => {
      console.log({acc});
      console.log({item});
      for (const category of item.tag) {
        if (!acc.includes(category)) {
          acc.push(category);
        }
        return acc;
      }
      
  return categories
    })};
  
  const uniqueCategories = extractUniqueCategories(portfolioData);



  return (
    <div>
      {/* Galery Portfolio */}
      <div className="gallerie">
        <h1>Portfolio</h1>
        {/* Galery Filter */}
        <div className="Portfolio-filter" >
          <TagButton categories={uniqueCategories}  updateItem={updateItem}  setTag={setTag} />
        
        </div>
        {filteredPortfolioData.map((image) => (
          <div key={image.id}> {image.imageName}</div>
        ))}
      </div>

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

