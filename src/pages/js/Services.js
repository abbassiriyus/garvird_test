import React from 'react'
import '../css/Services.css'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Services() {
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
         <div className="box">
        <div className="left-card">
            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img01.jpg" alt=""/>
                <h1><a href="#">Финансовое Планирование</a></h1>
                <p>Несмотря на то, что финансовое планирование является непрерывным и сложным процессом, оно помогает человеку принимать разумные решения относительно денежных целей в своей жизни.</p>
            </div>

            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img02.jpg" alt=""/>
                <h1><a href="#">Инвестиционный Консалтинг</a></h1>
                <p>Наши инвестиционные консультанты изучают цели клиентов, инвестиционный опыт и устойчивость к риску и определяют план финансовых вложений, наиболее подходящий для каждого клиента.</p>
            </div>

            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img03.jpg" alt=""/>
                <h1><a href="#">Налогообложение</a></h1>
                <p>Устроить свои дела так, чтобы избежать или отсрочить налогообложение — настоящее искусство, а эффективное налоговое планирование может стать первым шагом к вашему финансовому успеху и потенциальной экономии.</p>
            </div>

            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img04.jpg" alt=""/>
                <h1><a href="#">Пенсионное планирование</a></h1>
                <p>Планирование выхода на пенсию может быть проблематичным, если у вас нет необходимых знаний о том, как управлять своими средствами или создать основу для выхода на пенсию.</p>
            </div>

            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img05.jpg" alt=""/>
                <h1><a href="#">Планирование Бизнеса</a></h1>
                <p>Управление финансами компании, независимо от того, большая она или маленькая, часто кажется сложной задачей, но наши специалисты могут помочь вам улучшить финансовое состояние вашей компании.</p>
            </div>

            <div className="cards">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-services-img06.jpg" alt=""/>
                <h1><a href="#">Управление Рисками</a></h1>
                <p>Эта сфера финансового консультирования включает выявление, оценку и приоритизацию возможных рисков для вашего бизнеса с последующими превентивными мерами.</p>
            </div>
        </div>


        <div className="right-card">
            <div className="card">
                <h1>Вам нужна помощь?</h1>
                <p>Свяжитесь с нами в ближайшем к вам офисе FinExpert или отправьте бизнес-запрос онлайн.</p>
                <button>Связаться с нами</button>
            </div>

        </div>
    </div>
    <Footer/>
    </div>
  )
}
