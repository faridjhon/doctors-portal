import React from 'react';
import '../DoctorsDetails/DoctorsDetails.css'

const DoctorsDetails = (props) => {
    const {image,name,mobile}=props.dc;
    return (
        <div className='col-md-4 text-center '>
            <img className='docimg' src={image} alt="" srcset="" />
            <h6>{name}</h6>
            <small>{mobile}</small>
        </div>
    );
};

export default DoctorsDetails;