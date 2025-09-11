import Sidebar from './components/Sidebar';
import Herosection from './components/Herosection';
import Aboutsection from './components/Aboutsection';
import Resumesection from './components/Resumesection';
import Services from './components/Servicessection';
import Hiresection from './components/Hiresection';
import Contact from './components/Contactsection';
import Faq from './components/Faqsection';
import Worksection from './components/Worksection';
import Testimonials from './components/Testimonials';
import Blogsection from './components/Blogsection';
import './App.scss';
import { useState,useEffect } from 'react';
import Hamburgermenu from './components/Hamburgermenu';

function App() {
const [activeComponent,setActiveComponent]=useState("home");
const[windowWidth,setWindowWidth]=useState(window.innerWidth);
useEffect(()=>{
  const handlescroll=()=>{
    const sections=document.querySelectorAll("section");
    let currentsection="home";
    sections.forEach((section)=>{
      const sectiontop=section.offsetTop;
      const sectionheight=section.clientHeight;

      if(window.scrollY >= sectiontop && window.scrollY<sectiontop+sectionheight){
        currentsection=section.getAttribute("id");
      }
    });
    setActiveComponent(currentsection);
  };
   const handleresize = () => {
      setWindowWidth(window.innerWidth);
    };
  window.addEventListener("scroll",handlescroll);
   window.addEventListener("resize",handleresize);
  return ()=>{
    window.removeEventListener("scroll",handlescroll);
    window.removeEventListener("resize", handleresize);
  }
},[]);
const scrolltocomponent=(id)=>{
const element= document.getElementById(id)
  if(element) element.scrollIntoView({behavior:"smooth"});
}

  return (
    <>
    <div className="maincontainer">
      {windowWidth < 992 && (<Hamburgermenu activeComponent={activeComponent}
        scrolltocomponent={scrolltocomponent} />) }
      <div className='maincontainer-sidebar'>
        {windowWidth >= 992 && (<Sidebar activeComponent={activeComponent}
        scrolltocomponent={scrolltocomponent} />)}
      </div>
     <main className='maincontainer-main'>
      <Herosection/>
      <Aboutsection/>
      <Resumesection/>
      <Services/>
      <Hiresection/>
      <Faq/>
      <Worksection/>
      <Testimonials/>
      <Blogsection/>
      <Contact/>
    </main>
    </div>
    </>
  )
}

export default App
