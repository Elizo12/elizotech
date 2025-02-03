import React, { useContext } from "react";
import './Footer.css';
import MyContext, { useDark } from "../../App";

const Footer = () =>{
    const  {darkTheme, toggleTheme} = useDark();
    return (
        <footer className="footer" style={{background: darkTheme? "rgb(40, 40, 40)":"#edf2fc"}}>
            Copyright &#169; 2025 Tarhepey Elijah. All rights received.
        </footer>
    );
}

export default Footer;
