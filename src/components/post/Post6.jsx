import "./post.css"
import paris from "../../assets/paris.jpg"

export default function Post() {
  return (
    <div>
      <div className="post">
      <img className="postImg" src={paris} alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Architecture</span>
            <span className="postCat">Creativity</span>
        </div>
        <span className="postTitle">
          Eiffel Tower : The Iron Lady  
        </span>
        <span className="postDate">5 hour ago</span>
      </div>
      <p className="postDesc">
        Once you have climbed to the second level, you are up over 100 meters above the city.It took a team of 50 engineers and designers and around 500 offsite and onsite workers two years, two months, and five days to get the Iron Lady ready for her debut at the World’s Fair in 1889.
      </p>
    </div>
    </div>
    
  )
}
