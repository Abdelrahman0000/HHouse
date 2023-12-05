import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import BookBg from '../../images/privacyBg.png';
import InFrame from '../../images/pri.png'

import './Payment.css'




export default function Payment() {
    const language = useContext(LanguageContext);
  return (
    <div className="payment"> 
  <div className="intro">
        <div className="bg-img">
           <img src={BookBg} alt="" />
        </div>
        <div className="intro-in">
          <h1 className="bg-scr">{language === 'en' ? 'Payment and Cancellation Policy' :'Payment and Cancellation Policy'}</h1>
          <h1 className="sm-scr">{language === 'en' ?'Payment and Cancellation Policy': 'Payment and Cancellation Policy'}</h1>
        </div>
        
      </div>
<div className="priv-sc2 ">

<div className="inner">
   
    <div className='paragr'  style={{ flexDirection: language === 'en' ? 'row-reverse' : 'row'}}> <h5 style={{ textAlign: language === 'en' ? 'start' : 'end' }}>{language === 'en' ? 'A 35% down payment is necessary, which can be made by cash or bank transfer.' :'يُطلب دفع 35% كدفعة مقدمة، ويمكن إجراؤها نقدًا أو عن طريق التحويل المصرفي'} </h5> <span></span></div>
<div className='paragr'  style={{ flexDirection: language === 'en' ? 'row-reverse' : 'row'}} >  <h5 style={{ textAlign: language === 'en' ? 'start' : 'end' }}> {language === 'en' ? ' Cancellation policies are subject to the rate or package chosen' :' تختلف سياسات الإلغاء حسب السعر أو الباقة المختارة'} </h5>  <span></span></div>

</div>


<div className="image-sec2">
  <img src={InFrame} alt="" />
</div>

</div>


    </div>
  )
}
