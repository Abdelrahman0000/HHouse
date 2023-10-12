import React from 'react'
import Dis1 from '../images/discover-1.png'
import Dis2 from '../images/discover-2.png'
import Dis3 from '../images/discover-3.png'
import Dis4 from '../images/discover-4.png'


export default function Discover() {
  return (
    <div className="discover">
<h1 style={{color:'#B09860', textAlign:'left'}}>Discover two floors and </h1>
<h1 style={{color:'#B09860',textAlign:'left'}}>a magnificent view rooftop</h1>

<div className="discover-inner">

<div className="box">  <img src={Dis1} alt="" /> </div>
<div className="box">  <img src={Dis2} alt="" /> </div>
<div className="box">  <img src={Dis3} alt="" /> </div>
<div className="box">  <img src={Dis4} alt="" /> </div>


</div>



    </div>
  )
}
