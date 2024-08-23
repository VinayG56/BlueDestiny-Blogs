import "./post.css"
import japan from "../../assets/japan.jpg"

export default function Post() {
  return (
    <div>
      <div className="post">
      <img className="postImg" src={japan} alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Silence</span>
            <span className="postCat">Literature</span>
        </div>
        <span className="postTitle">
          Sensoji : Asakusa-Short Grass
        </span>
        <span className="postDate">3 hour ago</span>
      </div>
      <p className="postDesc">
      During the late 1800s, Asakusa was actually Tokyo’s main entertainment district; housing Japan’s famous kabuki theaters, as well as a read light district. Ironic since this is also the site for a popular temple in Sensoji.
      </p>
    </div>
    </div>
    
  )
}
