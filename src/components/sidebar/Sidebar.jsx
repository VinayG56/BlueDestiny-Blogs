import "./sidebar.css"
import photo1 from '../header/Assets/photo1.jpg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Admin</span>
        <img src={photo1} alt="" />
        <p>The admin of this blog writing website is incredibly innovative and organized, consistently fostering a supportive and encouraging environment for writers. Their dedication and resourcefulness ensure smooth operations and a thriving blog community.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories In Blogs</span>
        <ul className="sidebarGrid">
            <li className="sidebarGridItem">Life</li>
            <li className="sidebarGridItem">Music</li>
            <li className="sidebarGridItem">Style</li>
            <li className="sidebarGridItem">Sports</li>
            <li className="sidebarGridItem">Cinema</li>
            <li className="sidebarGridItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-x-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}
