import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticlesComponent from '../../components/config/ParticlesComponent';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis avec succès ! 🥳', formData);
  };

  return (
    <div className='contact-content' >
      <ParticlesComponent />
      <a href="/" className="home-link">
        <i className="fas fa-home"></i>
      </a>
      <div className='formulaire'>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Entrez votre nom"
            required
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
            required
          />

          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Entrez votre message"
            required
          />

          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className="social-icons">
        <Link to="https://github.com/FlorianMartinCode" target="_blank" rel="noopener noreferrer">
            <img src="https://i.goopics.net/49ioue.png" alt="GitHub" />
        </Link>

        <Link to="https://www.linkedin.com/in/florian-martin-477748266/" target="_blank" rel="noopener noreferrer">
            <img src="https://i.goopics.net/q5woa7.png" alt="LinkedIn" />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
