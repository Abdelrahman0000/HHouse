import React from 'react'
import { Descripe, Intro, SingleRoom } from './RoomDetial-sc'
import './RoomDetail.css'
export default function RoomDetial({room}) {
    console.log(room)
  return (
   <div className="room-detial">
    <Intro/>
    <SingleRoom room={room} />
    <Descripe />
   </div>
  )
}
