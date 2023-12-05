
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../../App';
import In_Frame from '../../../images/Intro-frame.png';
import { Link } from 'react-router-dom';
import Root from '../../../Components/Clander'



export default function Intro({ background ,data}) {
  const language = useContext(LanguageContext);
  const [adultQuantity, setAdultQuantity] = useState(1);
  const [childrenQuantity, setChildrenQuantity] = useState(0);
 



  const incrementAdultQuantity = () => {
    setAdultQuantity(adultQuantity + 1);
  };

  const decrementAdultQuantity = () => {
    if (adultQuantity > 1) {
      setAdultQuantity(adultQuantity - 1);
    }
  };

  const incrementChildrenQuantity = () => {
    setChildrenQuantity(childrenQuantity + 1);
  };

  const decrementChildrenQuantity = () => {
    if (childrenQuantity > 0) {
      setChildrenQuantity(childrenQuantity - 1);
    }
  };

  return (
    <div className="intro">
      <div className="intro-inner" style={{ backgroundImage: `url(${background})` }}>
        <div className="intro-sec bg-sc">
          <div className="intro-contan">
            <div className="box-container">
            
     
<Root />
    

              <div className="box">
              <p>{language === 'en' ? 'Adults' : 'البالغلين'}</p>
                <div className="input-wrapper">
                  <button id="decrement" className='edit' onClick={decrementAdultQuantity}>
                    -
                  </button>
                  <input type="number" value={adultQuantity} id="quantity" readOnly />
                  <button id="increment" className='edit' onClick={incrementAdultQuantity}>
                    +
                  </button>
                </div>
                
              </div>
              <div className="box">
              <p>{language === 'en' ? 'Children' : 'الأطفال'}</p>
                <div className="input-wrapper">
                  <button id="decrement" className='edit' onClick={decrementChildrenQuantity}>
                    -
                  </button>
                  <input type="number" value={childrenQuantity} id="quantity" readOnly />
                  <button id="increment" className='edit' onClick={incrementChildrenQuantity}>
                    +
                  </button>
                </div>
               
              </div>
            </div>
            <Link to={'/rooms'}>
              <button className="btn-1">Check Availability</button>
            </Link>
          </div>
        </div>
        <div className="intro-frame">
          <img src={In_Frame} alt="" />
        </div>
      </div>
      <div className="sm-sc">
      {data.title1_en&&   <h3> {language==='en'?data.title1_en: data.title1_ar}</h3>}
        <div className="intro-sec ">
          <div className="intro-contan">
          <div className="box-container">
            
     
            <Root />
                
            
                          <div className="box">
                          <p>{language === 'en' ? 'Adults' : 'البالغلين'}</p>
                            <div className="input-wrapper">
                              <button id="decrement" className='edit' onClick={decrementAdultQuantity}>
                                -
                              </button>
                              <input type="number" value={adultQuantity} id="quantity" readOnly />
                              <button id="increment" className='edit' onClick={incrementAdultQuantity}>
                                +
                              </button>
                            </div>
                           
                          </div>
                          <div className="box">
                          <p>{language === 'en' ? 'Children' : 'الأطفال'}</p>
                            <div className="input-wrapper">
                              <button id="decrement" className='edit' onClick={decrementChildrenQuantity}>
                                -
                              </button>
                              <input type="number" value={childrenQuantity} id="quantity" readOnly />
                              <button id="increment" className='edit' onClick={incrementChildrenQuantity}>
                                +
                              </button>
                            </div>

                          </div>
                        </div>
            <Link to={'/rooms'}>
              <button className="btn-1">Check Availability</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}