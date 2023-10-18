import React,{useContext} from 'react'
import { LanguageContext } from '../../App';
import Intro_frame from '../../images/Intro-frame.png'
import Bg6 from '../../images/Bg6.png'
import './ContactUs.css'

export default function ContactUs() {
    const language = useContext(LanguageContext);
  return (
    <div className="contact">
<div className="intro">
        <div className="bg-img">
            <img src={Bg6} alt="" />
        </div>
<div className="intro-in">

<h1 className="bg-scr">{language==='en'?'Contact Us':'عن الفندق' }</h1>
<h1 className="sm-scr" >{language==='en'?'Contact Us':'عن الفندق' }</h1>
</div>
<div className="image">
  <img src={Intro_frame} alt="" />
</div>

    </div>

<div className="form-sec">
    <div className="contact-form">
  <form>
    <div className="form-row">
    <div className="form-group">
      <label htmlFor="name" style={{textAlign:language==="en"?'left':'right'}}> {language==='en'?'Name':'الأسم'}</label>
      <input type="text" id="name" placeholder={language==='en'?'Name':'الأسم'} name="name" style={{textAlign:language==="en"?'left':'right'}} />
    </div>

    <div className="form-group">
      <label htmlFor="email" style={{textAlign:language==="en"?'left':'right'}}>{language==='en'?'Email':'البريد الألكترونى'}</label>
      <input type="email" id="email" style={{textAlign:language==="en"?'left':'right'}} placeholder={language==='en'?'Email':'البريد الألكترونى'} name="email"/>
    </div>

</div>
<div className="form-row">
    <div className="form-group">
      <label htmlFor="phone"  style={{textAlign:language==="en"?'left':'right'}}>{language==='en'?'Phone':'رقم الهاتف'}</label>
      <input type="tel" id="phone" placeholder={language==='en'?'Phone':'رقم الهاتف'} name="phone"  style={{textAlign:language==="en"?'left':'right'}}/>
    </div>

    <div className="form-group">
      <label htmlFor="country" style={{textAlign:language==="en"?'left':'right'}}> {language==='en'?'Country':'البلد'}</label>
     <input type="name" id='country' style={{textAlign:language==="en"?'left':'right'}} placeholder={language==='en'?'Country':'البلد'} />
    </div>
</div>
    <div className="form-group form-group-textarea ">
      <label htmlFor="message" style={{textAlign:language==="en"?'left':'right'}}>{language==='en'?'Message':'اترك لنا رسالة'}</label>
      <textarea id="message" name="message" placeholder={language==='en'?'Message':'اترك لنا رسالة'} style={{textAlign:language==="en"?'left':'right'}}></textarea>
    </div>
<div className={`form-row  ${language === 'en' ? '' : 'form-sub'}`}>
    <button type="submit">{language==='en'?'Submit':'إرسال'}</button>
    </div>
  </form>
</div>
</div>
    </div>
  )
}
