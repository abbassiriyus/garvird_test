import React from 'react'
import '../css/Contact.css'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Contact() {
  return (
    <div>
        <Navbar/>
        <div className="asd">
    {/* <img src={abaut} alt="" /> */}
   <div className="asd-block">
   <h1>О нас</h1>
   <br />
   <br className='rr' />
  
    <div className="mini"></div>
   </div>
</div>
<div className="sahifa">
<div className="sahifa-glav">
<div className="safiha-p">
    <h4><a href="#">Главный  <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a></h4>
</div>
<div className="safiha-d">
    <p id='tepaga'>О нас</p>
</div>
</div>
</div>
      <div className="katta">
        <div className="container">
        <div className="left">
            <h1>Форма для обратной связи</h1>
        <div className="inp">
            <p className="pp" >Ваше имя</p>
            <input  className="inpp" type="text"/>
            <p className="pp" >Ваш адрес электронной почты</p>
            <input className="inppp" type="email"/>
             <p>Field is required</p> 
            <p className="pp" >Телефон</p>
            <input className="Phone" type="text"/>
            <p className="pp" >Ваше сообщение</p>
            <input className="coment" type="text"/>
        </div>
        <div className="btn">
            <button>представлять на рассмотрение</button>
        </div>
    </div>

        <div className="right">
            <h1>Контактная информация</h1>
            <div className="p">
                <h4>Адрес</h4>
                <p>267 Парк Авеню Нью-Йорк, NY 90210</p>
                <h4>Мы открыты</h4>
                <p>Часы работы: 8.00-18.00 Пн-Сб</p>
                <h4>Телефон</h4>
                <p><span>(123) 45678910</span>, <span>(123) 45678901</span></p>
                <h4>Email</h4>
                <p><span>info@demolink.org</span></p>
            </div>
        </div>
    </div>


            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280002074!2d-74.14448754461243!3d40.69763123334598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2s!4v1688466025032!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

<Footer/>

    </div>
  )
}
