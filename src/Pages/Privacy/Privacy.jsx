import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import BookBg from '../../images/privacyBg.png';

import InFrame from '../../images/pri.png'


import './Privacy.css'




export default function Privacy() {
    const language = useContext(LanguageContext);
  return (
    <div className="privacy">
  <div className="intro">
        <div className="bg-img">
           <img src={BookBg} alt="" />
        </div>
        <div className="intro-in">
          <h1 className="bg-scr">{language === 'en' ? 'Privacy Policy' :'Privacy Policy'}</h1>
          <h1 className="sm-scr">{language === 'en' ?'Privacy Policy': 'Privacy Policy'}</h1>
        </div>
       
      </div>
<div className="priv-sc2">

<div className="inner">
    <h4  style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? 'What information we collect?' :'المعلومات التي نجمعها؟'}</h4>
    <div className='paragr'  style={{ flexDirection: language === 'en' ? 'row-reverse' : 'row'}}> <p style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? 'Personal details such as name, email address, and phone number during booking or inquiries' :'تفاصيل شخصية مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف أثناء الحجز أو الاستفسارات'} </p> <span></span></div>
<div className='paragr'  style={{ flexDirection: language === 'en' ? 'row-reverse' : 'row'}} >  <p style={{ textAlign: language === 'en' ? 'start' : 'end' }}> {language === 'en' ? 'Payment details and transaction history' :'تفاصيل الدفع وتاريخ المعاملات'} </p>  <span></span></div>

</div>


<div className="inner">
    <h4  style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? 'How we use the information?' :'كيف نستخدم المعلومات؟'}</h4>
    <div className='paragr'  style={{ flexDirection: language === 'en' ? 'row-reverse' : 'row'}}> <p style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? 'To process your booking and provide customer service.' :'لمعالجة حجزك وتقديم خدمة العملاء'} </p> <span></span></div>
<div className='paragr'  style={{ flexDirection: language === 'en' ? 'row-reverse' : 'row'}} >  <p style={{ textAlign: language === 'en' ? 'start' : 'end' }}> {language === 'en' ? 'For marketing purposes, unless opted out.' :'لأغراض التسويق، ما لم يتم الاعتراض عليها'} </p>  <span></span></div>

</div>


<div className="inner">
    <h4  style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? 'How we protect your information?' :'كيف نحمي معلوماتك؟'}</h4>
    <div className='paragr'  style={{ flexDirection: language === 'en' ? 'row-reverse' : 'row'}}> <p style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? 'Secure servers and encrypted data transmission' :'خوادم آمنة ونقل البيانات المشفرة'} </p> <span></span></div>

</div>



<div className="image-sec2">
  <img src={InFrame} alt="" />
</div>
</div>


    </div>
  )
}
