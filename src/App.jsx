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

function App() {
const [activeComponent,setActiveComponent]=useState("home");
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
  }
  window.addEventListener("scroll",handlescroll);
  return ()=>{
    window.removeEventListener("scroll",handlescroll);
  }
},[]);
const scrolltocomponent=(id)=>{
const element= document.getElementById(id)
  if(element) element.scrollIntoView({behavior:"smooth"});
}

  return (
    <>
    <div className="maincontainer">
      <div className='maincontainer-sidebar'>
        <Sidebar activeComponent={activeComponent}
        scrolltocomponent={scrolltocomponent}
        />
      </div>
     <main className='maincontainer-main'>
      <Herosection/>
      <Aboutsection/>
      <Resumesection/>
      <Services/>
      <Hiresection/>
      <Faq/>
      <Worksection/>
      {/* <Testimonials/> */}
      {/* <Blogsection/> */}
      {/* <Contact/> */}
    </main>
    </div>
    </>
  )
}

export default App
