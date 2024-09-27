
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

function App() 
//See https://reactrouter.com/components/outlet for navbar/Outlet/Footer usage below.
{ 
  return (<div className='background'><Navbar/><main className="mx-3"><Outlet/></main><Footer/></div>) 
}

export default App
