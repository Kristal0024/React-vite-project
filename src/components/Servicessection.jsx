import { FaBezierCurve } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
function Services(){
  return(
      <>
      <section role="individual-component" className="servicewrapper">
        <div className="servicewrapper-header headers">
            <h1>My Services</h1>
            <h3>A brief of Offering Services</h3>
        </div>
        <div className="servicewrapper-details">
            <div className="service">
                <div className="service-logo">
                    <span><FaBezierCurve /></span>
                </div>
                <div className="service-detail">
                    <h4>Branding</h4>
                    <ul>
                        <li><FaChevronRight />Logo design</li>
                        <li><FaChevronRight />Brand Guide</li>
                        <li><FaChevronRight />Brand printing</li>
                    </ul>
                </div>
            </div>
            <div className="service">
                <div className="service-logo">
                    <span><FaBezierCurve /></span>
                </div>
                <div className="service-detail">
                    <h4>Branding</h4>
                    <ul>
                        <li><FaChevronRight />Logo design</li>
                        <li><FaChevronRight />Brand Guide</li>
                        <li><FaChevronRight />Brand printing</li>
                    </ul>
                </div>
            </div>
            <div className="service">
                 <div className="service-animation">
                    </div>
                     <div className="service-logo">
                    <span><FaBezierCurve /></span>
                </div>
                <div className="service-detail">
                    <h4>Branding</h4>
                    <ul>
                        <li><FaChevronRight />Logo design</li>
                        <li><FaChevronRight />Brand Guide</li>
                        <li><FaChevronRight />Brand printing</li>
                    </ul>
                </div>
              
                 </div>
            </div>
      </section>
    </>
  )
}
export default Services