import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutData from '../../data/about.json'

const images = {
  creative: 'https://i.goopics.net/ui9pim.jpg',
  optimistic: 'https://i.goopics.net/acg1b6.jpg',
  dedicated: 'https://i.goopics.net/hlr474.jpg',
  collaborative: 'https://i.goopics.net/ra3gf2.png',
};

function Home() {

  const [backgroundImage, setBackgroundImage] = useState(images.creative);
  const [selectedTitle, setSelectedTitle] = useState('creative');

  useEffect(() => {
    const homeElement = document.querySelector('.home');
    homeElement.style.backgroundImage = `url('${backgroundImage}')`;

    return () => {
      homeElement.style.backgroundImage = '';
    };
  }, [backgroundImage]);

  const edu = aboutData.education;

  return (
    <main>
      <div className="social-icons">
        <Link to="https://github.com/FlorianMartinCode" target="_blank" rel="noopener noreferrer">
          <img src="https://i.goopics.net/49ioue.png" alt="GitHub" />
        </Link>

        <Link to="https://www.linkedin.com/in/florian-martin-477748266/" target="_blank" rel="noopener noreferrer">
          <img src="https://i.goopics.net/q5woa7.png" alt="LinkedIn" />
        </Link>
      </div>

      <section id='home' >
        <div className="scrolling-bar">
          <p className="scrolling-text">Accueil</p>
          <p className="scrolling-text">Accueil</p>
          <p className="scrolling-text">Accueil</p>
          <p className="scrolling-text">Accueil</p>
          <p className="scrolling-text">Accueil</p>
          <p className="scrolling-text">Accueil</p>
        </div>

        <div className="home">
          <div className='home-left'>
            <h2>Salut, je m'appelle</h2>
            <h2 className='home-left-name' >Florian Martin</h2>
            <h2>est je suis développeur</h2>
            <h2>Front-End</h2>
            <h2>à Paris et aux alentours 📍</h2>
          </div>
          <div className='home-right'>
          <h2
            className={`creative ${selectedTitle === 'creative' ? 'active' : ''}`}
            onMouseEnter={() => {
              setBackgroundImage(images.creative);
              setSelectedTitle('creative');
            }}
          >
            Créatif
          </h2>
          <h2
            className={`optimistic ${selectedTitle === 'optimistic' ? 'active' : ''}`}
            onMouseEnter={() => {
              setBackgroundImage(images.optimistic);
              setSelectedTitle('optimistic');
            }}
          >
            Optimiste
          </h2>
          <h2
            className={`dedicated ${selectedTitle === 'dedicated' ? 'active' : ''}`}
            onMouseEnter={() => {
              setBackgroundImage(images.dedicated);
              setSelectedTitle('dedicated');
            }}
          >
            Dévoué
          </h2>
          <h2
            className={`collaborative ${selectedTitle === 'collaborative' ? 'active' : ''}`}
            onMouseEnter={() => {
              setBackgroundImage(images.collaborative);
              setSelectedTitle('collaborative');
            }}
          >
            Esprit collaboratif
          </h2>
        </div>
        </div>
      </section>
      <section id='about' >
        <div className="scrolling-bar">
          <p className="scrolling-text">À propos</p>
          <p className="scrolling-text">À propos</p>
          <p className="scrolling-text">À propos</p>
          <p className="scrolling-text">À propos</p>
          <p className="scrolling-text">À propos</p>
          <p className="scrolling-text">À propos</p>
        </div>

        <div className='about-cards' >
          <div className='about-card' >
            <img src="https://i.goopics.net/9uju1t.png" alt="Logo de compétences" />
            <h2>Compétences</h2>
            <div className='about-skills' >
              {aboutData.skills.map((skill, index) => (
                <Link to={skill.link} key={index} className='about-skill' target="_blank" rel="noopener noreferrer">
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className='about-card' >
            <img src="https://i.goopics.net/yy2q9s.png" alt="Logo de formation et diplôme" />
            <h2>Formation & Diplôme</h2>
            <div className='about-education'>
              <h3>{edu.year} <span>{edu.institution}</span></h3>
              <span>{edu.degree}</span>
            </div>
          </div>
        </div>

        <div className='about-presentation' >
          <div className='about-me' >
            <span>Développeur web Front-End</span>
            <h2>Florian MARTIN</h2>
            <p>Créatif, j'apprécie la conception d'interfaces web élégantes et modernes pour offrir une expérience utilisateur de qualité.</p>
            <p>Optimiste, je suis constamment à la recherche de nouvelles opportunités pour développer mes compétences.</p>
            <p>Dévoué, j'accorde une grande importance à l'accessibilité web, veillant à ce que chaque utilisateur puisse profiter pleinement de nos sites</p>
            <p>Esprit collaboratif, j'apprécie travailler en équipe pour créer des solutions innovantes et atteindre des standards de qualité élevés.</p>
          </div>
          <img src="https://i.goopics.net/vdwpsm.png" alt="Photographie de Florian" />
        </div>
      </section>
      <section id='portfolio' >
      <div className="scrolling-bar">
          <p className="scrolling-text">Portfolio</p>
          <p className="scrolling-text">Portfolio</p>
          <p className="scrolling-text">Portfolio</p>
          <p className="scrolling-text">Portfolio</p>
          <p className="scrolling-text">Portfolio</p>
          <p className="scrolling-text">Portfolio</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
