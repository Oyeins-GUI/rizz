import Burn from "./Components/BurnDiv/Burn"
import LeaderBoard from "./Components/LeaderBoardDiv/LeaderBoard"
import NavBar from "./Components/NavBar/NavBar"

function App() {
   return (
      <div>
         <NavBar />
         <div className="content">
            <LeaderBoard />
            <Burn />
         </div>
      </div>
   )
}

export default App
