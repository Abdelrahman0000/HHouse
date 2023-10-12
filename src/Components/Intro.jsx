
import React,{useState} from 'react'
import Navbar from './Navbar'
import In_Frame from '../images/Intro-frame.png'



export default function Intro() {


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
<Navbar />
<div className="intro-sec">
<div className="intro-contan">
<div className="box-container">
<div className="box">
<div className="custom-select" >
  <select>
    <option value="0">Select month:</option>
    <option value="1">20 December</option>
    <option value="2">25 December</option>
    <option value="3">30 December</option>
   
  </select>
</div>
<p> Arrival</p>
</div>

<div className="box">
<div className="custom-select" >
  <select>
    <option value="0">Select month:</option>
    <option value="1">20 December</option>
    <option value="2">25 December</option>
    <option value="3">30 December</option>
   
  </select>
</div>
<p> Departure</p>
</div>


<div className="box">
<div className="input-wrapper">
      <button id="decrement" onClick={decrementQuantity}>-</button>
      <input type="number" value={quantity} id="quantity" readOnly />
      <button id="increment" onClick={incrementQuantity}>+</button>
    </div>
<p> Adults</p>
</div>

<div className="box">
<div className="input-wrapper">
      <button id="decrement" onClick={decrementQuantity}>-</button>
      <input type="number" value={quantity} id="quantity" readOnly />
      <button id="increment" onClick={incrementQuantity}>+</button>
    </div>
<p> Children</p>
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


  )
}

