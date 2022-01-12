import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import '../Header/Header.css';
import Businessinfo from '../BusinessInfo/Businessinfo';

const Header = () => {
    return (
        <div className='header-container  '>
            
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Businessinfo></Businessinfo>
            
        </div>
    );
};

export default Header;