import React from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import farid from '../../../images/people-1.png';
import farida from '../../../images/people-2.png';
import uddin from'../../../images/people-3.png';


const testimonial= [
    {
        image:farid,
        name:'Farid',
        country:'Bangladesh',
        coments:'Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with'
        
    },
    {
        image:farida,
        name:'Farid uddin',
        country:'Japan',
        coments:'Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with'
    },
    {
        image:uddin,
        name:'Farida Akter ',
        country:'India',
        coments:'Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with'
    }
]

const Testimonial = () => {
    return (
        <section className='mt-5'>
            <div className='row container-fluid'>
                <div className='col'>
                    <h5 style={{color:'#1CC7C1'}}>TESTIMONIAL</h5>
                    <h3>What's Our Patients<br></br>Says</h3>

                </div>

            </div>
            <div className='row container-fluid mt-5'>
                {
                   testimonial.map(pdx=> <TestimonialDetails pdx={pdx}></TestimonialDetails>) 
                }

            </div>
            
        </section>
    );
};

export default Testimonial;