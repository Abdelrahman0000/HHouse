import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import BookBg from '../../images/privacyBg.png';

import InFrame from '../../images/pri.png'

import './Booking.css'




export default function Booking() {
    const language = useContext(LanguageContext);
  return (
    <div className="booking">
  <div className="intro">
        <div className="bg-img">
           <img src={BookBg} alt="" />
        </div>
        <div className="intro-in">
          <h1 className="bg-scr">{language === 'en' ? 'Booking Terms and Conditions' :'Booking Terms and Conditions'}</h1>
          <h1 className="sm-scr">{language === 'en' ?'Booking Terms and Conditions': 'Booking Terms and Conditions'}</h1>
        </div>
        
      </div>
<div className="priv-sc2 ">

<div className="inner">
   
    <div className='paragr'  style={{ flexDirection: language === 'en' ? 'row-reverse' : 'row'}}> <h5 style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? 'Guests must present a valid ID upon check-in.' :'يجب على الضيوف تقديم هوية صالحة عند تسجيل الوصول'} </h5> <span></span></div>
<div className='paragr'  style={{ flexDirection: language === 'en' ? 'row-reverse' : 'row'}} >  <h5 style={{ textAlign: language === 'en' ? 'start' : 'end' }}> {language === 'en' ? ' Check-in and check-out times are subject to hotel policy, and special requests depend on availability.' :'وقات تسجيل الوصول والمغادرة تخضع لسياسات الفندق، والطلبات الخاصة تعتمد على التوفر'} </h5>  <span></span></div>

</div>



<div className="image-sec2">
  <img src={InFrame} alt="" />
</div>

</div>


    </div>
  )
}
