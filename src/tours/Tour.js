import React from "react";

const Tour = ({id,name,info,image,price,delTour})=>{
    const [showLess, setShowLess] = React.useState(true);

    return <div className="tour">
        <div className="img">
            <img src={image} alt={name} />
        </div>
        <div style={{display:"grid",justifyContent:'space-between', gridTemplateColumns:'4fr 1fr', columnGap:'1rem',}}>
            <p className='name'>{name}</p>
            <p className='price'>${price}</p>
        </div>
        <p className='info'>{showLess?info.substring(0,200): info}
        <button  className='showBtn' onClick={()=>setShowLess(!showLess)}>{showLess?'Show more':'Show less'}</button>
        </p>
        <button className='btn' onClick={()=>delTour(id)}>Not Interested</button>
    </div>

}

export default Tour;