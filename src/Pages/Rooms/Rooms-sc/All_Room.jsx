import React from 'react';
import Room_card from './Room_card'
import Room1 from '../../../images/room.png'
import Img from '../../../images/Intro-frame.png'




export default function All_Room({room1,room2}) {


  return (
    <div className="main-room">
    <div className="all-room">
<Room_card room={room1} />
 {room2&& <Room_card room={room2} /> }


</div>

<div className="frame">
  <img src={Img} alt="" />
</div>
    </div>
  )
}
