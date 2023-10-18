import React,{useContext} from 'react'
import { LanguageContext } from '../../../App';
import Intro_frame from '../../../images/Intro-frame.png'
import Bg2 from '../../../images/Bg2.png'


export default function Intro() {
  const language = useContext(LanguageContext);
  return (
    <div className="intro">
       <div className="bg-img">
            <img src={Bg2} alt="" />
        </div>
<div className="intro-in">

<h1 className="bg-scr">Following the damascene 
architectural style</h1>
<h1 className="sm-scr">{language==='en'?'Rooms':'الغرف'}</h1>
</div>
<div className="image">
  <img src={Intro_frame} alt="" />
</div>

    </div>
  )
}
