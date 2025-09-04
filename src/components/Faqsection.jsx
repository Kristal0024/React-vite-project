import Accordion from 'react-bootstrap/Accordion';
import Header from './Header';
function Faq(){
return(
    <>
    <section role="individual-component" className="faqwrapper">
      <Header heading="FAQS" subheading="Have any questions?"/>
    <div className="faqwrapper-accordion">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. What service do i offer ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>2. How will I complete your project?
			 </Accordion.Header>
            <Accordion.Body>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>

                   <Accordion.Item eventKey="2">
            <Accordion.Header>3. How will you pay me?
			 </Accordion.Header>
            <Accordion.Body>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>

                   <Accordion.Item eventKey="3">
            <Accordion.Header>4. Why will you hire for your project?
			 </Accordion.Header>
            <Accordion.Body>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>

                  <Accordion.Item eventKey="4">
            <Accordion.Header>5. How will you get final project?
			 </Accordion.Header>
            <Accordion.Body>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>

                  <Accordion.Item eventKey="5">
            <Accordion.Header>6. what is the process & my time zone?
			 </Accordion.Header>
            <Accordion.Body>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </div>
</section>
    </>
)
}
export default Faq