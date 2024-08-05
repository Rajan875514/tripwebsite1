import React from 'react';
import './offer.css';
import './offer.scss';
import { MdKingBed, MdBathtub, MdAirportShuttle, MdLocationPin } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa6';
import { IoMdArrowForward } from 'react-icons/io';

//======images=====
import img8 from '../../Assets/image (8).jpg';
import img9 from '../../Assets/image (9).jpeg';
import img6 from '../../Assets/image (6).jpg';
import img2 from '../../Assets/image (2).jpg';

const offers = [
  {
    id: 1,
    imgSrc: img8,
    destTitle: 'Machu Picchu',
    price: '$12,343'
  },
  {
    id: 2,
    imgSrc: img9,
    destTitle: 'Great Wall of China',
    price: '$15,000'
  },
  {
    id: 3,
    imgSrc: img6,
    destTitle: 'Taj Mahal',
    price: '$10,000'
  },
  {
    id: 4,
    imgSrc: img2,
    destTitle: 'Taj Mahal',
    price: '$10,000'
  },
];

const Offer = () => {
  return (
    <section className='offer container section'>
      <div className='secContainer'>
        <div className='secIntro'>
          <h2 className='secTitle'>Special offers</h2>
          <p>
            From historical cities to natural spectacles, come see the best of 
            the world!
          </p>
        </div>

        <div className="mainContent grid">
          {offers.map(({ id, imgSrc, destTitle, price }) => (
            <div className='singleOffer' key={id}>
              <div className='destImage'>
                <img src={imgSrc} alt={destTitle} />
                <span className='discount'>30% off</span>
              </div>
              <div className='offerBody'>
                <div className="price flex">
                  <h4>{price}</h4>
                  <span className='status'>For Rent</span>
                </div>
                <div className='amenities flex'>
                  <div className='singleAmenity flex'>
                    <MdKingBed className='icon' />
                    <small>1 Bed</small>
                  </div>
                  <div className='singleAmenity flex'>
                    <MdBathtub className='icon' />
                    <small>1 Bath</small>
                  </div>
                  <div className='singleAmenity flex'>
                    <FaWifi className='icon' />
                    <small>Wi-Fi</small>
                  </div>
                  <div className='singleAmenity flex'>
                    <MdAirportShuttle className='icon' />
                    <small>Shuttle</small>
                  </div>
                </div>
                <div className="location flex">
                  <MdLocationPin className='icon' />
                  <small>450 Vine St #310, London</small>
                </div>

                <button className='btn flex'>
                  View details
                  <IoMdArrowForward className='icon' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
