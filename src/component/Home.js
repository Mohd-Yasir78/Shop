import React from 'react'
import './Home.css'
import image1 from './Photo/image1.jpg'
import image2 from './Photo/child-hands-holding-caring-young-green-plant.jpg'
import image3 from './Photo/close-up-picture-hand-holding-planting-seed-plant.jpg'
import image4 from './Photo/farmer-spraying-vegetables-garden-with-herbicides-man-black-apron.jpg'
import ReactCardSlider from 'react-card-slider-component';



const Home = () => {

  const sliderClick = (slider)=>{
    alert("What do you think");
  }

  
  const slides = [
    {image:"https://picsum.photos/200/300",title:"my name is yasir",description:"This is a description",clickEvent:sliderClick},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
  ]

  
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
      


      <div className="card">
        <div className='pro'>Featured Products</div>
        <div id="card2">
          <ReactCardSlider slides={slides}/>
        </div>
      </div>
      
         
    </div>
      
  )
}

export default Home
