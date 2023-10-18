import React,{useContext} from 'react'
import { LanguageContext } from '../../App';
import Intro_frame from '../../images/Intro-frame.png'
import Bg5 from '../../images/bg5.png'

import About1 from '../../images/about1.png'
import About2 from '../../images/about2.png'
import About3 from '../../images/about3.png'

import './About.css'


export default function About() {
    const language = useContext(LanguageContext);
    
  return (
  <div className="about">
    
<div className="intro">
        <div className="bg-img">
            <img src={Bg5} alt="" />
        </div>
<div className="intro-in">

<h1 className="bg-scr">{language==='en'?'About Us':'عن الفندق' }</h1>
<h1 className="sm-scr" >{language==='en'?'About Us':'عن الفندق' }</h1>
</div>
<div className="image">
  <img src={Intro_frame} alt="" />
</div>

    </div>


<div className="event-desc about-desc">
<div className="desc-left">
<h2>enim ipsam 
voluptatem </h2>
<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur maNemo enim ipsam voluptatem quia voluptas sit aspernatur</p>

</div>

<div className="desc-right">
    <img src={About1} alt="" />
    
</div>
</div>


<div className="event-desc">


<div className="desc-right desc-imgs">
    <img src={About2} alt="" />
    <img src={About3} alt="" />
</div>
<div className="desc-left">
<h2>enim ipsam 
voluptatem </h2>
<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur maNemo enim ipsam voluptatem quia voluptas sit aspernatur</p>

</div>
</div>


  </div>
  )
}
