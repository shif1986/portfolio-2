import React, { useState } from "react";
import { portfolioData } from "../../portfolioData";
import Cards from "../cards";

export default function Portfolio() {
  // Filter

  const [tag, settag] = useState("all");
  const [filteredPortfolioData, setFilteredPortfolioData] = useState([]);
  useState(() => {
    tag === "all"
      ? setFilteredPortfolioData(portfolioData): setFilteredPortfolioData.filter((image) => image.tag === tag);
  }, [tag]);

  return (
    <div>
      {/* Galery Portfolio */}
      <div className="gallerie">
        <h1>Portfolio</h1>


        {/* Galery Filter */}
        <div className="Portfolio-filter" handlesettag={settag} >
          
          <TagButton name="Tout" handlesettag={settag}/>
          <TagButton name="html,css" handlesettag={settag}/>
          <TagButton name="animation" handlesettag={settag}/>
          <TagButton name="js" handlesettag={settag}/>
          <TagButton name="react" handlesettag={settag}/>
          <TagButton name="wordpress" handlesettag={settag}/>
        </div> {filteredPortfolioData.map(image => <div> {image.imageName}</div>)}</div>

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
 const TagButton = ({name, handlesettag})=> {
    return <button onClick={ () => handlesettag (name) } > {name.toUpperCase()} </button>
  }
