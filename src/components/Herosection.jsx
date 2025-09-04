import { GrMail } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
function Herosection(){
    return (
<>
<section className="Herosectionwrapper" id="home">
    <div className="Herosectionwrapper-coloroverlay">
        <span className="Herosectionwrapper-coloroverlay-mail">
<GrMail />
</span>
<div className="Herosectionwrapper-coloroverlay-contact">
    <p role="medium">+01 234 567 890</p>
    <p role="medium"> chat@example.com</p>
</div>
<div className="Herosectionwrapper-coloroverlay-info">
    <div className="Herosectionwrapper-coloroverlay-info-details">
        <h1>Kristal <span>Shrestha</span></h1>
    <p role="large">Frontend Developer</p>
    <p role="medium" className="discription">I have been working since 2012. I am proficient in ui design, digital marketing & web development.</p>
    <div><button className="button button-primary">Download CV</button></div>
    </div>
</div>
    <div className="Herosectionwrapper-coloroverlay-socialmedia">
        <span><FaFacebookF /></span>
        <span><TiSocialGithub /></span>
        <span><TiSocialLinkedin /></span>
    </div>
</div>
</section>
</>
    )
}
export default Herosection