
import React, { useState, useEffect } from 'react';
import './Rooms.css';
import { All_Room, Intro } from './Rooms-sc';
import useDataFetching from '../../utils/FetchData';

export default function Rooms() {
  const url = 'https://h-house.hhouse.com.sy/api/rooms';
  const { isLoading, error, data } = useDataFetching(url);
  const [rooms, setRooms] = useState(null);
  const [background, setBackground] = useState(null);

  useEffect(() => {
    if (data && data.data && data.data.rooms) {
      setRooms(data?.data?.rooms);
    }
    if (data && data.data && data.data.background) {
      setBackground(data?.data?.background);
    }
  }, [data]);

  if (isLoading) return <div className="in-spinner"> <div className="spinner"></div> </div>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="rooms">
      {background && <Intro roomsDescription={background} />}
      {Array.isArray(rooms) && rooms.length > 0 ? (
        rooms.map((room, index) => {
          if (index % 2 === 0) {
            return <All_Room key={index} room1={room} room2={rooms[index + 1]} />;
          }
          return null;
        })
      ) : null}
    </div>
  );
}