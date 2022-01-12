import React from 'react';

const Servicesdetails = (props) => {
    const {title,image,titlecontent}=props.xy;
    return (
        <div className='col-md-4 text-center'>
            <p className='mb-4 mt-4'>{title}</p>
            <img style={{height:'50px'}} src={image} alt="" srcset="" />
            <p className='text-secondary'>{titlecontent}</p>
        </div>
    );
};

export default Servicesdetails;