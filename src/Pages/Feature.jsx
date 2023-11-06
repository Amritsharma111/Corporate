import React from 'react'
import FeatureData from '../Data/FeatureData'
import {Link} from 'react-router-dom'
function Feature() {
  return (
    <>
      <section className="feature">
        <div className="fbg text-center text-white">
            <h1>FEATURE FILMS</h1>
        </div>
        <div className="ff container">
            <div className="grid">
                {FeatureData.map(a=>(
                    <div key={a.img} className="fbox text-center ">
                        <Link to={`/detail/${a.id}`}><img src={a.img} alt="" /></Link>
                        <p className="pt-3">{a.title}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Feature
