import React from 'react'
import './Home.css'
import image1 from './Photo/image1.jpg'
import image2 from './Photo/child-hands-holding-caring-young-green-plant.jpg'
import image3 from './Photo/close-up-picture-hand-holding-planting-seed-plant.jpg'
import image4 from './Photo/farmer-spraying-vegetables-garden-with-herbicides-man-black-apron.jpg'


const Home = () => {
  return (
    <div className='parent1'>
      <div className='banner'>
      <heading1>We Can Assist In</heading1>
      <heading2>All Your Agricultural Needs</heading2>
      <button className='enq'>Enquire Now</button>
      </div>
      <div className='box1'>
          <div className='head'>Agricultural Seeds, Fertilizer and Pesticide</div>
            <div className='parent2'>
              <div className='child'>
               <div className='image'>
                <img src={image1} alt="Loding"/>
               </div>
               <p>Fertilizer</p>
              </div>
              <div className='child'>
              <div className='image'>
                <img src={image2} alt="Loding"/>
               </div>
               <p>Soil</p>
              </div>
              <div className='child'>
              <div className='image'>
                <img src={image3} alt="Loding"/>
               </div>
               <p>Seed's</p>
              </div>
              <div className='child'>
              <div className='image'>
                <img src={image4} alt="Loding"/>
               </div>
               <p>Pesticide</p>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Home
