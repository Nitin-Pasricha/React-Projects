import React,{useState} from "react";
import data from './data';
import Item  from './Item';
import FilterBtns from './FilterBtns';

import './menu.css';

const Menu = ()=>{
    const [items,setItems] = useState(data);
    return <main>
        <div className="title">
            <h1>Our Menu</h1>
            <div className="underline"></div>
        </div>
        <FilterBtns data={data} setItems={setItems}/>
        <div className="menu">
            {items.map((item)=>{
                return <Item {...item} key={item.id}/>
            })}
        </div>
    </main>
}

export default Menu;