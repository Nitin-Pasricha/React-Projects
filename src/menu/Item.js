import React from "react";

const Item = ({title,category,price,desc,img})=>{
    return <div className="item">
        <img src={img} alt={title} />
        <div className="desc">
            <header>
                <h4 className='name'>{title}</h4>
                <h4 className='price'>${price}</h4>
            </header>
            <p>{desc}</p>
        </div>
    </div>
}

export default Item;