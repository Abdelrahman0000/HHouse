import React, { useEffect, useState } from 'react';

import { Descripe, Intro, SingleRoom } from './RoomDetial-sc'
import './RoomDetail.css'
export default function RoomDetial() {
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const savedRoom = localStorage.getItem('selectedRoom');
    if (savedRoom) {
      const parsedRoom = JSON.parse(savedRoom);
      setRoom(parsedRoom);
    }
  }, []);

  if (!room) {
    return <p>No room selected.</p>;
  }

    console.log(room)
  return (
   <div className="room-detial">
    <Intro img={room.hero_image} title_ar={room.title_ar} title_en={room.title_en}/>
    <SingleRoom room={room} />
    <Descripe room={room} />
   </div>
  )
}
