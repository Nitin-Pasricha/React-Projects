import React, {useState,useEffect} from 'react';
import data from './data';
import Review from './Review';
import './reviews.css'

const Reviews = ()=>{
    const [index, setIndex] = useState(0);
    const [review, setReview] = useState(data[index]);
    const changeReview = (value)=>{
        if(value==='inc' && index<data.length-1){
            console.log('inc')
            setIndex(index+1);
            //console.log(index)
        }
        else if(value==='dec' && index>0){
            console.log('dec')
            setIndex(index-1)
            //console.log(index)
        }
        else if(value==='random'){
            let count = Math.floor(Math.random()*data.length);
            console.log(count)
            setIndex(count);
        }
        else{
            console.log('na')
            setIndex(0)
        }
        //console.log(index)
    }
    useEffect(()=>{
        setReview(data[index])
    },[index])
    return <section>
        <h1>Our Reviews</h1>
        <div className="underline"></div>
        <Review {...review} changeReview={changeReview}/>
    </section>;
}

export default Reviews;