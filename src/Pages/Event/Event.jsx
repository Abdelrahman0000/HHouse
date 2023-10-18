import React,{useContext} from 'react'
import { LanguageContext } from '../../App';
import Intro_frame from '../../images/Intro-frame.png'
import Bg4 from '../../images/Bg4.png'
import Event1 from '../../images/event1.png'
import Event2 from '../../images/event2.png'
import Event3 from '../../images/event3.png'
import Event4 from '../../images/event4.png'
import G_Bg from '../../images/pattern 3.png'
import G_Bg2 from '../../images/pattern2 2.png'
import './Event.css'
export default function Event() {
    const language = useContext(LanguageContext);
  return (
   <div className="event">

<div className="intro">
        <div className="bg-img">
            <img src={Bg4} alt="" />
        </div>
<div className="intro-in">

<h1 className="bg-scr">{language==='en'?'Events':'القاعات' }</h1>
<h1 className="sm-scr" >{language==='en'?'Events':'القاعات' }</h1>
</div>
<div className="image">
  <img src={Intro_frame} alt="" />
</div>

    </div>


<div className="event-desc">
<div className="desc-left">
<h2>enim ipsam 
voluptatem </h2>
<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur maNemo enim ipsam voluptatem quia voluptas sit aspernatur</p>

</div>

<div className="desc-right">
    <img src={Event1} alt="" />
    <img src={Event4} alt="" className='img-left' />
</div>
</div>

<div className="img-gallery">

<div className="top"> <img src={Event2} alt="" /> </div>
<div className="bottom">  <img src={Event3} className='bt-left' alt="" />  <img src={Event4} className='bt-right' alt="" />   </div>

<div className="gallery-bg">
    <img src={G_Bg} alt="" />
</div>

<div className="gallery-bg1">
    <img src={G_Bg2} alt="" />
</div>
</div>


<div className="book">

<img src={G_Bg2} alt="" />

<div className="btn-contaner">

<button>Book Now</button>

</div>

</div>

   </div>
  )
}
