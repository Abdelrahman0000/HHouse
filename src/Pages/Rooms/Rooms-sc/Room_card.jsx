
import React, { useContext } from 'react';
import { LanguageContext } from '../../../App';
import { Link } from 'react-router-dom';

export default function Room_card({ room }) {
  const language = useContext(LanguageContext);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Save room in localStorage
    localStorage.setItem('selectedRoom', JSON.stringify(room));
  };

  return (
    <div className="room-card">
      <div className="image">
        <img src={room.image} alt="" />
      </div>
      <div  className={`inner ${language==='en' ? 'en-sm' : 'ar-sm'}`} style={{ flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
        <div className="left">
          <h4 style={{ textAlign: language === 'en' ? 'left' : 'right' }}>{language === 'en' ? room.title_en : room.title_ar}</h4>
          <h5 style={{ textAlign: language === 'en' ? 'left' : 'right' }}>{language === 'en' ? room.description_en : room.description_ar}</h5>
        </div>
        <div className="right">
          <Link to={`/rooms/${room.title_en}`} onClick={handleClick}>
            <button className="btn-r">
              {language === 'en' ? 'Discover' : 'اكتشف'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}