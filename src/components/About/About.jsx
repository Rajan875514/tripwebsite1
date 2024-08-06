import React from 'react';
import './about.css';
import './about.scss';

import img1 from '../../Assets/mountain.jpg';
import img2 from '../../Assets/climbing.jpg';
import img3 from '../../Assets/customer.png';

// Video import
import video from '../../Assets/video.mp4';

const About = () => {
  return (
    <section className='about section'>
      <div className='secContainer'>
        <h2 className='title'>
          Why Hikings?
        </h2>

        <div className='mainContent container grid'>
          <div className='singleItem'>
            <img src={img1} alt="Mountain Image" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms of 
              daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div className='singleItem'>
            <img src={img2} alt="Hiking Image" />
            <h3>1000+ Hikings</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms of 
              daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div className='singleItem'>
            <img src={img3} alt="Customer Image" />
            <h3>2000+ Customers</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms of 
              daily life reduces stress and improves health and well-being.
            </p>
          </div>
        </div>

        <div className='videoCard container'>
          <div className='cardContent grid'>
            <div className="cardText">
              <h2>Wonderful House Experience in There!</h2>
              <p>
                The Adventure subranking is based on an equally weighted average of 
                scores from five countries.
              </p>
            </div>
            <div className="cardVideo">
              <video src={video} autoPlay loop muted type='video/mp4'></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
