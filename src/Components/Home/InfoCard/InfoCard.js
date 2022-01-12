import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../InfoCard/InfoCard.css';

const InfoCard = (props) => {
    const { title, description, icon ,background } = props.pd;

    return (
        <div className="col-md-4 mt-5 text-white ">
            <div className={`d-flex info-container align-items-center info-${background}`}>
            <div className='info-icon'>
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </div>
            <div className='info-title'>
                <h6>{title}</h6>
                <small>{description}</small>
                

            </div>
            </div>


        </div>
    );
};

export default InfoCard;