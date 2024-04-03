import React from "react"
import { FaQuestion } from "react-icons/fa"
import questionImg from "../../Assets/Images/question.png"

const Burn = () => {
   return (
      <div className="burnDiv">
         <div className="centeredText">
            <h2 className="text-styling">
               <FaQuestion />
            </h2>
         </div>
         <div className="questionMark">
            <img src={questionImg} alt="Question Mark" />
         </div>
      </div>
   )
}

export default Burn
