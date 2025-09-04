import { IoMailSharp } from "react-icons/io5";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Header from './Header';
function Contact(){
    const Contactlist=[
        {
            icon:<IoMailSharp />,
            name:"Chat@gmail.com"
        },
          {
            icon:<TbBrandWhatsapp />,
            name:"+123 456 7890"
        },
          {
            icon:<FaLocationDot />,
            name:"208 Maliha Square"
        }
    ]
return(
    <>
    <section role="individual-componentsecond" className="contactwrapper" id="contact">
        <Header heading="Contact" subheading="Get in Touch"/>
        <div className="contactwrapper-details">
            <div className="contactwrapper-details-form">
                <input type="text" placeholder="Subject"/>
                <input type="text"placeholder="Your name" />
                <input type="email" placeholder="Your Email Here"/>
                <textarea name="message" placeholder="Drop message" id=""></textarea>
                <div className="buttonholder">
                    <button className="button button-send">Send Me</button>
                </div>
            </div>
            {/* <p role="large"><IoMailSharp />Chat@gmail.com</p>
            <p role="large"><TbBrandWhatsapp />+123 456 7890</p>
            <p role="large"><FaLocationDot />208 Maliha Square,
            Dubai, UAE</p> */}
<div className="container">{
    Contactlist.map((item,index ) =>(
        <>
        <div className="contactwrapper-details-map"  key={index}>
        <p role="large">{item.icon}{item.name}</p>
        </div>
        </>
    ))
}</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.609077968113!2d83.46243300000002!3d27.707882000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687a9e810c4af%3A0x330398c480aee01b!2sPari%20Butwal!5e0!3m2!1sen!2snp!4v1754801165598!5m2!1sen!2snp" width="450" height="220" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
    <footer className="footer">
        <span>
            all rights reserved by themetum.com 2025.
        </span>
        <div className="footer-details">
            <ul>
                <li>Faqs /</li>
                <li>Privacy policy /</li>
                <li>services</li>
            </ul>
        </div>
        <div className="footer-socialmedia">
            <span><FaFacebookF /></span>
            <span><FaGithubAlt /></span>
            <span><FaLinkedinIn /></span>
        </div>
    </footer>
    </>
)
}
export default Contact