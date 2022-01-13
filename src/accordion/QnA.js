import { useState } from "react";
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

const QnA = ({title,info})=>{
    const [showAnswer,setShowAnswer] = useState(false);
    return <div className="question">
        <button className='btn' onClick={()=>setShowAnswer(!showAnswer)}>{!showAnswer?<AiOutlinePlus/>:<AiOutlineMinus/>}</button>
        <h4>{title}</h4>
        {showAnswer && <p>{info}</p>}
    </div>
}




export default QnA;