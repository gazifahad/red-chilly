import React, { useEffect, useState } from 'react';
import BreakfastItem from './BreakfastItem/BreakfastItem';

const Breakfast = () => {
    const [breakfast,setBreakfast]=useState([]);
    useEffect( ()=>{
        fetch('/Breakfast.json')
       .then(res=> res.json())
       .then(data=>setBreakfast(data));
    },[])
    return (
        <div className='container '>
        <h2 className='text-center'>Breakfast Items</h2>
        <div className="row">
        {
            breakfast.map(item=> <BreakfastItem key={item.id} item={item}></BreakfastItem>)
        }
        </div>
    </div>
    );
};

export default Breakfast;