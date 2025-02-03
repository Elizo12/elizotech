import React from "react";
import './intro.css';
import bg from '../../assets/portfolio.png';
import hire from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion';

const Intro = () =>{
    return (
       <motion.section 
       initial={{opacity:0, x:-200}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        id="intro">
        <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span class="introName">Elijah</span> <br/>Website Developer</span>
                <p className="introPara">I am a skilled and passionate web developer with experience in creating <br/>visually appealing and user-friendly websites.</p>
                <Link><button className="btn"><img src={hire} alt="HireMe" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
       </motion.section>
    );
}

export default Intro;