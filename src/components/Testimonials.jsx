import { BiSolidQuoteLeft } from "react-icons/bi";
import profile1 from "../assets/profile1.jpg";
import client1 from "../assets/client1.jpg";
import client3 from "../assets/client3.jpg";
import { useState, useEffect } from "react";
import circleimg from '../assets/testicon.png';
function Testimonials() {
  const [activeindex, setactiveindex] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
      setactiveindex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const detailarray = [
    {
      quote: <BiSolidQuoteLeft />,
      detail:
        "Printing and typesetting industry Lorem Ipsum has the industry's standard dummy text ever the since the 1500s when an unknown took.",
      src: client1,
      name: "Devid Nikolas",
      post: "Chairman, square inc",
    },
    {
      quote: <BiSolidQuoteLeft />,
      detail:
        "Printing and typesetting industry Lorem Ipsum has the industry's standard dummy text ever the since the 1500s when an unknown took.",
      src: profile1,
      name: "Devid Nikolas",
      post: "Chairman, square inc",
    },
    {
      quote: <BiSolidQuoteLeft />,
      detail:
        "Printing and typesetting industry Lorem Ipsum has the industry's standard dummy text ever the since the 1500s when an unknown took.",
      src: client3,
      name: "Devid Nikolas",
      post: "Chairman, square inc",
    },
    {
      quote: <BiSolidQuoteLeft />,
      detail:
        "Printing and typesetting industry Lorem Ipsum has the industry's standard dummy text ever the since the 1500s when an unknown took.",
      src: profile1,
      name: "Devid Nikolas",
      post: "Chairman, square inc",
    },
  ];
  return (
    <>
      <section role="individual-component" className="testimonialwrapper">
        <div className="headers">
          <h1>Testimonial</h1>
          <h3>People What Are Saying</h3>
        </div>
        <div className="testimonialwrapper-cards">
          {[
            detailarray[activeindex % detailarray.length],
            detailarray[(activeindex + 1) % detailarray.length],
          ].map((item, index) => (
            <div className="testimonialwrapper-cards-card" key={index}>
              <div className="testimonialwrapper-cards-card-quote">
                {item.quote}
              </div>
              <div className="testimonialwrapper-cards-card-info">
                <p>{item.detail}</p>
              </div>
              <div className="testimonialwrapper-cards-card-profile">
                <div className="profileimg">
                  <img src={item.src} alt="" />
                </div>
                <div className="detail">
                  <h6>{item.name}</h6>
                  <p>{item.post}</p>
                </div>
              </div>
                <img src={circleimg} alt="" className="circleimg"/>
            </div>
          ))}
        </div>
        <div className="testimonialwrapper-radiobtns">
          <button
            onClick={() => setactiveindex(0)}
            className={activeindex === 0 ? "active" : ""}
          ></button>
          <button
            onClick={() => setactiveindex(1)}
            className={activeindex === 1 ? "active" : ""}
          ></button>
          <button
            onClick={() => setactiveindex(2)}
            className={activeindex === 2 ? "active" : ""}
          ></button>
        </div>
      </section>
    </>
  );
}
export default Testimonials;
