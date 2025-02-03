import React from "react";
import './Skills.css';
import uiDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import appDesign from '../../assets/app-design.png';
import { useDark } from "../../App";
import { motion } from 'framer-motion';


const Skills = () =>{
    const  {darkTheme, toggleTheme} = useDark();
    return (
        <motion.section
        initial={{opacity:0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}} 
        id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDescription">I am a skilled and passionate web developer with expertise in HTML, CSS, JavaScript, React, and Node.js. I create visually appealing, user-friendly, and responsive websites. With a keen eye for detail and strong design principles, I craft seamless digital experiences. Proficient in Adobe Photoshop and Canva, I blend creativity with functionality to deliver impactful designs.</span>
            <div className="skillBars">
                <div className="skillBar" style={{background: darkTheme? 'rgb(50, 50, 50)': '#edf2fc'}}>
                    <img src={uiDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Crafting intuitive and engaging designs that bring ideas to life. Seamless experiences, tailored for impact.</p>
                    </div>
                </div>
                <div className="skillBar" style={{background: darkTheme? 'rgb(50, 50, 50)': '#edf2fc'}}>
                    <img src={webDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Building visually stunning and responsive websites that captivate users and drive results.</p>
                    </div>
                </div>
                <div className="skillBar" style={{background: darkTheme? 'rgb(50, 50, 50)': '#edf2fc'}}>
                    <img src={appDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Creating sleek, user-friendly app interfaces for seamless functionality and unforgettable experiences.</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Skills;