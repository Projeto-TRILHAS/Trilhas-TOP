import React from 'react'
import "./Cover.css";
import coverVideo2 from "../../assets/media/coverVideo2.mp4";


const Cover = () => {
    return (
        <div className= "cover-container">
            <video className="video" src={coverVideo2} autoPlay loop muted></video>
            <h1>Trilhas-TOP</h1>
            <p>Venha curtir uma boa trilha com sua família.</p>
            <p>Brasil | Manaus- AM</p>
        
        </div>
    )
}

export default Cover
