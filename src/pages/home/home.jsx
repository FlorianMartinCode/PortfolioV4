import React, { useState, useEffect } from 'react';

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

  return (
    <main>
      <div className="social-icons">
        <a href="https://github.com/FlorianMartinCode" target="_blank" rel="noopener noreferrer">
          <img src="https://i.goopics.net/49ioue.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/florian-martin-477748266/" target="_blank" rel="noopener noreferrer">
          <img src="https://i.goopics.net/q5woa7.png" alt="LinkedIn" />
        </a>
      </div>

      <section>
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
    </main>
  );
}

export default Home;
