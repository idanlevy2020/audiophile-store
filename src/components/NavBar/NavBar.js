import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
   const links = props.links;

      /* <div class="topnav" id="myTopnav">
         <a href="index.html">דף הבית</a>
         <a href="aboutus.html">אודותינו</a>
         <a href="engagement_rings_catalog.html">טבעות אירוסין</a>
         <a href="specialrings.html">טבעות בעיצוב אישי</a>
         <a href="articales.html">מאמרים</a>
         <a href="contactus.html">צור קשר</a>
         <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
      </div> */


// function myFunction() {
//    let div = document.getElementById("myTopnav");
//    if (div.className === "topnav") {
//        div.className += " responsive"; //div.className="myTopnav responsive"
//    } else {
//        div.className = "topnav";
//    }
// }


   return (
      <div className="NavBar">
         <ul className={props.flex}>
            {links.map((link,i) => {
               return (
                  <li className="link" key={i}>
                     <Link to={link.path}>{link.text}</Link>
                  </li>
               );
            })}
         </ul>
         {/* <Link to="javascript:void(0);" style="font-size:15px;" class="icon" onClick="myFunction()">&#9776;</Link> */}
      </div>
   );
}

export default NavBar;
