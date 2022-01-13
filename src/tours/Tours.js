import React, {useState,useEffect} from 'react';
import Tour from './Tour';
import './tours.css'
const url = 'https://course-api.com/react-tours-project'

const Tours = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState();
    const [refresh, setRefresh] = useState(true);

    const delTour = (id)=>{
        const newList=tours.filter((tour)=>tour.id!==id);
        setTours(newList);
    }

    const fetchData = async()=>{
        const data = await fetch(url);
        const response = await data.json();
        setTours(response);
        setIsLoading(false);
        setRefresh(false)
    }
    useEffect(()=>{
        if(refresh){
            fetchData();
            console.count('useEffect')
        }
    },[refresh])
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(!isLoading){
        if(tours.length>0){
            return <>
                <div className="tours">
                    <h1>Our tours</h1>
                    <div className="underline"></div>
                    {tours.map((tour)=>{
                    return <Tour {...tour} key={tour.id} delTour={delTour}/>
                    })}
                </div>
            </>
        }else{
            return<div style={{ display:'grid',}}>
            <h1>No Tours Left</h1>
            <button className='refresh-btn' onClick={()=>{setRefresh(true); setIsLoading(true)}}>Refresh</button>
            </div>
        }
    }
    
}

export default Tours;