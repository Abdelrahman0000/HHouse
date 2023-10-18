
import React,{useState,useContext} from 'react'
import { LanguageContext } from '../../../App';
import In_Frame from '../../../images/Intro-frame.png'



export default function Intro() {
  const language = useContext(LanguageContext);

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };



  return (
    <div className='intro'>
      <div className="intro-inner">
{/* <Navbar /> */}
<div className="intro-sec bg-sc">
<div className="intro-contan">
<div className="box-container">
<div className="box">
<div className="custom-select" >
 {language==='en'? <select>
    <option value="0">Select month:</option>
    <option value="1">20 December</option>
    <option value="2">25 December</option>
    <option value="3">30 December</option>
   
  </select>:

<select>
    <option value="0">أختر الشهر:</option>
    <option value="1">20 ديسيمبر</option>
    <option value="2">25 ديسيمبر</option>
    <option value="3">30 ديسيمبر</option>
   
  </select>}

</div>
<p>{language==='en'?  'Arrival' :'الوصول'}</p>
</div>

<div className="box">
<div className="custom-select" >
{language==='en'? <select>
    <option value="0">Select month:</option>
    <option value="1">20 December</option>
    <option value="2">25 December</option>
    <option value="3">30 December</option>
   
  </select>:

<select>
    <option value="0">أختر الشهر:</option>
    <option value="1">20 ديسيمبر</option>
    <option value="2">25 ديسيمبر</option>
    <option value="3">30 ديسيمبر</option>
   
  </select>}
</div>
<p>{language==='en'?'Departure':'المغادرة'}</p>
</div>


<div className="box">
<div className="input-wrapper">
      <button id="decrement" onClick={decrementQuantity}>-</button>
      <input type="number" value={quantity} id="quantity" readOnly />
      <button id="increment" onClick={incrementQuantity}>+</button>
    </div>
<p>{language==='en'?'Adults':'البالغلين'}</p>
</div>

<div className="box">
<div className="input-wrapper">
      <button id="decrement" onClick={decrementQuantity}>-</button>
      <input type="number" value={quantity} id="quantity" readOnly />
      <button id="increment" onClick={incrementQuantity}>+</button>
    </div>
<p>{language==='en'?'Children':'الأطفال'}</p>
</div>
</div>

<button className="btn-1">
Check Availability
</button>
</div>
</div>

<div className="intro-frame">
  <img src={In_Frame} alt="" />
</div>
</div>
<div className="sm-sc">
<h3>{language==='en'?'Following the damascene architectural style':'.موسبيإ ميرول صن نم خسن'}</h3>


<div className="intro-sec ">
<div className="intro-contan">
<div className="box-container">
<div className="box">
<div className="custom-select" >
 {language==='en'? <select>
    <option value="0">Select month:</option>
    <option value="1">20 December</option>
    <option value="2">25 December</option>
    <option value="3">30 December</option>
   
  </select>:

<select>
    <option value="0">أختر الشهر:</option>
    <option value="1">20 ديسيمبر</option>
    <option value="2">25 ديسيمبر</option>
    <option value="3">30 ديسيمبر</option>
   
  </select>}

</div>
<p>{language==='en'?  'Arrival' :'الوصول'}</p>
</div>

<div className="box">
<div className="custom-select" >
{language==='en'? <select>
    <option value="0">Select month:</option>
    <option value="1">20 December</option>
    <option value="2">25 December</option>
    <option value="3">30 December</option>
   
  </select>:

<select>
    <option value="0">أختر الشهر:</option>
    <option value="1">20 ديسيمبر</option>
    <option value="2">25 ديسيمبر</option>
    <option value="3">30 ديسيمبر</option>
   
  </select>}
</div>
<p>{language==='en'?'Departure':'المغادرة'}</p>
</div>


<div className="box">
<div className="input-wrapper">
      <button id="decrement" onClick={decrementQuantity}>-</button>
      <input type="number" value={quantity} id="quantity" readOnly />
      <button id="increment" onClick={incrementQuantity}>+</button>
    </div>
<p>{language==='en'?'Adults':'البالغلين'}</p>
</div>

<div className="box">
<div className="input-wrapper">
      <button id="decrement" onClick={decrementQuantity}>-</button>
      <input type="number" value={quantity} id="quantity" readOnly />
      <button id="increment" onClick={incrementQuantity}>+</button>
    </div>
<p>{language==='en'?'Children':'الأطفال'}</p>
</div>
</div>

<button className="btn-1">
Check Availability
</button>
</div>
</div>
</div>
</div>


  )
}

