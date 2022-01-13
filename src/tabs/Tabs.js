import React,{useState,useEffect} from "react";
import {MdDoubleArrow} from "react-icons/md";
import './tabs.css';

const url = 'https://course-api.com/react-tabs-project'


const Tabs = ()=>{
    const [profiles,setProfiles] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [bio,setBio] = useState({title:'full stack developer',company:'tommy',order:3,dates:'december 2015 - present', duties:["Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.","Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.","Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."],});


    const [highlightedBtn, setHighlightedBtn] = useState('');

    const clickHandler = (e,profile)=>{
        const btn = document.querySelector('.highlight');
        if(btn){
            btn.classList.remove('highlight');
        }
        const element = e.currentTarget;
        element.classList.add('highlight');
        if(highlightedBtn){
            highlightedBtn.classList.remove('highlight');
        }
        setHighlightedBtn(element);
        setBio(profile);
    }
    const dataFetching = async()=>{
        const data = await fetch(url);
        const dataFetched = await data.json();
        if(dataFetched){
            setIsLoading(false);
            setProfiles(dataFetched);
        }
    }
    useEffect(()=>{
     dataFetching();
    },[url])
    if(isLoading){
        return <h1 style={{margin: '3rem auto', textAlign:'center'}}>Loading...</h1>
    }
    return <section className='tabs'>
        <div className="title">
            <h1>Experience</h1>
            <div className="underline"></div>
        </div>
        <article className="container">
            <div className="btn-container">
            {profiles.map((profile)=>{
                if(profile.order===3){
                    return<button type='button' className='btn highlight' key={profile.id} onClick={(e)=>clickHandler(e,profile)}>{profile.company}</button>
                }
                return<button type='button' className='btn' key={profile.id} onClick={(e)=>clickHandler(e,profile)}>{profile.company}</button>
            })}
            </div>
            <article className='experience'>
                <p className='skill'>{bio.title}</p>
                <h3>{bio.company}</h3>
                <h4>{bio.dates}</h4>
                {bio.duties.map((duty,index)=>{
                    return <div className="resume" key={index}>
                        <MdDoubleArrow className='arrow'/>
                        <p className='info'>{duty}</p>
                    </div>
                })}
            </article>
        </article>
        <button type='button' className='info-btn'>more info</button>
    </section>
}



export default Tabs;