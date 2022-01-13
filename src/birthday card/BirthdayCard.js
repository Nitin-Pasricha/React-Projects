import React from 'react'
import people from './data'
import './BirthdayCard.css'


const BirthdayCard = () => {
    const [bdyPerson,setBdy]=React.useState(people);
    let value = bdyPerson.length;
    return (
        <div className='bdy-card'>
            <h2 className='heading'>{value} birthdays today</h2>
            {bdyPerson.map((person)=>{
            return <BdyTag key={person.id} {...person}/>
            })}
            <button type='button' className='btn' onClick={()=>setBdy([])}>clear all</button>
            
        </div>
    )
}

const BdyTag = ({img,name,age})=>{
    return(
        <div className="container">
            <img src={img} alt="pic" />
            <article className='person'>
                <h4>{name}</h4>
                <p>{age} years</p>
            </article>
        </div>
    )
}

export default BirthdayCard




