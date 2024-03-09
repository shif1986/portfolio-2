import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowUp } from "react-icons/fa6";
import { serviceData } from "../../portfolioData";
import { CgAdd } from "react-icons/cg";
import { FiMinusCircle } from "react-icons/fi";

export default function Service() {
  const [showList, setShowList] = useState({});

  const isToggle = (id) => {
    console.log("showlist", showList);
    console.log("id", id);
 
    setShowList(
      (prevState) => (
        console.log("prevstate", prevState),
        {
          // Destructuration on récupere tout les élements dans l'api ( ...prevState)
          ...prevState,
          [id]: !prevState[id],
        }
      )
    );
  };

  return (
    <div className="container-service">
      <div className="wrapper_service">
        {serviceData.map((service) => {
            
          return (
            <div className="wrapper_list" key={service.id}>
              <div className="wrapper">
                <div className="wrapper_container">
                  <div className="wrapper-title">
                    <h2>{service.titre} </h2>
                  </div>
                  <div
                    onClick={() => isToggle(service.id)}
                    className="wrapper_icon"
                  >
                   

                    {showList[service.id] ? <FiMinusCircle />  : <CgAdd />  }
                  </div>
                </div>

                {showList[service.id] && (
                  <div
                    onClick={() => isToggle(service.id)}
                    className="container-text"
                  >
                    <p> {service.contenu} </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
