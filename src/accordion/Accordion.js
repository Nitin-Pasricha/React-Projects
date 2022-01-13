import React,{useState} from "react";
import data from './data';
import QnA from "./QnA";
import './accordion.css';


const Accordion = ()=>{
    return <section className='container'>
    <div className="title">
        <h1>FAQs</h1>
        <div className="underline"></div>
    </div>
    <div className="accordion">
        {data.map(question=>{
            return <QnA {...question} key={question.id}/>
        })}
    </div>
    </section>
}

export default Accordion;