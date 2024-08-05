import React from 'react'
import './blog.css'
import './blog.scss'

const Blog = () => {
  return (
   <section className='blog container scetion'>
      <div className='secContainer'>
         <div className='secIntro'>
            <h2 className='secTitle'>
               our Best Blog?
            </h2>
            <p>
              An insight to the  incradible experince in the world.
            </p>
         </div>
         <div className='mainContainer grid'>
            <div className='singlePost grid'>
              <img src="" alt="Image name" />
            </div>
         </div>
      </div>

   </section>
  )
}

export default Blog