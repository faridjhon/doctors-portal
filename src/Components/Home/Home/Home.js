import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contac from '../ContacUs/Contac';
import ContacUs from '../ContacUs/contacUs';
import Doctors from '../Doctors/Doctors';
import Exceptional from '../Exceptionaldental/Exceptional';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='container-fluid'>
            
            <Header></Header>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contac></Contac>
            <Footer></Footer>
        </div>
    );
};

export default Home;