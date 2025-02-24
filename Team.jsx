import React from "react";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';




import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Team = () => {
 
    const data = [
        {
        id1: 1,
        image1: require("./assets/t1.jpg"),
        Subject1: 'Harry Williams',
        Description1: 'Head Teacher'
    },

    {
        id1: 2,
        image1: require("./assets/t2.jpg"), 
        Subject1: 'Jack Thomson',
        Description1: 'Learning Mentor/Teaching Assistant'
    },

    {
        id1: 3,
        image1: require("./assets/t3.jpg"),
        Subject1: 'Sabra Abioye',
        Description1: 'Teacher'
    },

    {
        id1: 4,
        image1: require("./assets/t4.jpg"),
        Subject1: 'Benoit Fouilland',
        Description1: 'Head Teacher Assistant'
    },

    {
        id1: 5,
        image1: require("./assets/t5.jpg"),
        Subject1: 'Chun Zhang',
        Description1: 'Teaching Assistant'
    },
    ]


    return(
        <>
        <div className="team">
            <h3 className="h3">OUR MENTORS</h3>
            <h2 className="h2">The Team of Professional Teachers</h2>
            <h4 className="h2">With Harry Williams as a head teacher, our team consists of dedicated professionals who put their most to create a a happy,
            safe and caring atmosphere for your children to show their full potential.</h4>
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
        
        <SwiperSlide key={user.id} className="slide1">
            <div className="slide-content1">
                <div className="user-image1">
                    <img src={user['image1']} />
                </div>
                <p className="user-Subject1"><b>{user.Subject1}</b></p>
                <p className="user-Description1">{user.Description1}</p>
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


export default Team;