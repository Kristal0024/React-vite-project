import design2 from "../assets/design2.jpg";
import branding2 from "../assets/branding2.jpg";
import uiux from "../assets/ui-ux.jpg";
import { BsPersonFill } from "react-icons/bs";
import { WiTime10 } from "react-icons/wi";
import { useState, useEffect } from "react";
function Blogsection() {
  const [activeindex, setactiveindex] = useState(0);

  const cardarray = [
    {
      src: design2,
      image: <BsPersonFill />,
      time: <WiTime10 />,
      name: "william",
      date: "07 Aug, 2025",
      detail: "How to make Website From Scratch Easily",
    },
    {
      src: branding2,
      image: <BsPersonFill />,
      time: <WiTime10 />,
      name: "william",
      date: "07 Aug, 2025",
      detail: "Learn CSS Grid and Flexbox",
    },
    {
      src: uiux,
      image: <BsPersonFill />,
      time: <WiTime10 />,
      name: "william",
      date: "07 Aug, 2025",
      detail: "Top 10 JavaScript Tips",
    },
    {
      src: design2,
      image: <BsPersonFill />,
      time: <WiTime10 />,
      name: "william",
      date: "07 Aug, 2025",
      detail: "React Basics for Beginners",
    },
    {
      src: design2,
      image: <BsPersonFill />,
      time: <WiTime10 />,
      name: "william",
      date: "07 Aug, 2025",
      detail: "Understanding Sass in Projects",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setactiveindex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="blogsectionwrapper" id="blog">
        <div className="headers">
          <h1>Blog Posts</h1>
          <h3>Newly Posted Articles</h3>
        </div>
        <div className="blogsectionwrapper-cards">
          {[
            cardarray[activeindex % cardarray.length],
            cardarray[(activeindex + 1) % cardarray.length],
            cardarray[(activeindex + 2) % cardarray.length],
          ].map((item, index) => (
            <div className="blogsectionwrapper-cards-card" key={index}>
              <div className="blogsectionwrapper-cards-card-image">
                <img src={item.src} alt="" />
              </div>
              <div className="blogsectionwrapper-cards-card-card-info">
                <div className="info">
                  <span>
                    {item.image}
                    {item.name}
                  </span>
                  <span>
                    {item.time}
                    {item.date}
                  </span>
                </div>
                <div className="info2">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="blogsectionwrapper-radiobtns">
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
export default Blogsection;
