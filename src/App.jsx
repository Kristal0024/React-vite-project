import Sidebar from './components/Sidebar';
import Herosection from './components/Herosection';
import Aboutsection from './components/Aboutsection';
import Resumesection from './components/Resumesection';
import Services from './components/Servicessection';
import Hiresection from './components/Hiresection';
import Contact from './components/Contactsection';
import './App.scss';

function App() {

  return (
    <>
    <div className="maincontainer">
      <div className='maincontainer-sidebar'>
        <Sidebar/>
      </div>
     <main className='maincontainer-main'>
      <Herosection/>
      <Aboutsection/>
      <Resumesection/>
      <Services/>
      <Hiresection/>
      <Contact/>
    </main>
    </div>
    </>
  )
}

export default App
