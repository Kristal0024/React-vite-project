import { FaCircle } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
function Resumesection() {
  return (
    <>
      <section role="individual-component" className="Resumesectionwrapper">
        <div className="Resumesectionwrapper-header headers">
          <h1>My Resume</h1>
          <h3>Education and Experience</h3>
        </div>
        <div className="Resumesectionwrapper-experience">
          <div className="Resumesectionwrapper-experience-individual">
            <div className="Resumeborder">
              <div className="Resumeborder-boxes">
                <div className="box">
                  <div className="box-logo">
                    <FiPenTool />
                  </div>
                  <div className="box-detail">
                    <h5>UI/UX Designer</h5>
                    <p>Apple Inc (2017 - 2020)</p>
                    <p>
                      Contrary the on way yollis pellentesque pellentesque
                      feugiat risus met.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="box-logo">
                    <p>logo</p>
                  </div>
                  <div className="box-detail">
                    <h5>UI/UX Designer</h5>
                    <p>Apple Inc (2017 - 2020)</p>
                    <p>
                      Contrary the on way yollis pellentesque pellentesque
                      feugiat risus met.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="box-logo">
                    <FaCode />
                  </div>
                  <div className="box-detail">
                    <h5>UI/UX Designer</h5>
                    <p>Apple Inc (2017 - 2020)</p>
                    <p>
                      Contrary the on way yollis pellentesque pellentesque
                      feugiat risus met.
                    </p>
                  </div>
                </div>
                <div className="circle">
                  <span>
                    <FaCircle />
                  </span>
                  <span>
                    <FaCircle />
                  </span>
                  <span>
                    <FaCircle />
                  </span>
                </div>
              </div>
            </div>
            <div className="Resumeborder">
              <div className="Resumeborder-boxes">
                <div className="box">
                  <div className="box-logo">
                    <FaUserGraduate />
                  </div>
                  <div className="box-detail">
                    <h5>UI/UX Designer</h5>
                    <p>Apple Inc (2017 - 2020)</p>
                    <p>
                      Contrary the on way yollis pellentesque pellentesque
                      feugiat risus met.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="box-logo">
                    <GiGraduateCap />
                  </div>
                  <div className="box-detail">
                    <h5>UI/UX Designer</h5>
                    <p>Apple Inc (2017 - 2020)</p>
                    <p>
                      Contrary the on way yollis pellentesque pellentesque
                      feugiat risus met.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="box-logo">
                    <IoDocumentTextOutline />
                  </div>
                  <div className="box-detail">
                    <h5>UI/UX Designer</h5>
                    <p>Apple Inc (2017 - 2020)</p>
                    <p>
                      Contrary the on way yollis pellentesque pellentesque
                      feugiat risus met.
                    </p>
                  </div>
                </div>
                <div className="circle">
                  <span>
                    <FaCircle />
                  </span>
                  <span>
                    <FaCircle />
                  </span>
                  <span>
                    <FaCircle />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Resumesectionwrapper-progress">
          <div className="Resumesectionwrapper-progress-left">
            <div className="progressbar">
              <h5>
                Web Development <span>85%</span>
              </h5>
              <progress value={80} max={100}></progress>
            </div>
            <div className="progressbar">
              <h5>
                Graphics Design <span>85%</span>
              </h5>
              <progress value={80} max={100}></progress>
            </div>
            <div className="progressbar">
              <h5>
                UI/UX Design <span>85%</span>
              </h5>
              <progress value={80} max={100}></progress>
            </div>
          </div>
          <div className="Resumesectionwrapper-progress-right">
            <div className="progressbar">
              <h5>
                Web Development <span>85%</span>
              </h5>
              <progress value={80} max={100}></progress>
            </div>
            <div className="progressbar">
              <h5>
                Graphics Design <span>85%</span>
              </h5>

              <progress value={80} max={100}></progress>
            </div>
            <div className="progressbar">
              <h5>
                UI/UX Design <span>85%</span>
              </h5>
              <progress value={80} max={100}></progress>
            </div>
          </div>
        </div>
        <div className="Resumesectionwrapper-button">
          <button className="button button-secondary">Download CV</button>
        </div>
      </section>
    </>
  );
}
export default Resumesection;
