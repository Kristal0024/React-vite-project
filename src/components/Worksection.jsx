import { useState, useEffect } from "react";
import uiimg from '../assets/ui-ux.jpg';
import uiimg2 from '../assets/ui-ux2.jpg';
import designimg from '../assets/design.jpg';
import designimg2 from '../assets/design2.jpg';
import brandingimg from '../assets/branding.jpg';
import brandingimg2 from '../assets/branding2.jpg';
function Worksection(){
    const workarray=[
        {
            name:"UI/UX",
            src:[uiimg,uiimg2],
        },
        {
            name:"Branding",
            src:[brandingimg,uiimg,brandingimg2,uiimg2],
        },
        {
            name:"Design",
            src:[designimg,designimg2],
        },
        {
            name:"Wordpress",
            src:[designimg,brandingimg,uiimg,brandingimg2,designimg2,uiimg2],
        }
    ]
    const works=[...new Set(workarray.map((work)=>work.name))];
    const[active,setactive]=useState("All");
    const filterimages=active==="All"?[...new Set(workarray.flatMap((work)=>work.src))]:workarray.find((work)=>work.name===active)?.src||[]
    return(
        <>
       <section role="individual-component" className="worksectionwrapper" id="portfolio">
         <div className="worksectionwrapper-head">
            <div className="worksectionwrapper-head-details">
                <h2>My Portfolio</h2>
                <h3>Awsome Works</h3>
            </div>
            <div className="worksectionwrapper-head-btns">
                <button className={active==="All"?"active":""} onClick={()=>setactive("All")}>All</button>
                {works.map((item,index)=>(
                        <button key={index} className={active===item?"active":""} onClick={()=>setactive(item)}>{item}</button>
                ))}
            </div>
        </div>
        <div className="gridwrapper">
                {filterimages.map((img,i)=>(
            <div className={`grid-item ${i % 5 === 0 ? 'tall' : i % 3 === 0 ? 'wide' : i % 4 === 0 ? 'big' : ''}`} key={i}>
                <img  src={img} alt={`work-${i}`} />
                <span className="imgwrapper">
                    <p>Category</p>
                    <h4>Project Title</h4>
                </span>
            </div>
                ))}
        </div>
       </section>
        </>
    )
}
export default Worksection
