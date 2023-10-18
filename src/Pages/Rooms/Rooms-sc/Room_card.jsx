import React,{useContext} from 'react'
import { LanguageContext,SetRoomContext } from '../../../App';
import { Link } from 'react-router-dom';

export default function Room_card({img}) {
  
  const language = useContext(LanguageContext);
  const setRoom=useContext(SetRoomContext)
  return (
    <div className="room-card">
<div className="image">
  <img src={img} alt="" />
</div>
<div className="inner" style={{flexDirection:language==='ar'?'row-reverse':'row'}}>
<div className="left">
  <h4> {language==='en'?'Nemo enim ipsam':'.موسبيإ ميرول صن'} </h4>
  <h5>{language==='en'?'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu':'.موسبيإ ميرول صن نم خسن ىلع اًضيأ توح يتلاو ركيام جياب سودلأ لثم ينورتكلإلا رشنلا جمارب روهظ عم'}</h5>
</div>
<div className="right">

<Link to={'/room_detail'}><button className='btn-r' onClick={()=>setRoom(img)}>  {language==='en'?'Discover':'اكتشف'} </button></Link>

</div>

</div>

    </div>
  )
}
