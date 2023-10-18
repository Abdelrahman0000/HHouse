import React from 'react'
import {Intro,Follow,Discover,OurMap} from './HomeSection'
import './Home.css'
export default function Home() {
  return (
    <div className='Home'>
    <Intro />
    <Follow />
    <Discover />
    <OurMap />
   
        </div>
  )
}
