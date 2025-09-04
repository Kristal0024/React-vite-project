import sidebarimage from "../assets/profile-avatar.jpg";
import { IoHomeSharp } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { TbBriefcaseFilled } from "react-icons/tb";
import { FaQuoteLeft } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

function Sidebar({activeComponent,scrolltocomponent}) {
  return (
    <>
      <div className="sidebarwrapper">
          <div className="sidebarwrapper-logo">
            <img src={sidebarimage} />
          <button className="sidebarwrapper-button">Kristal Shrestha</button>
          </div>
          <div className="sidebarwrapper-content">
          <ul className="sidebarwrapper-content-menu">
            <li className={activeComponent==="home"?"active":""} onClick={()=>scrolltocomponent("home")}><IoHomeSharp /><span>Home</span></li>
            <li className={activeComponent==="about"?"active":""} onClick={()=>scrolltocomponent("about")}><FaRegAddressCard /><span>About</span></li>
            <li className={activeComponent==="service"?"active":""} onClick={()=>scrolltocomponent("service")}><FaFileAlt /><span>service</span></li>
            <li className={activeComponent==="portfolio"?"active":""} onClick={()=>scrolltocomponent("portfolio")}><TbBriefcaseFilled /><span>portfolio</span></li>
            <li className={activeComponent==="testimonial"?"active":""} onClick={()=>scrolltocomponent("testimonial")}><FaQuoteLeft /><span>Testimonial</span></li>
            <li className={activeComponent==="blog"?"active":""} onClick={()=>scrolltocomponent("blog")}><FaBloggerB /><span>Blog</span></li>
            <li className={activeComponent==="contact"?"active":""} onClick={()=>scrolltocomponent("contact")}><FaEnvelope /><span>Contact</span></li>
          </ul>
        <p>Copyright @ Kristal</p>
        </div>
        </div>
    </>
  );
}
export default Sidebar;
