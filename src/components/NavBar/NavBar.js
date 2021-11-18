import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
   const links = props.links;
   return (
      <div className="NavBar">
         <ul>
            {links.map((link,i) => {
               let classname="link"+(i+1);
               return (
                  <li className={classname} key={i}>
                     <Link to={link.path}>{link.text}</Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default NavBar;
