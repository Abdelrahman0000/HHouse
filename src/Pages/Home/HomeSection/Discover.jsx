import React,{useContext} from 'react'
import { LanguageContext } from '../../../App';


export default function Discover({data}) {
  const language = useContext(LanguageContext);
  //console.log(data);
  return (
    <div className="discover">
 {data.title1_en&& <h1 style={{color:'#B09860', textAlign:'left'}}>{language==='en'?data.title2_en:data.title2_ar} </h1> }


<div className="discover-inner">

<div className="box">  <img src={data.sec2_img1} alt="" /> </div>
<div className="box">  <img src={data.sec2_img2} alt="" /> </div>
<div className="box">  <img src={data.sec2_img3} alt="" /> </div>
<div className="box">  <img src={data.sec2_img4} alt="" /> </div>


</div>



    </div>
  )
}
