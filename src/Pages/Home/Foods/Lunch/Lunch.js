import React, { useEffect , useState } from 'react';
import lunch from './Lunch.json'
import LunchItem from './LunchItem/LunchItem';

const Lunch = () => {

    const [lunch,setLunch]=useState([]);
    useEffect( ()=>{
        fetch('/lunch.json')
       .then(res=> res.json())
       .then(data=>setLunch(data));
    },[])
    return (
        <div className='container'>
            <h2 className='text-center'>Lunch Items</h2>
            <div className="row">
            {
                lunch.map(item=> <LunchItem key={item.id} item={item}></LunchItem>)
            }
            </div>
        </div>
    );
};

export default Lunch;