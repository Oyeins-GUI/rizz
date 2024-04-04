// import { FaQuestion } from "react-icons/fa"
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

         <div className="searchDiv">
            <form action="">
               <input type="text" placeholder="Enter STX wallet address" />
               <button type="submit">Search</button>
            </form>
         </div>
      </nav>
   )
}

export default NavBar
