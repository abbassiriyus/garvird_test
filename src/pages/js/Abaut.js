import React from 'react'
import '../css/Abaut.css'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Abaut() {
  return (
    <div>
      <Navbar/>
<div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>About Us</h1>
   <br />
   <br className='rr' />
  
    <div className="mini"></div>
   </div>
</div>
<div className="sahifa">
<div className="sahifa-glav">
<div className="safiha-p">
    <h4><a href="#">Home  <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
</div>
<div className="safiha-d">
    <p>About us</p>
</div>
</div>
</div>



<Footer/>
    </div>
  )
}
