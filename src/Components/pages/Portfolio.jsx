import React from "react";
import { portfolioData } from "../../portfolioData";
import Cards from "../cards";

export default function Portfolio() {
  return (
    <div>
      <section className="headline">
        <h1>Bienvenue</h1>
        <h2>
          Je m'appelle Shifnas Saleem, Je suis Freelance, Developpeur Web.
        </h2>
        <p>
          JE SUIS UN FRONTEND DÉVELOPPEUR FREELANCE BASÉ EN FRANCE. JE M`EFFORCE DE
          CONSTRUIRE DES SITES WEBS IMMERSIFS ET DE QUALITÉ GRÂCE À UN CODE
          SOIGNEUSEMENT ÉLABORÉ ET UN DESIGN CENTRÉ SUR LES BESOINS DES
          UTILISATEURS.
        </p>
        <img src="/pages.png" alt="pages" />
       
      </section>

              {/* Mes Competances  */}
      <section className="competences" >
        <div>
          <h1>Mes Compétences</h1>
          <p>En 2023, j’ai suivi la formation Développeur Intégrateur
             Web (niveau Bac+2) au sein de l'ecole OpenClassrooms.
             

            J'ai acquis de l'expérience avec les langages de développement Web ci-après :
            Html, Css, Javascript, React, Saas, Redux.
          </p>
          
          <div className="logos" >
          <img  src="/html.jpg"  alt="html-logo"  />
          <img src="/css.jpg" alt="css-logo" />
          <img src="/js.jpg" alt="js-logo" />
          <img src="/react.jpg" alt="react-logo" />
          <img src="/sass.jpg" alt="sass-logo" />
          <img src="/redux.jpg" alt="redux-logo" />
          </div>

        </div>
      </section>
              {/* Galery Porfolio */}
      <div className="p-title">
        <h1>Portfolio</h1>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
