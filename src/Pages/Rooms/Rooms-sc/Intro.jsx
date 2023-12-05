import React,{useContext} from 'react'
import { LanguageContext } from '../../../App';
import Intro_frame from '../../../images/Intro-frame.png'
import Bg2 from '../../../images/Bg2.png'


export default function Intro({roomsDescription}) {
  const language = useContext(LanguageContext);
 
  return (
    <div className="intro">
       <div className="bg-img">
            <img src={roomsDescription.image} alt="" />
        </div>
<div className="intro-in">

<h1 className="bg-scr">{language==='en'?roomsDescription.text_en:roomsDescription.text_ar}</h1>
<h1 className="sm-scr">{language==='en'?'Rooms':'الغرف'}</h1>
</div>
<div className="image">
  <img src={Intro_frame} alt="" />
</div>

    </div>
  )
}
