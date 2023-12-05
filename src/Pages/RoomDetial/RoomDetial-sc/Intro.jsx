import React,{useContext} from 'react'
import { LanguageContext } from '../../../App';
import Intro_frame from '../../../images/Intro-frame.png'
import Bg3 from '../../../images/Bg3.png'


export default function Intro({img,title_ar,title_en}) {
  const language = useContext(LanguageContext);
  return (
    <div className="intro">
        <div className="bg-img">
            <img src={img} alt="" />
        </div>
<div className="intro-in">

<h1 className="bg-scr">{language==='en'?title_en:title_ar} </h1>
<h1 className="sm-scr" >{language==='en'?title_en:title_ar}</h1>
</div>
<div className="image">
  <img src={Intro_frame} alt="" />
</div>

    </div>
  )
}
