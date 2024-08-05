import React from 'react'
import './home.scss';
import './home.scss';

const Home = () => {
  return (
        <section className='home'>
            <div className='secContainer container'>
                <div className='homeText '>
                    <h1 className='title'>
                        Plane your Trip with Travel Dot
                    </h1>
                    <p className="subTitle">
                        Travel to your favourite city with respectful of
                        the enviernment
                    </p>
                    <button className='btn'>
                        <a href="#">Explore Now</a>
                    </button>
                </div>

                <div className="homeCard grid">
                  
                    
                <div className="locationDiv">
                    <label htmlFor="location">Location</label>
                    <input type="text" placeholder='Dream
                    Destination' />
                   </div>
                     
                   <div className="distDiv">
                    <label htmlFor="distance">Distance</label>
                    <input type="text" placeholder='112/meter' />
                   </div>
                     
                   <div className="priceDiv">
                    <label htmlFor="location">Price</label>
                    <input type="text" placeholder='$233-$233'/>
                   </div>

                   <button className='btn'>
                    Search
                   </button>

                </div>
            </div>

        </section>
  )
}

export default Home;