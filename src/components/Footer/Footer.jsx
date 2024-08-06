import React from 'react';
import './footer.css'; // Ensure these files exist and are correctly linked
import './footer.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='secContainer container grid'>
        <div className='logoDiv'>
          <div className='footerLogo'>
            <a href="" className='logo'>
              <h1 className='flex'>
                <MdOutlineTravelExplore className='icon' /> Dot
              </h1>
            </a>
          </div>

          <div className='socail flex'>
            <ImFacebook className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>Information</span>
          <li><a href="#">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Travel</a></li>
          <li><a href="#">Blog</a></li>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>Contact Us</span>
          <span className='phone'>8755148795</span>
          <span className='email'>rajanprasad722@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
