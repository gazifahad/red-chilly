import React from 'react';
import { AnimationWrapper } from 'react-hover-animation';

const BreakfastItem = ({item}) => {
    const {id,name,description,price,img}=item;
    return (
        <div className="col col-sm-12 col-md-6 col-lg-4 mt-5">
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{ margin:"0 auto", width: '18rem'}}>
        <AnimationWrapper>
<img  src={img} className="card-img-top" alt="..."></img>
<div className="card-body">
 <h5 className="card-title">{name}</h5>
 <p className="card-text">It is delicius</p>
 <p  >price: {price}</p>
 <a  className="btn btn-success">Add to cart</a>
</div></AnimationWrapper>
</div>
</div>
    );
};

export default BreakfastItem;