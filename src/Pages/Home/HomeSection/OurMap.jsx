import React,{useContext} from 'react'
import { LanguageContext } from '../../../App';
export default function OurMap({data}) {
  const language = useContext(LanguageContext);

  return (
   <div className="our-map" >
<div className="left">
{data.title1_en&& <h4 style={{textAlign:language==='en'?'left':'right'}}>{language==='en'?data.title3_en: data.title3_ar}</h4>}

  <h5 style={{textAlign:language==='en'?'left':'right'}}>{language==='en'?data.sec3_text_en:data.sec3_text_ar}</h5>
</div>
<div className="right">
  <img src={data.sec3_image} alt="" />
</div>


   </div>
  )
}
