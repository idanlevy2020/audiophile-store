import "./Footer.css";
import NavBar from "../../components/NavBar/NavBar";

function Footer() {
   const links = [
      { path: "/", text: "HOME" },
      { path: "/headphones", text: "HEADPHONES" },
      { path: "/speakers", text: "SPEAKERS" },
      { path: "/earphones", text: "EARPHONES" },
   ];
   return (
      <div className="Footer">
         <div className="Footer-container flex-column">
            <div className="Footer-part1 flex-row">
               <h2>audiophile</h2>
               <NavBar links={links} flex={"flex-row"}/>
            </div>
            <div className="Footer-part2 flex-row">
               <p className="text">
                  Audiophile is an all in one stop to fulfill your audio needs.
                  We're a small team of music lovers and sound specialists who
                  are devoted to helping you get the most out of personal audio.
                  Come and visit our demo facility - we’re open 7 days a week
               </p>
               <div className="Footer-general-links flex-row">
                  <img src="/icons/facebook.png" alt="facebook" />
                  <img src="/icons/twitter.png" alt="twitter" />
                  <img src="/icons/instagram.png" alt="instagram" />
               </div>
            </div>
            <div className="Footer-part3">
               <p className="text" style={{color: "white"}}> Copyright 2021. All Rights Reserved </p>
            </div>

            <div className="Footer-part4 responsive">
               <p style={{color: "white"}}> Copyright 2021. All Rights Reserved </p>
               <div className="Footer-general-links responsive flex-row">
                  <img src="/icons/facebook.png" alt="facebook" />
                  <img src="/icons/twitter.png" alt="twitter" />
                  <img src="/icons/instagram.png" alt="instagram" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
