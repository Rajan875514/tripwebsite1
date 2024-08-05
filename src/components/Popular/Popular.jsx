import React from 'react';
import './popular.css';
import './popualr.scss'
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs';

// images
import img1 from '../../Assets/image (1).jpg';
import img2 from '../../Assets/image(5).jpg';
import img3 from '../../Assets/image5.jpgf.jpg';
import img4 from '../../Assets/image4.jpg';

// Data array
const Data = [
  { 
    id: 1,
    imgSrc: img1,
    location: ' Manali',
    destTitle: 'netural',
    grade: 'india',
  },
  { 
    id: 2,
    imgSrc: img2,
    location: 'Machu Picchu',
    destTitle: 'delhi',
    grade: 'CULTURAL RELAX',
  },
  { 
    id: 3,
    imgSrc: img3,
    location: 'Jaipur',
    destTitle: 'Mexico',
    grade: 'CULTURAL RELAX',
  },
  { 
    id: 4,
    imgSrc: img4,
    location: 'Kashmir',
    destTitle: 'India',
    grade: 'CULTURAL RELAX',
  },
];

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className='secContainer'>
        <div className='secHeader flex'>
          <div className='textDiv'>
            <h2 className='secTitle'>
              Popular Destination
            </h2>
            <p>
              From historical cities to natural spectacles, come see the best of the world!
            </p>
          </div>
          <div className='iconsDiv flex'>
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, location, destTitle, grade }) => (
            <div className='singalDestination' key={id}>
              <div className='destImage'>
                <img src={imgSrc} alt={`${location} image`} />
                <div className="overlayInfo">
                  <h3>{location}</h3>
                  <p>{grade}</p>
                  <BsArrowRightShort className='icon'/>
                </div>
              </div>
              <div className="destFooter">
                <div className='number'>
                  {`0${id}`}
                </div>
                <div className="destText flex">
                  <h6>{location}</h6>
                  <span className='flex'>
                    <span className="dot">
                      <BsDot className='icon'/>
                    </span>
                    <span>{destTitle}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
