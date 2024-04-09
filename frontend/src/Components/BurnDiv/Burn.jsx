// import { FaQuestion } from "react-icons/fa"
import questionImg from "../../assets/images/question.png"

const Burn = () => {
   return (
      <div className="content">
         <div className="burnDiv">
            <div className="centeredText">
               <h2 className="text-styling">?</h2>
            </div>
            <div className="questionMark">
               <img src={questionImg} alt="Question Mark" />
            </div>
         </div>
      </div>
   )
}

export default Burn
