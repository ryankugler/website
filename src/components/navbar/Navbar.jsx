import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo-no-background.png'


const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#learn">About Me</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#resume">Resume</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='website__navbar'>
      <div className='website__navbar-links'>
        <div className='website__navbar-links_logo'>
          <img src = {logo} alt = "logo"></img>
        </div>
        <div className="website__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="website__navbar-sign">
        <button type="button"> Contact Me</button>
      </div>
      <div className="website__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="fff" size = {27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color="fff" size = {27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="website__navbar-menu_container scale-up-center">

            <div className="wesbite__navbar-menu_container-links">
              <Menu/>
            </div>

            <div className="website__navbar-menu_container-links-sign">
              <button type="button">Contact Me</button>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
