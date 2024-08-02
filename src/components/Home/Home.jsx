import React from 'react';
import './home.scss';
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className='secContainer container'>

      <div className='homeText'>

       <h1 className='title'>
        Plan Your Trip with Travel Dot
       </h1>

        <p className='subTitle'>
        Travel to your favorite city with respect for 
        the environment
       </p>
  
        <button className='btn'> 
        <a href="#">Explore Now</a>
        </button> 
       </div>

        <div className="homeCard grid">

          <div className='locationDiv'>
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Dream 
            Destination' />
          </div>

          <div className='distDiv'>
            <label htmlFor="distance">Distance</label>
            <input type="text" placeholder='11/meter' />
          </div>

          <div className='priceDiv'>
            <label htmlFor="price">Price</label>
            <input type="text" placeholder='$123-$1223' />
          </div>

          <button className='btn'>
              Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;