
import React, { useState, useEffect } from 'react'
import { Intro, Follow, Discover, OurMap } from './HomeSection';
import './Home.css';
import useDataFetching from '../../utils/FetchData';

export default function Home() {
  const url = 'https://h-house.hhouse.com.sy/api/home-page';
  const { isLoading, error, data } = useDataFetching(url);
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    if (data && data.data) {
      setHomeData(data.data);
    }
  }, [data]);

  if (isLoading) return <div className="in-spinner"> <div className="spinner"></div> </div>;
  if (error) return <p>Error: {error.message}</p>;
if(!homeData) return <div className="in-spinner"> <div className="spinner"></div> </div>
  return (
    <div className='Home'>
      {homeData && <Intro background={homeData.background} data={homeData} />}
      {homeData && <Follow data={homeData} />}
      {homeData && <Discover data={homeData} />}
      {homeData && <OurMap data={homeData} />}
    
    </div>
  );
}