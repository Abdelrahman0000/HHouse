

import React, { useState, useContext } from "react";
import { LanguageContext } from "../../../App";
import { ChevronLeft, ChevronRight,Whatsapp } from "react-bootstrap-icons";
import BG from "../../../images/Bg3.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Root from "../../../Components/Clander";


export default function SingleRoom({ room }) {
  const language = useContext(LanguageContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleClickPrev = () => {
    const prevButton = document.querySelector(".mySwiper .swiper-button-prev");
    prevButton.click();
  };

  const handleClickNext = () => {
    const nextButton = document.querySelector(".mySwiper .swiper-button-next");
    nextButton.click();
  };

  const handleSlideClick = (index) => {
    setActiveSlide(index);
    if (thumbsSwiper && thumbsSwiper.slideTo) {
      thumbsSwiper.slideTo(index);
      thumbsSwiper.update();
    }
  };
console.log(room)

  return (
    <div className="single-room">
      <div className="inner">
      <div className="left">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          >
             <SwiperSlide> 
              <img src={room.image} /> 
            </SwiperSlide> 
            {room.images.map((item, index) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="main-swip">
            {room.images.length > 0 && (
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
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
                onSlideClick={(swiper) => handleSlideClick(swiper.clickedIndex)}
              >

<SwiperSlide> 
              <img src={room.image} /> 
            </SwiperSlide> 


                {room.images.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <img src={item.image} key={item.id} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            {room.images.length > 0 && (
              <>
                <button onClick={handleClickPrev} className="ChevronLeft">
                  {" "}
                  <ChevronLeft />{" "}
                </button>
                <button onClick={handleClickNext} className="ChevronRight">
                  {" "}
                  <ChevronRight />{" "}
                </button>
              </>
            )}
          </div>
        </div>
        <div className="right">
          <div className="intro-sec bg-sc">
            <div className="intro-contan">
             {language&& <h1>{language==='en'?room.type_en:room.type_ar}</h1>}
              <div className="box-container">
         <Root />
                <div className="box">
                  <div className="custom-select">
                    {language === "en" ? (
                      <select>
                        <option value="0">Adults</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                        <option value="3">6</option>
                      </select>
                    ) : (
                      <select>
                        <option value="0">البالغين</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                        <option value="3">6</option>
                      </select>
                    )}
                  </div>
                 
                </div>
                <div className="box">
                  <div className="custom-select">
                    {language === "en" ? (
                      <select>
                        <option value="0">Children</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                        <option value="3">6</option>
                      </select>
                    ) : (
                      <select>
                        <option value="0">الاطفال</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                        <option value="3">6</option>
                      </select>
                    )}
                  </div>
                 
                </div>
              </div>
            <button className="btn-1" onClick={() => window.location.href = 'https://wa.link/pt5jjk'}>Check Availability <Whatsapp /></button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}