import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style ={{height:600}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h2>Your New Smile <br></br>Starts Here</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel, cumque voluptate quam debitis blanditiis fugiat molestiae modi? Ullam nihil ab officia? hil officiis qui!</p>
                <button className='bg-info btn '>GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} className='img-fluid' alt="" srcset="" />
            </div>
            
        </main>
    );
};

export default HeaderMain;