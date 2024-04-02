import React from "react"

const LeaderBoard = () => {
   const data = [
      {
         id: 1,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
         points: "100",
      },
      {
         id: 2,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MgSNYVE3VGZJSRTPGZmM",
         points: "95",
      },
      {
         id: 3,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNeVE3VGZJSRTPGZhM",
         points: "80",
      },
      {
         id: 4,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
         points: "100",
      },
      {
         id: 5,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MgSNYVE3VGZJSRTPGZmM",
         points: "90",
      },
      {
         id: 6,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNeVE3VGZJSRTPGZhM",
         points: "91",
      },
      {
         id: 7,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
         points: "82",
      },
      {
         id: 8,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MgSNYVE3VGZJSRTPGZmM",
         points: "83",
      },
      {
         id: 9,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNeVE3VGZJSRTPGZhM",
         points: "88",
      },
      {
         id: 10,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
         points: "60",
      },
      {
         id: 11,
         walletAddress: "ST1PQHQKV0RJXZFYmDGX8MgSNYVE3VGZJSRTPGZmM",
         points: "77",
      },
      {
         id: 12,
         walletAddress: "ST1PQHQKV0RJXZFYbDGX8MNSNeVE3VGZJSRTPGZhM",
         points: "79",
      },
      {
         id: 13,
         walletAddress: "ST1PQHQKV0RJXZFh1DGX8MgSNYVE3VGZJSRTPGZmM",
         points: "45",
      },
      {
         id: 14,
         walletAddress: "ST1PQHQKV0RJXZrY1DGX8MNSNeVE3VGZJSRTPGZhM",
         points: "50",
      },
      {
         id: 15,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
         points: "60",
      },
      {
         id: 16,
         walletAddress: "ST1PQHQKV0RJXZFYmDGX8MgSNYVE3VGZJSRTPGZmM",
         points: "77",
      },
      {
         id: 17,
         walletAddress: "ST1PQHQKV0RJXZFYbDGX8MNSNeVE3VGZJSRTPGZhM",
         points: "79",
      },
      {
         id: 18,
         walletAddress: "ST1PQHQKV0RJXZFh1DGX8MgSNYVE3VGZJSRTPGZmM",
         points: "45",
      },
      {
         id: 19,
         walletAddress: "ST1PQHQKV0RJXZrY1DGX8MNSNeVE3VGZJSRTPGZhM",
         points: "50",
      },
      {
         id: 20,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
         points: "60",
      },
      {
         id: 21,
         walletAddress: "ST1PQHQKV0RJXZFYmDGX8MgSNYVE3VGZJSRTPGZmM",
         points: "77",
      },
      {
         id: 22,
         walletAddress: "ST1PQHQKV0RJXZFYbDGX8MNSNeVE3VGZJSRTPGZhM",
         points: "79",
      },
      {
         id: 23,
         walletAddress: "ST1PQHQKV0RJXZFh1DGX8MgSNYVE3VGZJSRTPGZmM",
         points: "45",
      },
      {
         id: 24,
         walletAddress: "ST1PQHQKV0RJXZrY1DGX8MNSNeVE3VGZJSRTPGZhM",
         points: "50",
      },
      {
         id: 25,
         walletAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
         points: "60",
      },
      {
         id: 26,
         walletAddress: "ST1PQHQKV0RJXZFYmDGX8MgSNYVE3VGZJSRTPGZmM",
         points: "77",
      },
      {
         id: 27,
         walletAddress: "ST1PQHQKV0RJXZFYbDGX8MNSNeVE3VGZJSRTPGZhM",
         points: "79",
      },
      {
         id: 28,
         walletAddress: "ST1PQHQKV0RJXZFh1DGX8MgSNYVE3VGZJSRTPGZmM",
         points: "45",
      },
      {
         id: 29,
         walletAddress: "ST1PQHQKV0RJXZrY1DGX8MNSNeVE3VGZJSRTPGZhM",
         points: "50",
      },
   ]

   return (
      <div className="leaderBoard">
         <div>
            <h2 colSpan="3" className="text-center text-whiteColor">
               Rizz Points
            </h2>
         </div>
         <table>
            <thead>
               <tr>
                  <th>S/N</th>
                  <th>Wallet Address</th>
                  <th>Points</th>
               </tr>
            </thead>
            <tbody className="leaderBoard_cell">
               {data.map((item) => (
                  <tr key={item.id}>
                     <td>{item.id}</td>
                     <td>{item.walletAddress}</td>
                     <td>{item.points}</td>
                  </tr>
               ))}
            </tbody>
         </table>
         <hr className="endPage" />
      </div>
   )
}

export default LeaderBoard
