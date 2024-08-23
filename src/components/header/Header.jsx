import "./header.css"
import video from './Assets/video.mp4'

export default function Header() {
  return (
    <div className='header'>
      <section className="showcase">
        <video src={video} autoPlay loop muted></video>
        <h1 className="title">Let Your Stories Shine with<span className="name">BlueDestiny!</span></h1>
      </section>
    </div>
  )
}
