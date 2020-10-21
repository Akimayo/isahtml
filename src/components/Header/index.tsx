import React from 'react'
import {
    Link
} from "react-router-dom";

const Header = () => {
 return (
     <nav>
         <ul>
             <li>
                 <Link to="/">Home</Link>
             </li>
             <li>
                 <Link to="/p5j">P5J</Link>
             </li>
             <li>
                 <Link to="/accessibility">Accessibility</Link>
             </li>
         </ul>
     </nav>
 )
}

export default Header
