import { useState } from "react";
import { portfolioData } from "../portfolioData";

// Props permet de reutiliser les codes dans plusiers composents
// je recupere id, images, name etc.. de data, puis j'utilise card composent directement dans portefolio dans une dive

export default function Cards({ id, image, name, alt, language, link }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <h2> {name} </h2>
      <img onClick={toggleModal} className="open-modal" src={image} />
      <p className="open-mdl-text"></p>

      {modal && (
        <div className="modal-backround">
          <div className="modal">
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
              <h2>{name}</h2>
              <h3>{language} </h3>
              <div className="apercu">
                <span>Aperçu :</span>
                <a href={link}> {link} </a>
              </div>

              <img className="image-modale" src={image} alt="images" />
              <button onClick={toggleModal} className="close-modal">
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
