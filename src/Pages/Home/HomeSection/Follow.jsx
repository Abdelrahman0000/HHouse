import React,{useContext} from 'react'
import { LanguageContext } from '../../../App';

export default function Follow({data}) {
  
  const language = useContext(LanguageContext);
 
  return (
    <div className="follow">
   {data.title1_en&&   <h1> {language==='en'?data.title1_en: data.title1_ar}</h1>}

      <div className="box-container">
        <div className="box">
          {" "}
          <img src={data.sec1_img1} alt="" />{" "}
        </div>
        <div className=" box box-2">
          {" "}
          <div className="box-top">
            {" "}
            <img src={data.sec1_img2} alt="" />{" "}
          </div>
<div className="box-bottom">
  <img src={data.sec1_img3} alt="" />
</div>


        </div>
        <div className="box">
          {" "}
          <img src={data.sec1_img4} alt="" />{" "}
        </div>
      </div>
    </div>
  );
}
