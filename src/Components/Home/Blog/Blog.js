import React from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';

import farida from '../../../images/people-2.png';
import uddin from'../../../images/people-3.png';

const blog= [
    {
        
        name:'Farid',
        date:'22/05/2021',
        title:'checked in a year ',
        coments:'Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with'
        
    },
    {
        image:farida,
        name:'Farid uddin',
        date:'22/03/2021',
        title:'2 times of brush in day',
        coments:'Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with'
    },
    {
        image:uddin,
        name:'Farida Akter ',
        date:'22/01/2021',
        title:'the totth cancer',
        coments:'Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with'
    }
]

const Blog = () => {
    return (
        <section className='mt-5 '>
            <div className=' row  container-fluid'>
                <div className='text-center col ' >
                    <h3 style={{color:'#1CC7C1'}}>BLOG</h3>
                    <h3>From Our Blog News</h3>
                </div>
                <div className=' row  mt-5'>
                {
                        blog.map(mp=><BlogDetails mp={mp}></BlogDetails>)
                }
                </div>
            </div>
        </section>
    );
};

export default Blog;