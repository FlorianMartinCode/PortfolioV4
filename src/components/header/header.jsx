import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../theme/theme';
import '../../theme/theme.scss';
import Me from '../../assets/me.png';
import { Link } from 'react-scroll';
import { FaEnvelope, FaVideo } from 'react-icons/fa'; // Import des icônes React Icons

function Header() {
  const { darkTheme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  const calendlyContainerRef = useRef(null);
  const calendlyPopupRef = useRef(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme !== null) {
      const parsedTheme = storedTheme === 'true';
      if (parsedTheme !== darkTheme) {
        toggleTheme(parsedTheme);
      }
    }

    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        console.log('Calendly script loaded!');
      };
      script.onerror = () => {
        console.error('Error loading Calendly script.');
      };
      document.body.appendChild(script);
    }

    const handleClickOutside = (e) => {
      if (
        calendlyContainerRef.current &&
        !calendlyContainerRef.current.contains(e.target) &&
        !calendlyPopupRef.current.contains(e.target)
      ) {
        setCalendlyOpen(false); // Ferme le popup si l'utilisateur clique en dehors
        document.body.style.overflow = ''; // Restaure le défilement de la page
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [darkTheme, toggleTheme]);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleContactToggle = () => {
    setContactOpen(!contactOpen);
  };

  const handleCalendlyClick = (e) => {
    e.preventDefault();
    setCalendlyOpen(true);
    document.body.style.overflow = 'hidden'; // Désactive le défilement de la page
  };

  const handleCloseCalendly = () => {
    setCalendlyOpen(false);
    document.body.style.overflow = ''; // Restaure le défilement de la page
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

          <div className="nav-contact" onClick={handleContactToggle}>
            Contact
          </div>

          {contactOpen && (
            <div className="contact-options">
              <a href="mailto:florian.martin700@gmail.com" onClick={() => setContactOpen(false)}>
                <FaEnvelope /> {/* Icône pour le mail */}
              </a>
              <button onClick={handleCalendlyClick}>
                <FaVideo /> {/* Icône pour Calendly (rendez-vous visio) */}
              </button>
            </div>
          )}

          <label className="theme-switch" aria-label={`Switch to ${darkTheme ? 'light' : 'dark'} theme`}>
            <input
              name="checkbox"
              type="checkbox"
              onChange={(e) => {
                toggleTheme(e.target.checked);
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

      {/* Calendly Popup */}
      {calendlyOpen && (
        <div id="calendly-container" className="open" ref={calendlyContainerRef}>
          <div id="calendly-popup" ref={calendlyPopupRef}>
            <button id="calendly-close" onClick={handleCloseCalendly}>
              ×
            </button>
            <iframe
              title="Calendly"
              src="https://calendly.com/florian-martin700"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;