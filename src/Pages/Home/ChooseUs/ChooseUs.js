import React from 'react';
import image1 from '../../../images/choose -us1.png'
import image2 from '../../../images/choose -us2.png'
import image3 from '../../../images/choose -us3.png'

const ChooseUs = () => {
    return (
        <div className="card-group container ">
  <div className="card m-3 border-0">
    <img className="card-img-top" src={image1} alt="Card  cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img style={{height: '304px'}} className="card-img-top " src={image2} alt="Card  cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card m-3 border-0">
    <img className="card-img-top" src={image3} alt="Card  cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
    );
};

export default ChooseUs;