import Sidebar from './components/Sidebar';
import Herosection from './components/Herosection';
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
    </main>
    </div>
    </>
  )
}

export default App
