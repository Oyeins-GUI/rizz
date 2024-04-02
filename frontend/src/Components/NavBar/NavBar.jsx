import React from "react"
import { FaQuestion } from "react-icons/fa"
import { BrowserRouter as Router, Link } from "react-router-dom"

const NavBar = () => {
   return (
      <Router>
         <nav className="navbar">
            <div className="logoDiv">
               <h1 className="logo">
                  <Link to="/">RIZZ</Link>
               </h1>
            </div>

            <ul className="menu">
               <li className="menu-item">
                  <Link to="frontend\src\Components\LeaderBoardDiv\LeaderBoard.jsx">Points</Link>
               </li>
               <li className="menu-item">
                  <Link to="frontend\src\Components\BurnDiv\Burn.jsx">
                     <FaQuestion />
                  </Link>
               </li>
            </ul>

            <div className="searchDiv">
               <form action="">
                  <input type="text" placeholder="Enter STX wallet address" />
                  <button type="submit">Search</button>
               </form>
            </div>
         </nav>
      </Router>
   )
}

export default NavBar
