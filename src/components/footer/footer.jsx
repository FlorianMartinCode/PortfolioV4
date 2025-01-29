import React from 'react'
import { Link } from 'react-router-dom'
import Cv from '../../assets/cv-florian-martin.pdf'

function footer() {
  return (
    <footer className='footer-content' >
      <div className='footer-border' >
        <Link to={Cv} target="_blank" className='btn-cv'>
          <span>Télécharger le CV</span>
        </Link>
        <p className='copyright'>© 2024 Florian MARTIN. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default footer