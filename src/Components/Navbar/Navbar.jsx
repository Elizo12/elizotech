import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/Mylogo.png';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';
import Menu from '../../assets/menu_icon.svg';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import { useDark } from "../../App";

const Navbar = () =>{
    const [showMenu, setShowMenu]=useState(false);
    const  {darkTheme, toggleTheme} = useDark();

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                {/* <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link> */}
            </div>
            <button className="desktopMenuBtn" style={{color: darkTheme? "black": "white"}} onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavoir: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuBtnImg"/>Contact Me
            </button>
            <img src={darkTheme? sun:moon} alt="" id="icon" onClick={toggleTheme}/>
            <img src={Menu} alt="Menu" className="mobMenu" onClick={()=>{setShowMenu(!showMenu)}}/>
            {showMenu?
                <div className="navMenu" >
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Clients</Link>
                {/* <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Contact</Link> */}
            </div>:null
            }
        </nav>
    );
}

export default Navbar;
