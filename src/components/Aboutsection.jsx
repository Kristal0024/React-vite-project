import aboutimg from '../assets/about-me.png';
import { FaUserTie } from "react-icons/fa";
import { TiSocialSkype } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { MdCake } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import { TbMoodNerd } from "react-icons/tb";
function About() {
  return (
    <>
      <section role="individual-component" className='Aboutsectionwrapper'>
        <div className="Aboutsectionwrapper-details">
          <div className="Aboutsectionwrapper-details-left">
            <img src={aboutimg} alt="" />
          </div>
          <div className="Aboutsectionwrapper-details-right">
            <h1>About Me</h1>
            <h3>Creative Designer</h3>
            <p>
              I am dedicated his life to learning what makes humans tick. He
              studies, researches and reads everything hecan, and shares his
              findings with his clients. His philosophy is to learn, test,
              analyse, improve and re-test. His motto is stay agile. I'm a
              Freelancer Front-end Developer with over 3 years of experience.
              I'm from San Francisco.<br /> I code and create web elements for amazing
              people around the world. I like work with new people. New people
              new Experiences.
            </p>
            <div className="Aboutsectionwrapper-contact">
                <ul>
                <li><FaUserTie />Kristal Shrestha</li>
                <li><TiSocialSkype />Chat@kristal</li>
                <li><FiMail />chat@example.com</li>
            </ul>
            <ul>
                <li><FaLocationDot />205 NewYork, USA</li>
                <li><MdCake />14 jan, 1988</li>
                <li><FaWhatsapp />123 456 7899</li>
            </ul>
            </div>
          </div>
        </div>
        <div className="Aboutsectionwrapper-work">
            <div className="fun-fact">
                <span><FaRegCalendarDays /></span>
               <div className="fun-fact-disc">
                 <p>1000</p>
                <span>Working Hours</span>
               </div>
            </div>
             <div className="fun-fact">
                <span><BsGlobe2 /></span>
               <div className="fun-fact-disc">
                 <p>550</p>
                <span>Total Projects</span>
               </div>
            </div>
             <div className="fun-fact">
                <span><TbBulb /></span>
               <div className="fun-fact-disc">
                 <p>12</p>
                <span>Years journey</span>
               </div>
            </div>
             <div className="fun-fact">
                <span><TbMoodNerd /></span>
               <div className="fun-fact-disc">
                 <p>102</p>
                <span>Total Clients</span>
               </div>
            </div>
        </div>
      </section>
    </>
  );
}
export default About;
