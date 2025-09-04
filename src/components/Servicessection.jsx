import { FaBezierCurve } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { GiAtom } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import cardimg from "../assets/testicon.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
function Services(){
  return(
      <>
      <section role="individual-component" className="servicewrapper" id="service">
        <div className="servicewrapper-header headers">
            <h1>My Services</h1>
            <h3>A brief of Offering Services</h3>
        </div>
        <div className="servicewrapper-details">
            <div className="service">
                <div className="service-animation">
                    </div>
                <div className="service-logo">
                    <span><FaCode /></span>
                </div>
                <div className="service-detail">
                    <h4>Web Development</h4>
                    <ul>
                        <li><FaChevronRight />React Js</li>
                        <li><FaChevronRight />PSD to Html</li>
                        <li><FaChevronRight />Javascript</li>
                    </ul>
                </div>
                <img src={cardimg} alt="" className="cardimg"/>
            </div>
            <div className="service">
                <div className="service-animation">
                    </div>
                <div className="service-logo">
                    <span><GiAtom /></span>
                </div>
                <div className="service-detail">
                    <h4>Graphics Design</h4>
                    <ul>
                        <li><FaChevronRight />Package Design</li>
                        <li><FaChevronRight />Email Signature</li>
                        <li><FaChevronRight />Social Media Banner</li>
                    </ul>
                </div>
                <img src={cardimg} alt="" className="cardimg"/>
            </div>
            <div className="service">
                 <div className="service-animation">
                    </div>
                     <div className="service-logo">
                    <span><FaBezierCurve /></span>
                </div>
                <div className="service-detail">
                    <h4>UI/UX Design</h4>
                    <ul>
                        <li><FaChevronRight />Prototyping</li>
                        <li><FaChevronRight />User Flow Design</li>
                        <li><FaChevronRight />Interaction Design</li>
                    </ul>
                </div>
              <img src={cardimg} alt="" className="cardimg"/>
                 </div>
            </div>
      </section>
    </>
  )
}
export default Services