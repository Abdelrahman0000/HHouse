import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';





// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

export default function GalleryComponent({text , gallery}) {
  return (

   gallery &&( <div className="image-gallery">
      <h2>{text}</h2>

      <Swiper
        slidesPerView={4.2}
        loop={true}
        navigation={true} modules={[Navigation]}
        className="mySwiper"
      >

        {gallery.map((item)=> <SwiperSlide><img src={item.image} alt="" /></SwiperSlide>)}
      
      </Swiper>
    </div>)


  )
}
