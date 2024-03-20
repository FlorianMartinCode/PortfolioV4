import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { useTheme } from '../../theme/theme';
import '../../theme/theme.scss';
import Me from '../../assets/me.png';
import { Link } from 'react-scroll';

function Header() {
  const { darkTheme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme !== null) {
      const parsedTheme = storedTheme === 'true';
      if (parsedTheme !== darkTheme) {
        toggleTheme(parsedTheme);
      }
    }
  }, [toggleTheme, darkTheme]);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="me">
        <img src={Me} alt="Photographie de Florian" />
        <h1>Flo.</h1>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <div className="nav-links">
            <Link to="home" smooth={true} offset={-100} onClick={() => setMenuOpen(false)}>
              Accueil
            </Link>
            <Link to="about" smooth={true} offset={-100} onClick={() => setMenuOpen(false)}>
              À propos
            </Link>
            <Link to="portfolio" smooth={true} offset={-99} onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
            <a className="nav-contact" href="mailto:florian.martin700@gmail.com">
              Contact
            </a>

          <label className="theme-switch">
            <input
              name="checkbox"
              type="checkbox"
              onChange={(e) => {
                toggleTheme(e.target.checked);
                // Enregistrer le thème sélectionné dans le stockage local
                localStorage.setItem('theme', JSON.stringify(e.target.checked));
              }}
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

