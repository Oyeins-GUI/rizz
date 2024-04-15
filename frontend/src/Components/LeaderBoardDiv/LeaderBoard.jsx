import calculatePoint from "../../utils/calculatePoint"
import { useRizzData } from "../../hooks/useRizzData"
import { useState } from "react"

const LeaderBoard = () => {
   const { isPending, error, data } = useRizzData()
   const [walletAddress, setWalletAdress] = useState("")

   const handleSearch = (e) => {
      e.preventDefault()
   }

   return (
      <div className="leaderBoard">
         <div>
            <h2 className="text-center text-blackColor">Rizz Points</h2>
         </div>

         <div className="searchDiv">
            <form onSubmit={handleSearch}>
               <input
                  type="text"
                  name="address"
                  value={walletAddress}
                  onChange={(e) => setWalletAdress(e.target.value)}
                  placeholder="Enter STX wallet address"
               />
               <button type="submit">Search</button>
            </form>
         </div>

         <table>
            <thead className="tableHeader">
               <tr>
                  <th>Rank</th>
                  <th>Wallet Address</th>
                  <th>Minted Rizz</th>
                  <th>Points</th>
               </tr>
            </thead>
            <tbody className="leaderBoard_cell p-3 text-sm">
               {isPending ? (
                  <tr>Loading...</tr>
               ) : (
                  data
                     ?.filter((item) => {
                        return walletAddress.toLowerCase() === ""
                           ? item
                           : item.wallet.toLowerCase().includes(walletAddress.toLowerCase())
                     })
                     .map((item, index) => (
                        <tr key={index}>
                           <td>{index + 1}</td>
                           <td>{item.wallet}</td>
                           <td>{item.balance}</td>
                           <td>{calculatePoint(item.balance)}</td>
                        </tr>
                     ))
               )}

               {error ? <tr>{error}</tr> : null}
            </tbody>
         </table>
      </div>
   )
}

export default LeaderBoard
