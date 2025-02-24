import React from "react";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';




import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Courses = () => {
 
    const data = [
        {
        id: 1,
        image: require("./assets/Develop.jpg"),
        Subject: 'Web Desgning',
        Description: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout'
    },

    {
        id: 2,
        image: require("./assets/Design.jpg"),
        Subject: 'Web Development',
        Description: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout'
    },

    {
        id: 3,
        image: require("./assets/Graphic.jpg"),
        Subject: 'Graphic Design',
        Description: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout'
    },

    {
        id: 4,
        image: require("./assets/press.jpg"),
        Subject: 'Wordpress',
        Description: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout'
    },
    ]


    return(
        <>
        <div className="course">
            <h3 className="h3">OUR COURSES</h3>
            <h2 className="h2">Checkout New Releases <br/> Of Our Courses</h2>

            <div>
            <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map( user => (
        
        <SwiperSlide key={user.id} className="slide">
            <div className="slide-content">
                <div className="user-image">
                    <img src={user['image']} />
                </div>
                <h5 className="user-Subject">{user.Subject}</h5>
                <p className="user-Description">'{user.Description}'</p>
            </div>
        </SwiperSlide>
        
      ))}
    </Swiper>
            </div>

          



        
    
        
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <Footer/>
        </>
    )
}


export default Courses;