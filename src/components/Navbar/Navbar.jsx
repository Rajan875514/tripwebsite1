import React, { useState } from 'react';
import './navbar.css';
import './navbar.scss'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  //code of toggle/show navabr
  const [active, setActive]  = useState ('navBar')
  const showNav = () => {  
    setActive('navBar activeNavbar')
  }

  // revers Navbar
  const removeNav = ()=>{
    setActive('navBar activNavbar')
  }


  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <MdOutlineTravelExplore className="icon" />
          </a>
          <h1></h1>
        </div>

        <div className={active}>
          < ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Product</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Resources</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>
          
             <div className="headerBtns flex">
             <button className="btn loginBtn">
              <a href="#">Login</a>
            </button>
            <button className="btn signupBtn">
              <a href="#">Sign Up</a>
            </button>
             </div>
          </ul>

          <div onClick={removeNav}
          className="closeNavbar">
          <AiFillCloseCircle  className='icon'/>
              
          </div>
        </div>

        <div onClick={showNav}
         className="toggleNavbar">
        <TbGridDots  className='icon'/>
        </div>
      </div>
    </section>
  );
};

export default Navbar;