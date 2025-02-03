import React from "react";
import './Works.css';
import portfolio1 from '../../assets/estate.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/chat.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/doc.png';
import portfolio6 from '../../assets/portfolio-6.png';
import { motion } from 'framer-motion';

const Works = () =>{
    return (
        <motion.section 
        initial={{opacity:0, x:-200}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest detail and making sure that my work is pixel perfect. I am excited to bring my skill and experience to help businesses achieve their goals and create a strong online presence</span>
            <div className="worksImgs">
                <a href="https://real-estate-nu-blush.vercel.app/"><img style={{borderRadius: "2.5%"}} src={portfolio1} alt="" className="worksImg"/></a>
                <a href="https://youtube-clone-six-dusky.vercel.app/"><img style={{borderRadius: "2.5%"}} src={portfolio2} alt="" className="worksImg" /></a>
                <a href="https://chat-gpt-clone-gray-two.vercel.app/"><img style={{borderRadius: "2.5%"}} src={portfolio3} alt="" className="worksImg" /></a>
                <a href="https://responsive-website-beta-sepia.vercel.app/"><img style={{borderRadius: "2.5%"}} src={portfolio4} alt="" className="worksImg" /></a>
                <a href=""><img style={{borderRadius: "2.5%"}} src={portfolio5} alt="" className="worksImg" /></a>
                <a href="https://quizz-app-azure.vercel.app/"><img style={{borderRadius: "2.5%"}} src={portfolio6} alt="" className="worksImg" /></a>
            </div>
            <button className="worksBtn">See More</button>
        </motion.section>
    );
}

export default Works;