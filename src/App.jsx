import Sidebar from "./components/Sidebar";
import Herosection from "./components/Herosection";
import Aboutsection from "./components/Aboutsection";
import Resumesection from "./components/Resumesection";
import Services from "./components/Servicessection";
import Hiresection from "./components/Hiresection";
import Contact from "./components/Contactsection";
import Faq from "./components/Faqsection";
import Worksection from "./components/Worksection";
import Testimonials from "./components/Testimonials";
import Blogsection from "./components/Blogsection";
import "./App.scss";
import { useState, useEffect, useRef } from "react";
import Hamburgermenu from "./components/Hamburgermenu";

import LocomotiveScroll from "locomotive-scroll";
function App() {
  const [activeComponent, setActiveComponent] = useState("home");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const scrollRef = useRef(null);
  useEffect(() => {
    // 1️⃣ Get the scroll container and check if it exists
    const el = document.querySelector("[data-scroll-container]");
    if (!el) return; // exit if container not rendered yet

    // 2️⃣ Initialize LocomotiveScroll
    const scroll = new LocomotiveScroll({
      el,
      smooth: true,

      scrollCallback: ({ scroll }) => {
        const scrollY = scroll?.y || 0;
        const sections = el.querySelectorAll("section");
        let currentsection = "home";
        sections.forEach((section) => {
          const sectiontop = section.offsetTop;
          const sectionheight = section.clientHeight;

          if (scrollY >= sectiontop && scrollY < sectiontop + sectionheight) {
            currentsection = section.getAttribute("id");
          }
        });
        setActiveComponent(currentsection);
      },
    });
    scrollRef.current = scroll;
    const handleresize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleresize);
    return () => {
      scroll.destroy();
      window.removeEventListener("resize", handleresize);
    };
  }, []);
  const scrolltocomponent = (id) => {
    const element = document.getElementById(id);
    if (element && scrollRef.current) {
      scrollRef.current.scrollTo(element, {
        offset: 0,
        duration: 3,
      });
    }
  };

  return (
    <>
      <div className="maincontainer">
        {windowWidth < 992 && (
          <Hamburgermenu
            activeComponent={activeComponent}
            scrolltocomponent={scrolltocomponent}
          />
        )}
        <div className="maincontainer-sidebar">
          {windowWidth >= 992 && (
            <Sidebar
              activeComponent={activeComponent}
              scrolltocomponent={scrolltocomponent}
            />
          )}
        </div>
        <main
          className="maincontainer-main"
          data-scroll-container
          data-scroll-speed={Math.random().toFixed(1)}
        >
          <section id="home">
            <Herosection
              activeComponent={activeComponent}
              scrolltocomponent={scrolltocomponent}
            />
          </section>
          <section id="about">
            <Aboutsection
              activeComponent={activeComponent}
              scrolltocomponent={scrolltocomponent}
            />
          </section>
          <section id="resume">
            <Resumesection
              activeComponent={activeComponent}
              scrolltocomponent={scrolltocomponent}
            />
          </section>
          <section id="service">
            <Services
              activeComponent={activeComponent}
              scrolltocomponent={scrolltocomponent}
            />
          </section>
          <section id="hire">
            <Hiresection
              activeComponent={activeComponent}
              scrolltocomponent={scrolltocomponent}
            />
          </section>
          <section id="faq">
            <Faq
              activeComponent={activeComponent}
              scrolltocomponent={scrolltocomponent}
            />
          </section>
          <section id="work">
            <Worksection
              activeComponent={activeComponent}
              scrolltocomponent={scrolltocomponent}
            />
          </section>
          <section id="testimonial">
            <Testimonials
              activeComponent={activeComponent}
              scrolltocomponent={scrolltocomponent}
            />
          </section>
          <section id="blog">
            <Blogsection
              activeComponent={activeComponent}
              scrolltocomponent={scrolltocomponent}
            />
          </section>
          <section id="contact">
            <Contact
              activeComponent={activeComponent}
              scrolltocomponent={scrolltocomponent}
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
