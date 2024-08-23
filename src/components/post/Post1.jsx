import "./post.css"
import italy from "../../assets/italy.jpg"

export default function Post() {
  return (
    <div>
      <div className="post">
      <img className="postImg" src={italy} alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Architecture</span>
            <span className="postCat">Peace</span>
        </div>
        <span className="postTitle">
            Italy : Land of Marble  
        </span>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Italy's natural beauty is equally captivating. Along the Amalfi Coast, rugged cliffs plunge into the azure waters of the Mediterranean, while in Tuscany, vineyards stretch as far as the eye can see, producing some of the world's finest wines. 
        
      </p>
    </div>
    </div>
    
  )
}
