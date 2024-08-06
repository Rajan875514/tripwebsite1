import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
import './blog.scss'
import './blog.css'


//=============images uses ===========//
import img6 from '../../Assets/image (6).jpg';
import img24 from '../../Assets/image(4).jpg';
import img4 from '../../Assets/image4.jpg';
import img2 from '../../Assets/imgAg2.avif';

const posts = [
  {
    id: 1,
    postImages: img6,
    title: 'Beautiful Morocco, Let Us Travel',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum mollitia quidem perferendis, explicabo odit quod debitis? Quod molestias labore dolore.',
  },
  {
    id: 2,
    postImages: img24,
    title: 'Beautiful Morocco, Let Us Travel',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum mollitia quidem perferendis, explicabo odit quod debitis? Quod molestias labore dolore.',
  },
  {
    id: 3,
    postImages: img4,
    title: 'Beautiful Morocco, Let Us Travel',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum mollitia quidem perferendis, explicabo odit quod debitis? Quod molestias labore dolore.',
  },
  {
    id: 4,
    postImages: img2,
    title: 'Beautiful Morocco, Let Us Travel',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum mollitia quidem perferendis, explicabo odit quod debitis? Quod molestias labore dolore.',
  },
];

const Blog = () => {
  return (
    <section className='blog container section'>
      <div className='secContainer'>
        <div className='secIntro'>
          <h2 className='secTitle'>
            Our Best Blog
          </h2>
          <p>
            An insight into the incredible experience in the world.
          </p>
        </div>
        <div className='mainContainer grid'>
          {posts.map(post => (
            <div  className='singalePost grid'>
            
              <img src={post.postImages} alt={post.title} />
              <div className='imgDiv'>
       
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
              </div>
                <a href="#" className='flex'>
                 Read More
                <BsArrowRightShort className='icon' />
          
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
