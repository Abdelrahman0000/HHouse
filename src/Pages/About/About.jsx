import React, { useContext, useState, useRef, useEffect } from 'react';
import useDataFetching from '../../utils/FetchData';
import {ChevronLeft, ChevronRight,ChevronDown } from 'react-bootstrap-icons';
import { LanguageContext } from '../../App';
import Intro_frame from '../../images/Intro-frame.png';
import './About.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rooma from'../../images/rooma.png'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
export default function About() {
  const language = useContext(LanguageContext);
  const url = 'https://h-house.hhouse.com.sy/api/about' 
  const { isLoading, error, data } = useDataFetching(url);
  const [Data, setData] = useState(null);
  const [reload, setReload] = useState(0);
const [showdesc,setShowDesc]=useState(false);


const handleClickPrev = () => {
  const prevButton = document.querySelector(".about-mySwiper .swiper-button-prev");
  prevButton.click();
};

const handleClickNext = () => {
  const nextButton = document.querySelector(".about-mySwiper .swiper-button-next");
  nextButton.click();
};
  useEffect(() => {
    if (data && data.data) {
      setData(data.data);
    }
  }, [data]);

  useEffect(() => {
    setReload(prevReload => prevReload + 1);
  }, []);

  if (isLoading) return <div className="in-spinner"> <div className="spinner"></div> </div>
  if (error) return <p>Error: {error.message}</p>
  if (!Data) {
    return null;
  }

  const Sliders=data?.data?.sliders;
  return (
    <div className="about" key={reload}>
      <div className="intro">
        <div className="bg-img">
          {Data.background && <img src={Data.background.image} alt="" />}
        </div>
        <div className="intro-in">
          <h1 className="bg-scr">{language === 'en' ? Data.background.text_en : Data.background.text_en}</h1>
          <h1 className="sm-scr">{language === 'en' ? Data.background.text_en : Data.background.text_en}</h1>
        </div>
        <div className="image">
          <img src={Intro_frame} alt="" />
        </div>
      </div>
      {Data.data && (
        <div className="event-desc " style={{ flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
          <div className="desc-left">
            <h2 style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? Data?.data?.title1_en : Data?.data?.title1_ar}</h2>
            <p style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? Data?.data?.text1_en : Data?.data?.text1_ar}</p>
          </div>
          <div className="desc-right">
            <img src={Data?.data?.image1} alt="" />
          </div>
        </div>
      )}
      {Data.data && (
        <div className={`event-desc about-desc ${language === 'en' ? `in-en` : `in-ar`}`} style={{ flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
          <div className="desc-right desc-imgs">
            <img src={Data?.data?.image2} alt="" />
            <img src={Data?.data?.image3} alt="" />
          </div>
          <div className="desc-left">
            <h2 style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? Data?.data?.title2_en : Data?.data?.title2_ar}</h2>
            <p style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? Data?.data?.text2_en : Data?.data?.text2_ar}</p>
          </div>
        </div>
      )}

  {Sliders && Sliders!==null && <div className="sec-4">
  <h2>Historical landmarks around HHouse </h2>


<div className="my-row">
<button onClick={handleClickPrev} className="ChevronLeft">
                  {" "}
                  <ChevronLeft />{" "}
                </button>
<Swiper navigation={true} modules={[Navigation]} className="about-mySwiper">
      
  {Sliders.map((item)=>       <SwiperSlide key={item.id}>

<div className="box"> <div className="image">  <img src={item?.image} alt={item?.image} /> </div> 

<div className="inner" >
  <div className="inner-box my-row"> <h5>{language==='en'?item?.title_en:item?.title_ar}</h5> <span onClick={()=>setShowDesc(!showdesc)}> <ChevronDown style={{rotate:showdesc?'0deg':'-180deg'}} /> </span>  </div>


<p style={{display:showdesc?'block':'none'}} >{language==='en'?item?.text_en:item?.text_ar}</p>
</div>


 </div>


        </SwiperSlide>)}
       
        
      </Swiper>

    
                <button onClick={handleClickNext} className="ChevronRight">
                  {" "}
                  <ChevronRight />{" "}
                </button>

</div>
</div>}
      
    </div>
  );
}