import { GrMail } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
function Herosection(){
    return (
<>
<section className="Herosectionwrapper">
    <div className="Herosectionwrapper-coloroverlay">
        <span className="Herosectionwrapper-mail">
<GrMail />
</span>
<div className="Herosectionwrapper-contact">
    <p role="medium">+01 234 567 890</p>
    <p role="medium"> chat@example.com</p>
</div>
<div className="Herosectionwrapper-info">
    <div className="Herosectionwrapper-info-details">
        <h1>Kristal <span>Shrestha</span></h1>
    <p role="large">Frontend Developer</p>
    <p role="medium">I have been working since 2012. I am proficient in ui design, digital marketing & web development.</p>
    <div><button className="button button-primary">Download CV</button></div>
    </div>
    <div className="Herosectionwrapper-info-socialmedia">
        <span><FaFacebookF /></span>
        <span><TiSocialGithub /></span>
        <span><TiSocialLinkedin /></span>
    </div>
</div>
</div>
</section>
</>
    )
}
export default Herosection