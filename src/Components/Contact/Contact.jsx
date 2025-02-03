import React, { useRef } from "react";
import './contact.css';
import walmart from '../../assets/walmart.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';
import adobe from '../../assets/adobe.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import { useDark } from "../../App";
import {motion} from 'framer-motion';


const Contact = () =>{
    const  {darkTheme, toggleTheme} = useDark();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9rqp3us', 'template_huz2y05', form.current, {
            publicKey: 'E_t-_q1uY9ng3VWFw',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <motion.section 
        initial={{opacity:0, x:200}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        id="contactPage">
            {/* <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with include.
                </p>
                <div className="clientImgs">
                    <img src={walmart} alt="walmart" className="clientImg"/>
                    <img src={adobe} alt="adobe" className="clientImg"/>
                    <img src={microsoft} alt="microsoft" className="clientImg"/>
                    <img src={facebook} alt="facebook" className="clientImg"/>
                </div>
            </div> */}
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Your Name" className="name" name="your_name" style={{background: darkTheme? 'rgb(40, 40, 40)': '#edf2fc'}}/>
                    <input type="email" placeholder="Your Email" className="email" name="your_email" style={{background: darkTheme? 'rgb(40, 40, 40)': '#edf2fc'}}/>
                    <textarea name="message" rows="5" placeholder="Your Message" className="msg" style={{background: darkTheme? 'rgb(40, 40, 40)': '#edf2fc'}}></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="facebook" className="link" />
                        <img src={twitterIcon} alt="twitter" className="link" />
                        <img src={youtubeIcon} alt="youtube" className="link" />
                        <img src={instagramIcon} alt="instagram" className="link" />
                    </div>
                </form>
            </div>
        </motion.section>
    );
}

export default Contact;
