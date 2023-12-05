
import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../App';
import Intro_frame from '../../images/Intro-frame.png';
import G_Bg from '../../images/pattern 3.png';
import G_Bg2 from '../../images/pattern2 2.png';

import { ChevronLeft, ChevronRight,Whatsapp } from "react-bootstrap-icons";
import useDataFetching from '../../utils/FetchData';
import './Event.css';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function Event() {
  const language = useContext(LanguageContext);
  const url = 'https://h-house.hhouse.com.sy/api/event';
  const { isLoading, error, data } = useDataFetching(url);
  const [Data, setData] = useState(null);

  const [swip,setswip]=useState(3);
  useEffect(()=>{
  const ll=window.matchMedia("(max-width: 1440px)");
  
  const xs=window.matchMedia("(max-width: 670px)");
  
  
  if(ll.matches){
  setswip(3)
  }
  
  if(xs.matches){
    setswip(2)
  }
  
  },[])
  
  useEffect(() => {
    if (data && data.data && data.data.length > 0) {
      setData(data.data);
    }
  }, [data]);

  if (isLoading) return <div className="in-spinner"> <div className="spinner"></div> </div>;
  if (error) return <p>Error: {error.message}</p>;

  if (!Data || Data.length === 0) {
    return null;
  }



  const handleClickPrev = () => {
    const prevButton = document.querySelector(".mySwiper .swiper-button-prev");
    prevButton.click();
  };

  const handleClickNext = () => {
    const nextButton = document.querySelector(".mySwiper .swiper-button-next");
    nextButton.click();
  };




  return (
    <div className="event">
      <div className="intro">
        <div className="bg-img">
          { Data[0]?.background && <img src={ Data[0]?.background} alt="" />}
        </div>
        <div className="intro-in">
          <h1 className="bg-scr">{language === 'en' ?  Data[0]?.title_en :  Data[0]?.title_ar}</h1>
          <h1 className="sm-scr">{language === 'en' ?  Data[0]?.title_en :  Data[0]?.title_ar}</h1>
        </div>
        <div className="image">
          <img src={Intro_frame} alt="" />
        </div>
      </div>
      <div className="event-desc" style={{ flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
        <div className="desc-left">
          <h2 style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ?  Data[0]?.sec1_title_en :  Data[0]?.sec1_title_ar} </h2>
          <p style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ?  Data[0]?.sec1_description_en :  Data[0]?.sec1_description_ar}</p>
        </div>
        <div className="desc-right">
          <img src={ Data[0]?.sec1_img} alt="" />
       
        </div>
      </div>
      <div className="event-swiper">
            
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
               
                loop={true}
                spaceBetween={3}
                slidesPerView={swip}
                navigation={true}
              
                modules={[ Navigation, Thumbs]}
                className="mySwiper"
               
              >

<SwiperSlide> 
              <img src={ Data[0]?.sec2_img1} /> 
            </SwiperSlide> 


             
                  <SwiperSlide >
                    <img src={ Data[0]?.sec2_img2} />
                  </SwiperSlide>
                  <SwiperSlide >
                    <img src={ Data[0]?.sec2_img3} />
                  </SwiperSlide>
              </Swiper>
         
            { Data[0]?.length > 0 && (
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

          <div className="event-desc desc2" style={{ flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
          <div className="desc-right">
          <img src={ Data[0]?.sec3_img} alt="" />
       
        </div>
        <div className="desc-left">
          <h2 style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ?  Data[0]?.sec3_title_en :  Data[0]?.sec3_title_ar} </h2>
          <p style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ?  Data[0]?.sec3_description_en :  Data[0]?.sec3_description_ar}</p>
        </div>
      
      </div>
      <div className="event-swiper">
            
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
             
              loop={true}
              spaceBetween={3}
              slidesPerView={swip}
              navigation={true}
            
              modules={[ Navigation, Thumbs]}
              className="mySwiper"
             
            >

<SwiperSlide> 
            <img src={ Data[0]?.sec4_img1} /> 
          </SwiperSlide> 


           
                <SwiperSlide >
                  <img src={ Data[0]?.sec4_img2} />
                </SwiperSlide>
                <SwiperSlide >
                  <img src={ Data[0]?.sec4_img3} />
                </SwiperSlide>
            </Swiper>
       
          { Data[0]?.length > 0 && (
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

      <div className="book">
        <img src={G_Bg2} alt="" />
        <div className="btn-contaner">
          <button onClick={() => window.location.href = 'https://wa.link/pt5jjk'}>Book Now <Whatsapp /></button>
        </div>
      </div>
    </div>
  );
}