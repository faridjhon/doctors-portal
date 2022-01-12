import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import '../BusinessInfo/BusinessInfo.css';
import { faClock,faPhone,faInfo } from '@fortawesome/free-solid-svg-icons'


const infosData =
                [
                    {
                        title: 'Opening Hours',
                        description: 'We are open 7 days ',
                        icon: faClock,
                        background: 'primary'
                    },
                    {
                        title: 'Visit Our Location',
                        description: 'Brooklyn,NY 10003 USA ',
                        icon: faInfo,
                        background: 'dark'
                    },
                    {
                        title: 'Call us now',
                        description: '+1596666 ',
                        icon: faPhone,
                        background: 'primary'
                    }
                ]

const Businessinfo = () => {
    return (
        <section className="d-flex justify-content-center  ">
            <div className='row w-75'>
                {
                    infosData.map(pd => <InfoCard pd={pd}></InfoCard>)
                }
            </div>
                        
        </section>
    );
};

export default Businessinfo;