import React from 'react'
import "../Newletter/Newsletter.css"
import Newsletterboy from "../../../assets/Banners/banner-9.png"

function Newletter() {
  return (
    <div className='px-4 py-4'>
        <div className="newsletter">
            <div className="row">
                <div className="col-md-6">
                        <h2>Stay home & get your daily <br />needs from our shop</h2>
                    <p>Start You'r Daily Shopping with </p>
                </div>
                <div className="col-md-6">
                    <img src={Newsletterboy} alt="" srcset="" />
                </div>
            </div>

          
        </div>
    </div>
  )
}

export default Newletter