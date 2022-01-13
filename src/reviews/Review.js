import React from "react";
import {IoChevronBack, IoChevronForward} from 'react-icons/io5'
import {FaQuoteRight} from 'react-icons/fa';
const Review = ({id,person,img,job,text,changeReview})=>{
    return <article className='review'>
        <div className="img-container">
            <img src={img} alt={person} />
            <div className="circle"><FaQuoteRight/></div>
        </div>
        <h3 className='name'>{person}</h3>
        <p className='job'>{job}</p>
        <p className='text'>{text}</p>
        <div className="btn-container">
            <button className='control-btn' onClick={()=>changeReview('dec')}>
                <IoChevronBack/>
            </button>
            <button className='control-btn' onClick={()=>changeReview('inc')}>
                <IoChevronForward/>
            </button>
        </div>
        <button className='btn' onClick={()=>changeReview('random')}>surprise me</button>
    </article>
}

export default Review;