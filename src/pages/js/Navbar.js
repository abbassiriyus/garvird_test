'use clint'

import React, { useState } from 'react'
import '../css/navbar.css'
import Abaut from './Abaut'


function sa(){
    var y= document.querySelector(".media-ul").style.display;
    if(y=="flex"){
    document.querySelector(".media-ul").style.display="none";
    }else{
       document.querySelector(".media-ul").style.display="flex";
    }
    document.querySelector(".bar-menu").classList.toggle("la")
    document.querySelector(".wone").classList.toggle("laa")
    document.querySelector(".wone1").classList.toggle("laa")
    document.querySelector(".wone2").classList.toggle("laa")
   }
function about() {
document.querySelector(".menu ul").style="opacity: 1;visibility: visible;"
document.querySelector(".menu p span").style="transform: rotate(180deg);"
}

function aboutClose() {
    document.querySelector(".menu ul").style="opacity: 0;visibility: visible;"
    document.querySelector(".menu p span").style="transform: rotate(0deg);"
    }
    function about1() {
        
        document.querySelector(".ulli").style="margin-top:0px;opacity:1"
        document.querySelector(".ichi span").style="transform: rotate(180deg);"
        }
        function aboutClose1() {
            document.querySelector(".ulli").style="margin-top:-120px;opacity:0"
            document.querySelector(".ichi span").style="transform: rotate(0deg);"
            }
    // function aboutClose1() {
    //     document.querySelector(".menu2 ul").style="opacity: 0;visibility: visible;"
    //     document.querySelector(".menu2 p span").style="transform: rotate(0deg);"
    //     }
     

export default function Navbar() {
    

 const [state,State] = React.useState(1)


return (
    <div>
<section className='navbar'>
    <div className="navbar-ul">
<ul>
     <li className='moto-menu-item'><a href="#">Home</a></li>

  <div  onMouseLeave={()=>aboutClose()} className="menu">
    <div className="menuu">
    <p onMouseEnter={(() => about())}><a href="#">About</a> <span><box-icon name='chevron-down' color='#44bef1' ></box-icon></span></p>
    <ul >
        <li ><a href="#" >Archives</a></li>
        <div className='hr' />
 <div  id='hh1'></div>
     <div className="menu2" >
     <p > <a href="#" className='zaib' >News   <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a> </p>
<div id='hh2'></div>
<div className='hr' />
     <ul>
        <li id='ded1'><a href="#">Blog</a></li>
        <div className='hr' />
        <div  id='hh1'></div>
        <li id='ded'><a href="#">Contacts</a></li>
      
     </ul>
     </div>
       
        <li className='zaib'><a href="#">FAQs</a></li>
    </ul>
</div>
   
</div>

    <li className='moto-menu-item'> <a href="#">Services</a> </li>
    <li className='moto-menu-item'><a href="#">Blog</a></li>
    <li className='moto-menu-item'><a href="#">Our team</a></li>
    <li className='moto-menu-item'><a href="#">Contacts</a></li>
</ul>

    </div>
    <div className="media-navbar">
      
       <div className="navbar-menu">
       <div  className="bar-menu"   id='sa' onClick={() => sa()} >
       <div className="wone" ></div>
       <div className="wone1"  ></div>
       <div className="wone2"  ></div>


       </div>
<div className="media-ul">
<div className="dfdf">
<ul>
    <li><a href="#">Home</a></li>
    <div className="media-kategory"  onMouseLeave={()=>aboutClose1()}>
<div className="ichi"  onMouseEnter={(() => about1())}>
<li><a href="#">About</a></li> <span><box-icon name='chevron-down' color='#ffffff' ></box-icon></span>


</div>

 </div><ul className='ulli'>
    <li>asd</li>
    <li>asd</li>
    <li>asd</li>
</ul>
    <li><a href="#">Services</a></li>
   
    <li><a href="#">Blog</a></li>
    <li><a href="#">Our team</a></li>
    <li><a href="#">Contacts</a></li>
</ul>
</div>
</div>


       </div>

    </div>

</section>

<Abaut/>

    </div>
  )
}
