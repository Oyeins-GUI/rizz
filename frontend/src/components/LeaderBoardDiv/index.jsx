import calculatePoint from "../../utils/calculatePoint"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import useDebounce from "../../hooks/useDebounce"

const LeaderBoard = () => {
   const { isPending, error, data } = useQuery({
      queryKey: ["rizz-data"],
      queryFn: async () => {
         const res = await fetch("https://rizz-backend-4v2n.onrender.com/api")
         return await res.json()
      },
      retry: 2,
   })
   const [walletAddress, setWalletAdress] = useState("")
   const debouncedAddress = useDebounce(walletAddress, 500)

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
                        return debouncedAddress.toLowerCase() === ""
                           ? item
                           : item.wallet.toLowerCase().includes(debouncedAddress.toLowerCase())
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

               {error ? <tr>An error occured</tr> : null}
            </tbody>
         </table>
      </div>
   )
}

export default LeaderBoard
