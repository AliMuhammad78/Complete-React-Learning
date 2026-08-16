import {   useState } from "react"

  function LikeButton() { 
          const [liked, setLiked] = useState(false);
          let toggleLike = () => {
        setLiked(!liked);
        
    }

    return (
    <div>
       {
        liked ? <i className="fa-solid fa-heart" style={{color: "blue"}} onClick={toggleLike}></i> : <i className="fa-regular fa-heart" onClick={toggleLike}></i>
       }
    </div>
    )
}
export default LikeButton;