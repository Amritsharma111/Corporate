import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
function Footer() {
  return (
    <footer>
      <section className="text-center">
        <ul class="list-inline">
            <li class="list-inline-item"><Link to={`/`}><FaFacebook size={25}/> </Link></li>
            <li class="list-inline-item px-3"><Link to={`/`}><FaTwitter size={25}/> </Link></li>
            <li class="list-inline-item pe-3"><Link to={`/`}><FaYoutube size={25}/> </Link></li>
            <li class="list-inline-item"><Link to={`/`}><FaInstagram size={25}/> </Link></li>
        </ul>
        <span className='d-flex justify-content-center pt-2'>
          <p className='me-3'><Link to={`/`}>PRIVACY POLICY</Link></p>|<p className='ms-3'><Link to={`/`}>TERMS OF USE</Link></p>
        </span>
        <span className='d-flex justify-content-center pt-1'>
          <p className='me-3'><Link to={`/`}>YOUR US STATE PRIVACY RIGHTS </Link></p>|<p className='ms-3'><Link to={`/`}>CHILDREN’S ONLINE PRIVACY POLICY</Link></p>
        </span>
        <span className='d-flex justify-content-center pt-1'>
          <p><Link to={`/`}>INTEREST-BASED ADS</Link></p>
        </span>
        <p className='pt-3'>© 1986-2023 DISNEY / PIXAR</p>
      </section>
    </footer>
  )
}

export default Footer
