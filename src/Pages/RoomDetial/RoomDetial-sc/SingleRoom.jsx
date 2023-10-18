

import React, { useState, useContext } from "react";
import { LanguageContext } from "../../../App";
import {ChevronLeft,ChevronRight} from 'react-bootstrap-icons'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';



export default function SingleRoom({ room }) {
  const language = useContext(LanguageContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleClickPrev = () => {
    const prevButton = document.querySelector('.mySwiper .swiper-button-prev');
    prevButton.click();
  };

  const handleClickNext = () => {
    const nextButton = document.querySelector('.mySwiper .swiper-button-next');
    nextButton.click();
  };
  return (
    <div className="single-room">
      <div className="inner">
        <div className="left">
        <Swiper
       
        loop={true}
        spaceBetween={10}
        
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={room} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={room} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={room} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={room} />
        </SwiperSlide>
       
      
        <SwiperSlide>
        <img src={room} />
        </SwiperSlide>
      </Swiper>
      
<div className="main-swip">

   <Swiper
       style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
        navigation={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
    
        <SwiperSlide>
        <img src={room} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={room} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={room} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={room} />
        </SwiperSlide>
        <SwiperSlide>               
        <img src={room} />
        </SwiperSlide>
        </Swiper>
        <button onClick={handleClickPrev}className="ChevronLeft"> <ChevronLeft /> </button>
      <button onClick={handleClickNext}   className="ChevronRight"> <ChevronRight /> </button>
    
     </div>
        </div>
        <div className="right">
          <div className="intro-sec bg-sc">
            <div className="intro-contan">
              <h1>Single Room</h1>
              <div className="box-container">
                <div className="box">
                  <div className="custom-select">
                    {language === "en" ? (
                      <select>
                        <option value="0">Select month:</option>
                        <option value="1">20 December</option>
                        <option value="2">25 December</option>
                        <option value="3">30 December</option>
                      </select>
                    ) : (
                      <select>
                        <option value="0">أختر الشهر:</option>
                        <option value="1">20 ديسيمبر</option>
                        <option value="2">25 ديسيمبر</option>
                        <option value="3">30 ديسيمبر</option>
                      </select>
                    )}
                  </div>
                  <p>{language === "en" ? "Arrival" : "الوصول"}</p>
                </div>
                <div className="box">
                  <div className="custom-select">
                    {language === "en" ? (
                      <select>
                        <option value="0">Select month:</option>
                        <option value="1">20 December</option>
                        <option value="2">25 December</option>
                        <option value="3">30 December</option>
                      </select>
                    ) : (
                      <select>
                        <option value="0">أختر الشهر:</option>
                        <option value="1">20 ديسيمبر</option>
                        <option value="2">25 ديسيمبر</option>
                        <option value="3">30 ديسيمبر</option>
                      </select>
                    )}
                  </div>
                  <p>{language === "en" ? "Departure" : "المغادرة"}</p>
                </div>
                <div className="box">
                  <div className="custom-select">
                    {language === "en" ? (
                      <select>
                        <option value="0">Adults</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    ) : (
                      <select>
                        <option value="0">البالغين</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    )}
                  </div>
                  <p>{language === "en" ? "Departure" : "المغادرة"}</p>
                </div>
                <div className="box">
                  <div className="custom-select">
                    {language === "en" ? (
                      <select>
                        <option value="0">Children</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    ) : (
                      <select>
                        <option value="0">الاطفال</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    )}
                  </div>
                  <p>{language === "en" ? "Departure" : "المغادرة"}</p>
                </div>
              </div>
              <button className="btn-1">Check Availability</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}