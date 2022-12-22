import { useState, useEffect } from 'react';
import '../components/Navbar.css';
import hamburger from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='logo'>
          <Link className="navbar-brand logo" to="/">Newsinsight</Link>
        </div>

        {/* mobile menu icon */}
        <div className='menu-icon' onClick={handleClick}>
          {click ? (
            <img src={close} alt='close icon' />
          ) : (
            <img src={hamburger} alt='hamburger icon' />
          )}
        </div>

        <ul className={click ? 'navbar-nav nav-menu active' : 'navbar-nav nav-menu'}>
          <li className='nav-item menu-item'>
            <Link className="nav-link" to="/business">Business</Link>

          </li>
          <li className='nav-item menu-item'>
            <Link className="nav-link" to="/entertainment">Entertainment</Link>
          </li>
          <li className='nav-item menu-item'>
            <Link className="nav-link" to="/general">General</Link>
          </li>
          <li className='nav-item menu-item'>
            <Link className="nav-link" to="/health">Health</Link>
          </li>
          <li className='nav-item menu-item'>
            <Link className="nav-link" to="/science">Science</Link>
          </li>
          <li className='nav-item menu-item'>
            <Link className="nav-link" to="/sports">Sports</Link>
          </li>
          <li className='nav-item menu-item'>
            <Link className="nav-link" to="/technology">Technology</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default NavBar;