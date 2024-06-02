// import questionImg from "../../Assets/Images/question.jpg"

// const Burn = () => {
//    return (
//       <div className="content">
//          <div className="burnDiv">
//             <div className="centeredText">
//                <h2 className="text-styling">?</h2>
//             </div>
//             <div className="questionMark">
//                <img src={questionImg} alt="Question Mark" />
//             </div>
//          </div>
//       </div>
//    )
// }

// export default Burn

import { useState } from "react"
import music from "../../Assets/music/music.mp3"
import image from "../../Assets/Images/banner.jpg"

const Burn = () => {
   const [isPlaying, setIsPlaying] = useState(false)

   const togglePlay = () => {
      setIsPlaying(!isPlaying)
   }

   return (
      <div className="burnDiv">
         <div className="centeredText">
            <h2 className="text-styling">?</h2>
         </div>
         <div className="centered-banner">
            <img src={image} alt="banner image" className="small-square-image" />
         </div>

         <div className="music-player">
            <audio src={music} controls autoPlay={false} loop={true} />
            <button onClick={togglePlay}>{isPlaying}</button>
         </div>
      </div>
   )
}

export default Burn
