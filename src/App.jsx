import Sidebar from './components/Sidebar';
import Herosection from './components/Herosection';
import Resumesection from './components/Resumesection';
import Services from './components/Servicessection';
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
      <Resumesection/>
      <Services/>
    </main>
    </div>
    </>
  )
}

export default App
