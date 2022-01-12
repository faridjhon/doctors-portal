import React from 'react';

const Contac = () => {
    return (
        <section style={{opacity:.7,backgroundColor:'#40475B'}} className='row container-fluid  mt-5'>
            <div className='text-center mt-5'>
                <h4 style={{color:'#13D0D7'}}>CONTACT US</h4>
                <h4 className='text-white'>Always Contact With Us</h4>
                </div>
                <div className='row mt-5 justify-content-center '>
                    <div className='col-md-6 '>
                    <div class="input-group mb-3">
                   
                   <input type="text" class="form-control" placeholder="Username" aria-label="Email Adderess" aria-describedby="basic-addon1"></input>
               </div>

               <div class="input-group mb-3">
                   <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Subject" aria-describedby="basic-addon2"></input>
                      
               </div>
                         <div class="input-group">
                          <textarea class="form-control" aria-label="Your Message "></textarea>
                       </div>
                    </div>
                </div>
                <div className='mt-5 mb-5 text-center'>
                <button className='btn btn-info'>SUBMIT</button>
                </div>
                
                
                

        </section>
    );
};

export default Contac;