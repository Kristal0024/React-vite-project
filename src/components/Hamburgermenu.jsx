import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { TbBriefcaseFilled } from "react-icons/tb";
import { FaQuoteLeft } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import Hamburger from 'hamburger-react';

function Hamburgermenu({ activeComponent, scrolltocomponent }) {
  const[open,setOpen]=useState(false);
  return (
    <>
           <div className="hamburger-icon"> <Hamburger size={24} toggled={open} toggle={setOpen}/></div>
      <div className="Hamburgermenu">
       {open &&  <div className="Hamburgermenu-content">
          <ul className="Hamburgermenu-content-menu">
            <li
              className={activeComponent === "home" ? "active" : ""}
              onClick={() => scrolltocomponent("home")}
            >
              <IoHomeSharp />
              <span>Home</span>
            </li>
            <li
              className={activeComponent === "about" ? "active" : ""}
              onClick={() => scrolltocomponent("about")}
            >
              <FaRegAddressCard />
              <span>About</span>
            </li>
            <li
              className={activeComponent === "service" ? "active" : ""}
               onClick={() => scrolltocomponent("service")}
            >
              <FaFileAlt />
              <span>service</span>
            </li>
            <li
              className={activeComponent === "portfolio" ? "active" : ""}
               onClick={() => scrolltocomponent("portfolio")}
            >
              <TbBriefcaseFilled />
              <span>portfolio</span>
            </li>
            <li
              className={activeComponent === "testimonial" ? "active" : ""}
               onClick={() => scrolltocomponent("testimonial")}
            >
              <FaQuoteLeft />
              <span>Testimonial</span>
            </li>
            <li
              className={activeComponent === "blog" ? "active" : ""}
               onClick={() => scrolltocomponent("blog")}
            >
              <FaBloggerB />
              <span>Blog</span>
            </li>
            <li
              className={activeComponent === "contact" ? "active" : ""}
               onClick={() => scrolltocomponent("contact")}
            >
              <FaEnvelope />
              <span>Contact</span>
            </li>
          </ul>
        </div>}
      </div>
    </>
  );
}
export default Hamburgermenu;
