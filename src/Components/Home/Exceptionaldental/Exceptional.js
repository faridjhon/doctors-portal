import React from 'react';
import dentalexceptional from '../../../images/treatment.png'

const Exceptional = () => {
    return (
        <section  className='row container-fluid  mt-5 mb-5   align-items-center '>
            <div className='col-md-6'>
                <img style={{ height: '500px' }} className='float-end' src={dentalexceptional} alt="" />
            </div>
            <div className='col-md-6'>
                <h2>Exceptional Dental<br></br>Core,on Your Terms</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, necessitatibus
                    eius quisquam, officiis vero accusantium sed alias officia dolore
                    molestias veniam fugiat
                    ipsa provident neque doloribus quibusdam cumque distinctio? Iusto?</p>
                <button className='btn bg-info'>Learn More..</button>
            </div>
        </section>
    );
};

export default Exceptional;