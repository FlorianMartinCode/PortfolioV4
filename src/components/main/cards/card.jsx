import React from 'react';

function Card({ cover, alt, title, onClick }) {
  return (
    <article className="card" onClick={onClick}>
      <img src={cover} alt={alt} />
      <h3>{title}</h3>
    </article>
  );
}

export default Card;