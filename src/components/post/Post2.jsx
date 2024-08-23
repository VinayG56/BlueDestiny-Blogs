import "./post.css"
import china_wall from "../../assets/china_wall.jpg"

export default function Post() {
  return (
    <div>
      <div className="post">
      <img className="postImg" src={china_wall} alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Art</span>
            <span className="postCat">History</span>
        </div>
        <span className="postTitle">
            China Wall : Dragon's Backbone  
        </span>
        <span className="postDate">2 hour ago</span>
      </div>
      <p className="postDesc">
      We were not prepared for the Great Wall. From Beijing we had been on the coach for an hour and a half, travelling in a bubble of smog. Unexpectedly we made out mountains on the horizon and, as we approached, the smog lifted.
      </p>
    </div>
    </div>
    
  )
}
