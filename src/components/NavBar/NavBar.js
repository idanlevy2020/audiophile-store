import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
   const links = props.links;
   return (
      <div className="NavBar">
         <ul className={"ul "+props.flex}>
            {links.map((link,i) => {
               return (
                  <li key={i}>
                     <Link to={link.path}>{link.text}</Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default NavBar;
