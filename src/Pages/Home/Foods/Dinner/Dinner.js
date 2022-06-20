import React, { useEffect, useState } from 'react';
import DinnerItem from './DinnerItem/DinnerItem';

const Dinner = () => {
    const [dinner,setDinner]=useState([]);
    useEffect( ()=>{
        fetch('/lunch.json')
       .then(res=> res.json())
       .then(data=>setDinner(data));
    },[])
    return (
        <div className='container'>
        <h2>Dinner Items</h2>
        <div className="row">
        {
            dinner.map(item=> <DinnerItem key={item.id} item={item}></DinnerItem>)
        }
        </div>
    </div>
    );
};

export default Dinner;