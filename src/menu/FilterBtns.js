import React from "react";

const FilterBtns = ({data,setItems})=>{
    console.log(data)
    const filterMenu = (e)=>{
        const filter = e.currentTarget.id;
        if(filter!=='all'){
            const newMenu = data.filter(item=>item.category === filter)
            setItems(newMenu)
        }
        else{
            setItems(data)
        }
    }
    const btns = ['all'];
    data.filter(btn=>{
        if(!btns.includes(btn.category)){
            btns.push(btn.category);
        }
        return btn
    })
    return <div className="btn-container">
        {btns.map((btn,index=0)=>{
            return <button className='btn' key={index+1} onClick={filterMenu} id={btn}>{btn}</button>
        })}
    </div>
}

export default FilterBtns;