import React from "react";
import { portfolioData } from "../../portfolioData";
import Cards from "../cards";
import image1 from '../../assets/pages.png'
import image2 from '../../assets/html.jpg'
import image3 from '../../assets/css.jpg'
import image4 from '../../assets/js.jpg'
import image5 from '../../assets/react.jpg'
import image6 from '../../assets/sass.jpg'
import image7 from '../../assets/redux.jpg'

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
        <img src={image1} alt="pages" />
       
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
          <img src={image2} alt="html" />
          <img src={image3} alt="css-logo" />
          <img src={image4} alt="js-logo" />
          <img src={image5} alt="react-logo" />
          <img src={image6} alt="sass-logo" />
          <img src={image7} alt="redux-logo" />
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
