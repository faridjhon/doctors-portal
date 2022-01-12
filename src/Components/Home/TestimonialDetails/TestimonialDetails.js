import React from 'react';



const TestimonialDetails = (props) => {
    const { name, coments, image, country } = props.pdx;
    return (
        <div className='col-md-4  '>
            <p>{coments}</p>
            <div className=' d-flex mt-5  '>
                <img src={image} alt="" srcset="" />
                <div className='ps-3 justify-content-center'>
                    <h6 style={{color:'#1CC7C1'}}>{name}</h6>
                    <p>{country}</p>
                </div>

            </div>


        </div>
    );
};

export default TestimonialDetails;