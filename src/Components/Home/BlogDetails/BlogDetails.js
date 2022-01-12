import React from 'react';

const BlogDetails = (props) => {
    const { image, name, date, coments, title } = props.mp;
    return (
        <div className='col-md-4 '>
            <div className='d-flex' >
                <img src={image} alt="" srcset="" />
                <div >
                    <p>{name}</p>
                    <small>{date}</small>
                </div>

            </div>
            <div className='mt-5 '>
                <h5>{title}</h5>
                <small >{coments}</small>
            </div>

        </div>
    );
};

export default BlogDetails;