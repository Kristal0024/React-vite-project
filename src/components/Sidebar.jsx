import sidebarimage from "../assets/profile-avatar.jpg";
import { IoHomeSharp } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { TbBriefcaseFilled } from "react-icons/tb";
import { FaQuoteLeft } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

function Sidebar() {
  return (
    <>
      <div className="sidebarwrapper">
          <div className="sidebarwrapper-logo">
            <img src={sidebarimage} />
          <button className="sidebarwrapper-button">Kristal Shrestha</button>
          </div>
          <div className="sidebarwrapper-content">
          <ul className="sidebarwrapper-content-menu">
            <li><IoHomeSharp /><span>Home</span></li>
            <li><FaRegAddressCard /><span>About</span></li>
            <li><FaFileAlt /><span>service</span></li>
            <li><TbBriefcaseFilled /><span>portfolio</span></li>
            <li><FaQuoteLeft /><span>Testimonial</span></li>
            <li><FaBloggerB /><span>Blog</span></li>
            <li><FaEnvelope /><span>Contact</span></li>
          </ul>
        <p>Copyright @ Kristal</p>
        </div>
        </div>
    </>
  );
}
export default Sidebar;
