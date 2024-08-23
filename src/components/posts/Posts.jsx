import Post1 from "../post/Post1"
import Post2 from "../post/Post2"
import Post3 from "../post/Post3"
import Post4 from "../post/Post4"
import Post5 from "../post/Post5"
import Post6 from "../post/Post6"
import "./posts.css"

export default function Posts() {
  return (
    <div className="posts">
      <Post1/>
      <Post2/>
      <Post3/>
      <Post4/>
      <Post5/>
      <Post6/>
    </div>
  )
}
