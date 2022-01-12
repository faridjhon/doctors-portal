import React from 'react';
import farid from '../../../images/doctor-small.png';
import farida from '../../../images/people-2.png';
import uddin from'../../../images/doctor-small.png';
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';

const doctor= [
    {
        image:farid,
        name:'Farid',
        mobile:'01974800019'
    },
    {
        image:farida,
        name:'Farid uddin',
        mobile:'01974800019'
        
    },
    {
        image:uddin,
        name:'Farida Akter ',
        mobile:'01974800019'
    }
]

const Doctors = () => {
    return (
        <section className='container-fluid'>
            <div className='text-center mt-5'>
                <h3>Doctors</h3>
            </div>
            <div className='row container-fluid mt-5'>
                {
                    doctor.map(dc=><DoctorsDetails dc={dc}></DoctorsDetails>)
                }
            </div>
            
        </section>
    );
};

export default Doctors;