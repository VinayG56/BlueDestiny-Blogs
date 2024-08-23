import "./write.css"
import image from '../about/assets/image1.jpg'

export default function Write() {
  return (
    <div className="write" id="write">
        <img className="writeImg" src={image} alt="" />
      <form className="writeForm">
         <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="" class="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" name="" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" name="" id="" className="writeInput" autoFocus={true}/>
         </div>
         <div className="writeFormGroup">
            <textarea placeholder="Tell your story...." type="text" className="writeInput writeText" id="" cols="30" rows="10"></textarea>
         </div>
         <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
