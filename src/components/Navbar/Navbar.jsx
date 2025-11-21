import React,{useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg' //dropdown arrow icon
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = React.useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {                /*scroll access left to right*/
        navRef.current.classList.add("navbar-scrolled");
      } else {
        navRef.current.classList.remove("navbar-scrolled");
      }
    });
  }, []);
  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="Search Icon" className='icons' />
        <p>Kids</p>
        <img src={bell_icon} alt="Bell Icon" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className='profile' />
          <img src={caret_icon} alt="Caret Icon" />
          <div className="dropdown">
            <p onClick={() => {logout()}}>Sign Out</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar