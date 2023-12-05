import React, { useContext, useState, useEffect, useRef } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { LanguageContext } from '../../App';
import Intro_frame from '../../images/Intro-frame.png';
import Bg6 from '../../images/Bg6.png';
import './ContactUs.css';
import useDataFetching from '../../utils/FetchData';

export default function Intro() {
   
    const language = useContext(LanguageContext);
    const [Data, setData] = useState(null);

    const url = 'https://h-house.hhouse.com.sy/api/contact';
    const { isLoading, error, data } = useDataFetching(url);
  
    useEffect(() => {
      if (data && data.data) {
        setData(data.data);
      }
    }, [data]);
  
    if (isLoading) return <div className="in-spinner"> <div className="spinner"></div> </div>;
    if (error) return <p>Error: {error.message}</p>;
  
  
    if (Data === null || Data.length === 0) {
      return null;
    }
  return (
    <div className="intro"> 
    <div className="bg-img"> 
      <img src={Data.image} alt="" /> 
    </div> 
    <div className="intro-in"> 
      <h1 className="bg-scr">{language === 'en' ? Data.text_en : Data.text_ar}</h1> 
      <h1 className="sm-scr">{language === 'en' ? Data.text_en : Data.text_ar}</h1> 
    </div> 
    <div className="image"> 
      <img src={Intro_frame} alt="" /> 
    </div> 
  </div> 
  )
}
