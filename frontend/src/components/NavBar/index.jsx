import { Link } from "react-router-dom"

const NavBar = () => {
   return (
      <nav className="navbar">
         <div className="logoDiv">
            <h1 className="logo">
               <Link to="/">RIZZ</Link>
            </h1>
         </div>

         <ul className="menu">
            <li className="menu-item">
               <Link to="/">Points</Link>
            </li>
            <li className="menu-item">
               <Link to="/burn">?</Link>
            </li>
         </ul>
      </nav>
   )
}

export default NavBar
