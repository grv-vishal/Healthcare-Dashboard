import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header className='header-position'/>
      <div className='dashboard'>
       <Sidebar className='sidebar-position'/>
       <Dashboard className='dashboard-position'/>
      </div> 
    </div>
  );
}

export default App;
