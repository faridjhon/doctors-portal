import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/whitening.png';
import Servicesdetails from '../ServicesDetails/Servicesdetails';

const servicesData= [
    {
        image:fluoride,
        title:'Fluoride Treatment',
        titlecontent:'lorem ba da ca eee'
    },
    {
        image:cavity,
        title:'Cavity Filling',
        titlecontent:'lorem lorem ba da ca eee'
    },
    {
        image:teath,
        title:'Teath Whitening',
        titlecontent:'lorem lorem lorem ba da ca eee'
    }
]

const Services = () => {
    return (
        <section className='services-container'>
           <div className='text-center'>
                <p className='mt-4' style={{color:'#1cc7c1'}}>OUR SERVICES</p>
                <h4>Services We Provide</h4>
           </div>
           <div className="d-flex justify-content-center ">
            <div className='row w-75'>
                {
                    servicesData.map(xy => <Servicesdetails xy={xy}></Servicesdetails>)
                }
            </div>
                        
        </div>
        </section>
    );
};

export default Services;