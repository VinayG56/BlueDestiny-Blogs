import "./post.css"
import barcelona from "../../assets/barcelona.jpg"

export default function Post() {
  return (
    <div>
      <div className="post">
      <img className="postImg" src={barcelona} alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Art</span>
            <span className="postCat">Silence</span>
        </div>
        <span className="postTitle">
          Sagrada Família : Holy Family
        </span>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        It is an architectural icon. The Sagrada Família is the most forceful architectural display representing a very specific, tumultuous time in history: the turn of the 20th century when the western world, and Barcelona, were suddenly transformed.
      </p>
    </div>
    </div>
    
  )
}
