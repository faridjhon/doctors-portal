import React from 'react';
import doctor from '../../../images/doctor.png'
import bkimage from '../../../images/appointment-bg.png'
import '../../../Components/Home/Appointment/Appointment.css';



const Appointment = () => {
    return (
        <section style={{backgroundImage: `url(${bkimage})`,opacity:.8,height:500 }} className='row mt-5 mb-5  container-fluid  align-items-center appointment '>
                           
                <div className='col-md-6'>
                    <img style={{ height: '500px',marginTop:-275 }} className='float-end' src={doctor} alt="" />
                </div>
                <div className='col-md-6'>
                    <h6>APPOINTMENT</h6>
                    <h3>Make an appointment<br></br>Today</h3>
                    <p>it is a long established fact that a reader will be distroctedby the reaabble<br></br>content of a page when looking at its.</p>
                    <button className='btn bg-info'>Learn More..</button>
                </div>
         

        </section>
    );
};

export default Appointment;