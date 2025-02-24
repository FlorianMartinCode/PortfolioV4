import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importation des icônes de flèche

function Modal({ project, onClose, onPrevious, onNext }) {
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  const handleModalClick = (e) => {
    e.stopPropagation(); // Empêche la propagation de l'événement de clic pour fermer la modal
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button onClick={onClose} className="close-button" aria-label="Fermer la modal">
          ✖
        </button>
        <div className="modal-centre">
          <img src={project.cover} alt={project.alt} />
          <div className="desc-compétences">
            <div>
              <h2>Client</h2>
              <p>{project.title}</p>
            </div>
            <div>
              <h2>Description</h2>
              <p>{project.description}</p>
            </div>
            <div className="compétences">
              {project.compétences.map((compétence) => (
                <img key={compétence.id} src={compétence.logo} alt={`compétence ${compétence.id}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="modal-links">
          <button 
            onClick={onPrevious} 
            className="arrow-button left-arrow" 
            aria-label="Projet précédent"
          >
            <FaArrowLeft />
          </button>

          {project.urlSite && (
            <a href={project.urlSite} target="_blank" rel="noopener noreferrer">
              Voir le site
            </a>
          )}
          {project.urlGitHub && (
            <a href={project.urlGitHub} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          )}
          
          <button 
            onClick={onNext} 
            className="arrow-button right-arrow" 
            aria-label="Projet suivant"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
