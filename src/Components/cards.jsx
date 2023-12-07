import { useState } from "react";
import { portfolioData } from "../portfolioData";

export default function Cards({ id, image, name, alt,language,link }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <h2> {name} </h2>
      <img onClick={toggleModal} className="open-modal" src={image} />
      <p className="open-mdl-text" ></p>

      {modal && (
        <div className="modal-backround" >
         <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2>{name}</h2>
            <h3>{language} </h3>
            <div className="apercu" >
            <span>Aperçu :</span>
            <a href={link}> {link} </a>
            </div>
           
            <img src={image} alt="images" />
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
