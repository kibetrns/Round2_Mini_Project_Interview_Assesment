import { Outlet } from 'react-router'
import './App.css'
import NavRail from './components/nav-rail.component'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to the "/feed" route when the component mounts
    navigate('/feed');
  }, [navigate]); // Add 'navigate' to the dependency array to prevent re-navigating


  return (
    <div className='app'>
      <NavRail />
      <div>
        <Outlet />
      
      </div>
    </div>


  
  )
}

export default App
