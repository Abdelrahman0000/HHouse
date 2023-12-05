import React, { useState, useContext } from "react";
import { LanguageContext } from "../../../App";
import {LayoutSidebar} from 'react-bootstrap-icons'


export default function Descripe({room}) {
  
  const language = useContext(LanguageContext);
  return (
   <div className="descripe">

<div className="main-inner">
    <div className="left">
  
    { room.layout_en&&     <div className="box" style={{alignItems:language==='ar'?'flex-end':'flex-start'}}>
<h3 style={{textAlign:language==="en"?'left':'right'}}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M10.1245 1.125L16.875 7.87555M9 5.25055L16.875 13.1255M9 10.5005L15.3745 16.875M9 1.125V16.875M1.875 1.125H16.125C16.5392 1.125 16.875 1.46079 16.875 1.875V16.125C16.875 16.5392 16.5392 16.875 16.125 16.875H1.875C1.46079 16.875 1.125 16.5392 1.125 16.125V1.875C1.125 1.46079 1.46079 1.125 1.875 1.125Z" stroke="#B09860" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg> <span> LAYOUT</span></h3>
<h6 style={{textAlign:language==="en"?'left':'right'}}>{language==='en'?room.layout_en:room.layout_ar}</h6>
        </div>
  }
      { room.layout_en&&     <div className="box" style={{alignItems:language==='ar'?'flex-end':'flex-start'}}>
<h3 style={{textAlign:language==="en"?'left':'right'}}>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clipPath="url(#clip0_63_694)">
    <path d="M21.75 13.125H3.75V4.6875C3.74913 4.36975 3.81129 4.05498 3.9329 3.76142C4.0545 3.46786 4.23312 3.20133 4.45842 2.97726L4.47717 2.95851C4.83026 2.60594 5.2836 2.37098 5.77524 2.28572C6.26688 2.20046 6.77286 2.26907 7.22405 2.48217C6.79794 3.19064 6.62083 4.02119 6.72086 4.84185C6.82089 5.66251 7.19233 6.4262 7.77614 7.01156L8.28947 7.52489L7.34461 8.4698L8.4052 9.53039L9.35006 8.58553L14.5855 3.3502L15.5303 2.40534L14.4697 1.3447L13.5248 2.28956L13.0115 1.77623C12.3969 1.16336 11.5867 0.785558 10.7222 0.708671C9.85764 0.631784 8.99353 0.860685 8.28042 1.35548C7.52846 0.8806 6.63734 0.675589 5.75346 0.774129C4.86958 0.87267 4.04549 1.2689 3.41658 1.89773L3.39783 1.91648C3.03279 2.27953 2.74338 2.71137 2.54635 3.18702C2.34933 3.66266 2.2486 4.17266 2.25 4.6875V13.125H0.75V14.625H2.25V16.0641C2.24997 16.185 2.26947 16.3051 2.30775 16.4198L3.70312 20.6057C3.77759 20.8298 3.92078 21.0248 4.11235 21.1629C4.30392 21.301 4.53413 21.3752 4.77028 21.375H5.37497L4.82812 23.25H6.39061L6.9375 21.375H16.6922L17.2547 23.25H18.8203L18.2578 21.375H19.2295C19.4657 21.3752 19.696 21.301 19.8876 21.1629C20.0792 21.0248 20.2224 20.8299 20.2969 20.6057L21.6922 16.4198C21.7304 16.3051 21.75 16.185 21.75 16.0641V14.625H23.25V13.125H21.75ZM8.83687 2.83687C9.25012 2.42453 9.81007 2.19295 10.3939 2.19295C10.9776 2.19295 11.5376 2.42453 11.9508 2.83687L12.4641 3.3502L9.3502 6.46406L8.83687 5.95083C8.42455 5.53757 8.19298 4.97763 8.19298 4.39385C8.19298 3.81007 8.42455 3.25013 8.83687 2.83687ZM20.25 16.0031L18.9594 19.875H5.04056L3.75 16.0031V14.625H20.25V16.0031Z" fill="#B09860"/>
  </g>
  <defs>
    <clipPath id="clip0_63_694">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg> 
<span>BATHROOM</span>
</h3>
<h6 style={{textAlign:language==="en"?'left':'right'}}>{language==='en'?room.bathroom_en:room.bathroom_ar}</h6>
        </div> }
    </div>
    
  <div className="right">
  { room.bed_en&&    <div className="box" style={{alignItems:language==='ar'?'flex-end':'flex-start'}}>
<h3 style={{textAlign:language==="en"?'left':'right'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 10V5H3V10H2V19H4V17H20V19H22V10H21ZM13 7H19V10H13V7ZM5 10V7H11V10H5ZM4 15V12H20V15H4Z" fill="#B09860"/>
</svg>
<span>BED & BED LINEN</span>
</h3>
<h6 style={{textAlign:language==="en"?'left':'right'}}>{language==='en'?room.bed_en:room.bed_ar}</h6>
        </div>
    }
       { room.facilities_en&&    <div className="box" style={{alignItems:language==='ar'?'flex-end':'flex-start'}}>
<h3 style={{textAlign:language==="en"?'left':'right'}}> <span className="end-logo">+</span> <span>FACILITIES & SERVICES</span> </h3>
<h6 style={{textAlign:language==="en"?'left':'right'}}>{language==='en'?room.facilities_en:room.facilities_ar}</h6>
        </div>
}
    </div>
</div>



   </div>
  )
}
