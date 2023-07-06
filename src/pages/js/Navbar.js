'use clint'
import React, { useState } from 'react'
import '../css/Navbar.css'

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

    function about2() {
  
        document.querySelector(".ichi span").style="transform: rotate(180deg);"
        }
    
        function aboutClose2() {
      
            document.querySelector(".ichi span").style="transform: rotate(0deg);"
            }
            function ffd() {
    var t=document.querySelector(".ffd ul").style.display
    var p=document.querySelector(".ffd ul").style.opacity
    if(t=="none"){
        document.querySelector(".ffd ul").style.display="block";
        document.querySelector(".ffd ul").style.opacity="1";
        }else{
           document.querySelector(".ffd ul").style.display="none";
           document.querySelector(".ffd ul").style.opacity="0";
        }
    }    
   
    function ochil1() {
        var t=document.querySelector(".lll ul").style.display
        var p=document.querySelector(".lll ul").style.opacity
        if(t=="none"){
            document.querySelector(".lll ul").style.display="block";
            document.querySelector(".lll ul").style.opacity="1";
            }else{
               document.querySelector(".lll ul").style.display="none";
               document.querySelector(".lll ul").style.opacity="0";
            }
        }

export default function Navbar() {
    

 const [state,State] = React.useState(1)


return (
    <div>
<section className='navbar'>
    <div className="navbar-ul">
<ul>
     <li className='moto-menu-item'><a href="#">Home</a></li>

  <div className="menu">
    <div className="menuu">
    <p ><a href="#">About</a> <span><box-icon name='chevron-down' color='#44bef1' ></box-icon></span></p>
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
   <li><a href="#" className='tt'>Home</a></li>
   <div className="media-kategory"  onMouseLeave={()=>aboutClose2()}  onClick={()=> ffd()}>
<div className="ichi" onMouseEnter={(() => about2())}>
<li><a href="#" className='tt'>About</a></li> <span><box-icon name='chevron-down' color='#ffffff' ></box-icon></span>


</div>

</div>
<div className="ffd" >
<ul className='ffdul' >
   <li className='ds'><a href="#">Archives</a></li>

  <div className="ichi2" onClick={()=>ochil1()}>
  <li className='ds'><a href="#">News</a></li><span><box-icon name='chevron-down' color='#989da2' ></box-icon></span>
  </div>
<div className="lll">
   <ul>
       <li className='lll1'><a href="#">Blog</a></li>
       <li className='lll2'><a href="#">Contacts</a></li>
   </ul>
</div>

   <li className='ds'><a href="#">FAQs</a></li>
</ul>
</div>
   <li><a href="#" className='tt'>Services</a></li>
  
   <li><a href="#" className='tt'>Blog</a></li>
   <li><a href="#" className='tt'>Our team</a></li>
   <li><a href="#" className='tt'>Contacts</a></li>
</ul>
</div>
</div>


      </div>

   </div>

</section>



    </div>
  )
}
