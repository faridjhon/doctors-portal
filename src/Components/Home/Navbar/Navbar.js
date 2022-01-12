import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container">
                
                
                    <ul class="navbar-nav ms-auto  mb-2 mb-lg-0">
                        <li class="nav-item   ">
                            <a class="nav-link active pe-4 fs-5  " aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link pe-4 fs-5 fs-5 text " href="#">About</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link pe-4 fs-5 " href="#">Dental Services</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link pe-4 fs-5 text-white" href="#">Reviews</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link pe-4 fs-5 text-white" href="#">blog</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link pe-4 fs-5 text-white" href="#">Contact Us</a>
                        </li>
                    </ul>
                    
              
            </div>
        </nav>
    );
};

export default Navbar;