import React from 'react'
import {Link} from 'react-router-dom'
import ele from '../assets/elelogo.png'
import img1 from '../assets/image1.jpeg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'
function Home() {
  return (
    <>
     <section className="home">
          <div className="container">
              <img src={ele} alt="" />
          </div>
      </section> 
      <div className="container pt5">
            <div className="row">
              <div className="col-lg-4 text-center">
                  <Link to={`/careers/`}><img className='w-100' src={img1} alt="" /></Link>
                  <p className="py-3">CAREERS AT PIXAR</p>
              </div>
              <div className="col-lg-4 text-center">
                  <Link to='https://youtu.be/2w_K3CB8PuE?si=tTvbfh6A-jPBdnrC' target='_blank'><img className='w-100' src={img2} alt="" /></Link>
                  <p className="py-3">ELIO</p>
              </div>
              <div className="col-lg-4 text-center">
                  <Link to={`/`}><img className='w-100' src={img3} alt="" /></Link>
                  <p className="py-3">WIN OR LOSE</p>
              </div>
            </div>
          </div>

    </>
  )
}

export default Home
