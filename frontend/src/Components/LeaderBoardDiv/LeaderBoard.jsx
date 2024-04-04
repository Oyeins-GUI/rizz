import { useQuery } from "@tanstack/react-query"
import calculatePoint from "../../utils/calculatePoint"

const LeaderBoard = () => {
   const { isPending, error, data } = useQuery({
      queryKey: ["rizz-data"],
      queryFn: async () => {
         const res = await fetch("https://satscreener.com/api/getStx20sItem/rizz")
         return await res.json()
      },
      retry: 2,
   })

   return (
      <div className="leaderBoard">
         <div>
            <h2 className="text-center text-blackColor">Rizz Points</h2>
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
               {isPending
                  ? "Loading..."
                  : data
                    ? data.map((item, index) => (
                         <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.wallet}</td>
                            <td>{item.balance}</td>
                            <td>{calculatePoint(item.balance)}</td>
                         </tr>
                      ))
                    : error
                      ? "An error has occurred"
                      : null}
            </tbody>
         </table>
      </div>
   )
}

export default LeaderBoard
