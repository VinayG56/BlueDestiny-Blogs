import "./post.css"
import maldives from "../../assets/maldives.jpg"

export default function Post() {
  return (
    <div>
      <div className="post">
      <img className="postImg" src={maldives} alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Nature</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Maldives : Money Islands  
        </span>
        <span className="postDate">2 hour ago</span>
      </div>
      <p className="postDesc">
      Comprising of 26 natural atolls, Maldives has channels of dual islands with a beautiful scenic backdrop and beautiful palm trees. Encircled by lagoons blessed with crystal clear waters, Maldives is an unusual holiday destination with a lot of beautiful accommodation options.
      </p>
    </div>
    </div>
    
  )
}
