import React,{ useState } from "react"; 
import emailjs from "@emailjs/browser";



const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
      const messageSucess = document.querySelector(".message-success");
      const messageErreur = document.querySelector(".messageErreur");

    e.preventDefault();
    // Email id Service, tamplate, id key
    const serviceId = `service_id`;
    const templateId = `template_59ipf1j`;
    const publicKey = `cV8tOQ2IAe7pn9xwY`;

    // create a new object key, contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Shifnas Saleem",
      message: message,
    };
    // Send the email using emailJS

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((Response) => {
          console.log("Email sent successfully!", Response);
          messageSucess.innerHTML =
            "<p class='messageSuccess'> Votre message a été envoyé, Nous vous contacterons bientôt! </p>";


        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
            // Supprime le message après 2,5 secondes
            // messageSucess.innerHTML = "";
          }, );
        
      })
      .catch((error) => {
        console.log("error sending email", error);
        messageErreur.innerHTML = "<p class='messageErreur'> Veuillez remplir tous les champs </p>";
     
        
      });
  };
  return (

    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h1>Prenez Contact</h1>
        <h2>Échanger est le meilleur moyen de balayer tout questionnement !</h2>
        <p>
          Avant toute chose, je vous invite à faire un tour sur mes services
          afin de mieux connaitre mon expertise. Spécialistes de la création,
          refonte et gestion de site internet, Je suis disponible pour répondre
          à vos questions.
        </p>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit"> Envoyer</button>
        {/* 
        <span className={emailSent ? 'Visible' :undefined} > 
          Merci pour votre message, je prend contacte avec vous bientot! </span>
           */}
      </form>

      <div className="message-success"></div>
    </div>
  );
};

export default ContactForm;
