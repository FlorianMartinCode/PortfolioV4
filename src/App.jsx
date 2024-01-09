import React, { useEffect } from 'react';
import Router from './router';

function App() {
  useEffect(() => {
    const loader = document.querySelector('.loader');

    const adjustZIndex = () => {
      loader.style.zIndex = -1;
      loader.classList.add('fondu-out');
    };

    const delayInMilliseconds = 2500;
    setTimeout(adjustZIndex, delayInMilliseconds);
  }, []);

  return (
    <div>
      <div className='loader' >
        <span className='lettre'>C</span>
        <span className='lettre'>H</span>
        <span className='lettre'>A</span>
        <span className='lettre'>R</span>
        <span className='lettre'>G</span>
        <span className='lettre'>E</span>
        <span className='lettre'>M</span>
        <span className='lettre'>E</span>
        <span className='lettre'>N</span>
        <span className='lettre'>T</span>
      </div>
      <Router />
    </div>
  );
}

export default App;
