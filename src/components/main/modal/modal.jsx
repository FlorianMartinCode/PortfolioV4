import React, { useEffect } from 'react';

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

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-button">
          ✖
        </button>
        <div className='modal-centre'>
          <img src={project.cover} alt={project.alt} />
          <div className='desc-compétences'>
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
                <img key={compétence.id} src={compétence.logo} alt={`compétences ${compétence.id}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="modal-links">
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
        </div>
        <div className="modal-navigation">
          <button onClick={onPrevious} className="navigation-button">
            &#8249; {/* Flèche vers la gauche */}
          </button>
          <button onClick={onNext} className="navigation-button">
            &#8250; {/* Flèche vers la droite */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;