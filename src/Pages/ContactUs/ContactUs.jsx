
import React, { useContext, useState, useEffect, useRef } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { LanguageContext } from '../../App';
import Intro_frame from '../../images/Intro-frame.png';
import Bg6 from '../../images/Bg6.png';
import './ContactUs.css';
import useDataFetching from '../../utils/FetchData';
import Intro from './Intro';

export default function ContactUs() {
  const language = useContext(LanguageContext);
  const formRef = useRef(null); // useRef should be called before useState hooks

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
 

  const submitContactForm = async (formData) => {
    try {
      await axios.post('https://h-house.hhouse.com.sy/api/contact', formData);
      setName('');
      setEmail('');
      setPhone('');
      setCountry('');
      setMessage('');
      alert('Form submitted successfully');
      setTimeout(() => {
        alert(null);
      }, 500);
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    }
  };

  const { mutate: submitForm } = useMutation(submitContactForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      phone,
      country,
      message,
    };
    submitForm(formData);
  };

  return (
    <div className="contact"> 
      <Intro />
      <div className="form-sec"> 
        <div className="contact-form"> 
          <form onSubmit={handleSubmit}> 
            <div className="form-row"> 
              <div className="form-group"> 
                <label htmlFor="name">{language === 'en' ? 'Name' : 'الأسم'}</label> 
                <input type="text" id="name" placeholder={language === 'en' ? 'Name' : 'الأسم'} value={name} onChange={(e) => setName(e.target.value)} /> 
              </div> 
              <div className="form-group"> 
                <label htmlFor="email">{language === 'en' ? 'Email' : 'البريد الألكترونى'}</label> 
                <input type="email" id="email" placeholder={language === 'en' ? 'Email' : 'البريد الألكترونى'} value={email} onChange={(e) => setEmail(e.target.value)} /> 
              </div> 
            </div> 
            <div className="form-row"> 
              <div className="form-group"> 
                <label htmlFor="phone">{language === 'en' ? 'Phone' : 'رقم الهاتف'}</label> 
                <input type="tel" id="phone" placeholder={language === 'en' ? 'Phone' : 'رقم الهاتف'} value={phone} onChange={(e) => setPhone(e.target.value)} /> 
              </div> 
              <div className="form-group"> 
                <label htmlFor="country">{language === 'en' ? 'Country' : 'البلد'}</label> 
                <input type="text" id="country" placeholder={language === 'en' ? 'Country' : 'البلد'} value={country} onChange={(e) => setCountry(e.target.value)} /> 
              </div> 
            </div> 
            <div className="form-group form-group-textarea"> 
              <label htmlFor="message">{language === 'en' ? 'Message' : 'اترك لنا رسالة'}</label> 
              <textarea id="message" placeholder={language === 'en' ? 'Message' : 'اترك لنا رسالة'} value={message} onChange={(e) => setMessage(e.target.value)}></textarea> 
            </div> 
            <div className={`form-row ${language === 'en' ? '' : 'form-sub'}`}> 
              <button type="submit" style={{cursor:'pointer'}}>{language === 'en' ? 'Send' : 'إرسال'}</button> 
            </div> 
          </form> 
        </div> 
      </div> 
    </div> 
  );
}