import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <div className="navigation">
      <div className="links">
        <Link to="/">Home</Link>
      </div>
      <div className="links">
        <Link to="/AboutMe">About</Link>
      </div>
      <div className="links">
        <Link to="/Portfolio">Portfolio</Link>
      </div>
      <div className="links">
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navigation;
