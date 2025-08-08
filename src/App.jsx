import Sidebar from './components/Sidebar';
import Herosection from './components/Herosection';
import Aboutsection from './components/Aboutsection';
import Resumesection from './components/Resumesection';
import Services from './components/Servicessection';
import Hiresection from './components/Hiresection';
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
    </main>
    </div>
    </>
  )
}

export default App
