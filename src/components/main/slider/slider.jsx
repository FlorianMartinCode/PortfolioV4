import React from 'react';

function Slider({ projects }) {
  const [currentIndex] = React.useState(0);

  return (
    <div className='slider'>
      <div className='slider1'>
        <div className='slider-group1' >
          <figure className='image1'>
            <img src={projects[currentIndex].cover} alt={projects[currentIndex].alt} />
          </figure>
          {projects[currentIndex + 1] && (
            <figure className='image2' >
              <img src={projects[currentIndex + 1].cover} alt={projects[currentIndex + 1].alt} />
            </figure>
          )}
        </div>
        <div className='slider-group2' >
          <figure className='image1'>
            <img src={projects[currentIndex + 2].cover} alt={projects[currentIndex + 2].alt} />
          </figure>
          {projects[currentIndex + 3] && (
            <figure className='image2' >
              <img src={projects[currentIndex + 3].cover} alt={projects[currentIndex + 3].alt} />
            </figure>
          )}
        </div>
        <div className='slider-group1' >
          <figure className='image1'>
            <img src={projects[currentIndex + 4].cover} alt={projects[currentIndex + 4].alt} />
          </figure>
          {projects[currentIndex + 5] && (
            <figure className='image2' >
              <img src={projects[currentIndex + 5].cover} alt={projects[currentIndex + 5].alt} />
            </figure>
          )}
        </div>
        <div className='slider-group2' >
          <figure className='image1'>
            <img src={projects[currentIndex + 6].cover} alt={projects[currentIndex + 6].alt} />
          </figure>
          {projects[currentIndex + 7] && (
            <figure className='image2' >
              <img src={projects[currentIndex + 7].cover} alt={projects[currentIndex + 7].alt} />
            </figure>
          )}
        </div>
      </div>

      <div className='slider1'>
        <div className='slider-group1' >
          <figure className='image1'>
            <img src={projects[currentIndex].cover} alt={projects[currentIndex].alt} />
          </figure>
          {projects[currentIndex + 1] && (
            <figure className='image2' >
              <img src={projects[currentIndex + 1].cover} alt={projects[currentIndex + 1].alt} />
            </figure>
          )}
        </div>
        <div className='slider-group2' >
          <figure className='image1'>
            <img src={projects[currentIndex + 2].cover} alt={projects[currentIndex + 2].alt} />
          </figure>
          {projects[currentIndex + 3] && (
            <figure className='image2' >
              <img src={projects[currentIndex + 3].cover} alt={projects[currentIndex + 3].alt} />
            </figure>
          )}
        </div>
        <div className='slider-group1' >
          <figure className='image1'>
            <img src={projects[currentIndex + 4].cover} alt={projects[currentIndex + 4].alt} />
          </figure>
          {projects[currentIndex + 5] && (
            <figure className='image2' >
              <img src={projects[currentIndex + 5].cover} alt={projects[currentIndex + 5].alt} />
            </figure>
          )}
        </div>
        <div className='slider-group2' >
          <figure className='image1'>
            <img src={projects[currentIndex + 6].cover} alt={projects[currentIndex + 6].alt} />
          </figure>
          {projects[currentIndex + 7] && (
            <figure className='image2' >
              <img src={projects[currentIndex + 7].cover} alt={projects[currentIndex + 7].alt} />
            </figure>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slider;
