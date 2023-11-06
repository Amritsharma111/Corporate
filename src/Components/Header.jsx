import React, { useState } from 'react'
import {NavLink,Link,Routes,Route} from 'react-router-dom'
import logo from '../assets/logo.jpg'
import Home from '../Pages/Home'
import {RxHamburgerMenu, RxCross2} from 'react-icons/rx'
import Feature from '../Pages/Feature'
function Header() {
    const [nav, setNav] = useState(false);
  const removeActive = () => {
    setNav(false)
  }
  return (
    <>
      <nav> 
        <div className=" container d-flex justify-content-between align-items-center py-lg-5 py-3">
            <Link to={`/`}><img className="logo" src={logo} alt="" /></Link>
            <section className={ nav ? "show" : ""}>
                 <ul className="list-unstyled m-0 text-uppercase d-lg-flex gap-lg-5 pt-1">
                <li onClick={removeActive}><NavLink to ={`/feature/`}><h6>Feature films</h6></NavLink></li>
                <li className='position-relative'><NavLink onClick={removeActive} to ={`/short/`}><h6>Short films</h6></NavLink> 
                    <span className='position-relative'>
                        <ul className="position-absolute list-unstyled x">
                            <li><NavLink><h6>THEATRICAL SHORTS</h6></NavLink></li>
                            <li><NavLink><h6>DISNEY+</h6></NavLink></li>
                            <li><NavLink><h6>SPARKSHORTS</h6></NavLink></li>
                            <li><NavLink><h6>CARSTOONS</h6></NavLink></li>
                            <li><NavLink><h6>TOY STORY TOONS</h6></NavLink></li>
                            <li><NavLink><h6>HOME ENTERTAINMENT</h6></NavLink></li>
                        </ul>
                    </span>
                </li>
                <li className='position-relative'><NavLink to ={`/tech/`}><h6 onClick={removeActive}>Technology</h6></NavLink>
                    <span className='position-relative'>
                        <ul className="position-absolute list-unstyled a">
                            <li><NavLink><h6>RENDERMAN</h6></NavLink></li>
                            <li><NavLink><h6>USD</h6></NavLink></li>
                            <li><NavLink><h6>RESEARCH AND OPENSOURCE</h6></NavLink></li>
                        </ul>
                    </span>
                </li>
                <li className='position-relative'><NavLink onClick={removeActive} to ={`/careers/`}><h6>Careers</h6></NavLink>
                    <span className='position-absolute'>
                        <ul className=" position-absolute list-unstyled b ">
                            <li><NavLink><h6>CAREERS AT PIXAR</h6></NavLink></li>
                            <li><NavLink><h6>INTERNSHIPS</h6></NavLink></li>
                            <li><NavLink><h6>LIFE AT PIXAR</h6></NavLink></li>
                            <li><NavLink><h6>EVENTS+</h6></NavLink></li>
                        </ul>
                    </span>
                </li>
                <li className='position-relative'><NavLink onClick={removeActive} to ={`/extra/`}><h6>Extra</h6></NavLink>
                    <span className='position-absolute '>
                        <ul className=" position-absolute list-unstyled c">
                            <li><NavLink><h6>ART EXHIBITION</h6></NavLink></li>
                            <li><NavLink><h6>EMOTIONS AT PLAY</h6></NavLink></li>
                            <li><NavLink><h6>THE SCIENCE BEHIND PIXAR</h6></NavLink></li>
                            <li><NavLink><h6>PIXAR IN A BOX</h6></NavLink></li>
                        </ul>
                    </span>
                </li>
                <li className='position-relative'><NavLink onClick={removeActive} to ={`/about/`}><h6>About</h6></NavLink>
                <span className='position-absolute position-absolute'>
                        <ul className=" position-absolute list-unstyled y">
                            <li><NavLink><h6>LEADERSHIP</h6></NavLink></li>
                            <li><NavLink><h6>INCLUSION & OUTREACH</h6></NavLink></li>
                            <li><NavLink><h6>SUPPLIER DIVERSITY</h6></NavLink></li>
                            <li><NavLink><h6>COMING SOON</h6></NavLink></li>
                            <li><NavLink><h6>OUR STORY</h6></NavLink></li>
                            <li><NavLink><h6>COMPANY FAQ'S</h6></NavLink></li>
                        </ul>
                    </span>
                </li>
                </ul>   
            </section>
            <div className='menu' onClick= {() => {setNav(!nav)}}>
                {nav ? <RxCross2 size={30}/> : <RxHamburgerMenu size={30}/> }
            </div>
        </div>
       
      </nav>
      <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/feature/" element ={<Feature/>}/>
        </Routes>
    </>
  )
}

export default Header
