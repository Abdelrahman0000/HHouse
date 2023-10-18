import React,{useContext} from 'react'
import { LanguageContext } from '../../../App';
import Intro_frame from '../../../images/Intro-frame.png'
import Bg3 from '../../../images/Bg3.png'


export default function Intro() {
  const language = useContext(LanguageContext);
  return (
    <div className="intro">
        <div className="bg-img">
            <img src={Bg3} alt="" />
        </div>
<div className="intro-in">

<h1 className="bg-scr">Quis autem vel eum iure </h1>
<h1 className="sm-scr" >Room</h1>
</div>
<div className="image">
  <img src={Intro_frame} alt="" />
</div>

    </div>
  )
}
