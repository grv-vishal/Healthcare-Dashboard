import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
       <Sidebar className='sidebar-position'/>
       <Dashboard className='dashboard-position'/>
    </div>
  );
}

export default App;
