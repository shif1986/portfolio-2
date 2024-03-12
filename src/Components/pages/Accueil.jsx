import React from "react";
import { portfolioData } from "../../portfolioData";
import Cards from "../cards";

import image2 from "../../assets/logo-competance.png";

import backround from "../../assets/image-backround.jpg";

export default function Accueil() {
  return (
    <main>
      <section className="headline">
        <div className="headline-content">

        <h1>Bienvenue</h1>
        <h2>
          Je m'appelle Shifnas Saleem, Je suis Freelance, Developpeur Web.
        </h2>
        <p>
          JE SUIS UN FRONTEND DÉVELOPPEUR FREELANCE BASÉ EN FRANCE. JE M`EFFORCE
          DE CONSTRUIRE DES SITES WEBS IMMERSIFS ET DE QUALITÉ GRÂCE À UN CODE
          SOIGNEUSEMENT ÉLABORÉ ET UN DESIGN CENTRÉ SUR LES BESOINS DES
          UTILISATEURS.
        </p>
        </div>

        <img src={backround} alt="image-backround" />
      </section>

      {/* Mes Competances  */}
      <section className="competences">
        <div>
          <h1>Mes Compétences</h1>
          <p>
            En 2023, j’ai suivi la formation Développeur Intégrateur Web (niveau
            Bac+2) au sein de l'ecole OpenClassrooms. J'ai acquis de
            l'expérience avec les langages de développement Web ci-après : Html,
            Css, Javascript, React, Saas.
          </p>

          <div className="logos">
            <img src={image2} alt="html" />
           
          </div>
        </div>
      </section>
    </main>
  );
}
