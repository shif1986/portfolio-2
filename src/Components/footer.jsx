import React from "react";

export default function footer() {
  return (
    <footer className="">
      <div className="tout-droit">
        <h3>Shifnas Saleem </h3>
        <p>© 2023 Tous les droits sont réservés</p>
      </div>

      {/* <link>https://www.facebook.com/Shifnasperso/ 
      <i class="fa-brands fa-facebook"></i> </link>
      <p>Mail</p>
    <link rel="stylesheet" href="mailto:m.shifnas@gmail.com" /> */}
      <div>
        <h3>Telephone</h3>
        <p>0782195609</p>
      </div>
      <div>
        <h3>Mail</h3>
        <a href = "mailto:m.shifnas@gmail.com">m.shifnas@gmail.com</a>
        <p></p>
        
      </div>
      {/* <small>Mentions légales</small> */}
    </footer>
  );
}
