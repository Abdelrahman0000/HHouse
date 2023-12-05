import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import BookBg from '../../images/privacyBg.png';

import useDataFetching from '../../utils/FetchData';

import './Gallery.css';
import GalleryComponent from '../../Components/GalleryComponent';

export default function Gallery() {
  const url = 'https://h-house.hhouse.com.sy/api/gallery';
  const { isLoading, error, data } = useDataFetching(url);

  const Gallery = data?.data;
  const language = useContext(LanguageContext);

  return (
    <div className="gallery">
      <div className="intro">
        <div className="bg-img">
          <img src={BookBg} alt="" />
        </div>
        <div className="intro-in">
          <h1 className="bg-scr">{language === 'en' ? 'Gallery' : 'Gallery'}</h1>
          <h1 className="sm-scr">{language === 'en' ? 'Gallery' : 'Gallery'}</h1>
        </div>
      </div>

      {Gallery &&
        Object.keys(Gallery).map((type, index) => {
          const galleryItems = Gallery[type];
          if (galleryItems.length > 0) {
            return <GalleryComponent key={index} text={getTypeName(type)} gallery={galleryItems} />;
          }
          return null; // Don't render when galleryItems length is 0
        })}
    </div>
  );
}

function getTypeName(type) {
  switch (parseInt(type, 10)) {
    case 1:
      return 'Hotel Exteriors';
    case 2:
      return 'Hotel Interior first floor';
    case 3:
      return 'Hotel Interior second floor';
    case 4:
      return ' Roof ';
    case 5:
      return ' Events ';
    case 6:
      return ' Breakfast ';

    default:
      return `Gallery Type ${type}`;
  }
}
