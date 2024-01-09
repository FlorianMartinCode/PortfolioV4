import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../theme/theme';
import '../../theme/theme.scss';
import Me from '../../assets/me.png';
import { Link } from 'react-scroll';

function Header() {
  const { darkTheme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isContactPage = location.pathname === '/contact';

  return (
    <header>
      <div className="me">
        <img src={Me} alt="Photographie de Florian" />
        <h1>Flo.</h1>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <div className="nav-links">
          {!isContactPage && (
            <Link to="home" smooth={true} offset={-100} onClick={() => setMenuOpen(false)}>
              Accueil
            </Link>
          )}
          {!isContactPage && (
            <Link to="about" smooth={true} offset={-100} onClick={() => setMenuOpen(false)}>
              À propos
            </Link>
          )}
          {!isContactPage && (
            <Link to="portfolio" smooth={true} offset={-99} onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
          )}
          {!isContactPage && (
            <a className="nav-contact" href="/contact" >
              Contact
            </a>
          )}
           
          <label className="theme-switch">
            <input
              name="checkbox"
              type="checkbox"
              onChange={toggleTheme}
              checked={darkTheme}
            />
            <span className="toggle">
              <i className={`fas ${darkTheme ? 'fa-moon' : 'fa-sun'}`}></i>
            </span>
          </label>
        </div>
        <div className="nav-toggle" onClick={handleToggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
