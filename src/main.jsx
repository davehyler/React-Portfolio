// Import both the react framework, router, as well as individual pages that will be referenced within children elements of the router.
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const router = createBrowserRouter([
  { path: '/', element: <App/>, children: 
    //See Readme for Module 20 Challenge for header example + categories
    [
      { index: true, element: <Home/> },
      { path: '/AboutMe',element: <About/> },
      { path: '/Portfolio', element: <Portfolio/> },
      { path: '/Contact', element: <Contact/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);