import React from 'react';

const WebSiteWork = () => {
    return (
        <div className=' mt-30 flex flex-col justify-center '>
              
             <h1 className='lg:w-[600px]  lg:ml-98 mt-3 p-2 bg-sky-100 rounded flex items-center justify-center text-3xl font-medium'>How this website works</h1>   
             {/* website working system */}
             <div className='md:ml-34 '>

         
             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-14    '>
                 
                  <div className="card w-96 bg-base-100 card-md shadow-sm border border-sky-400">
                       <div className="card-body">
                         <h2 className="card-title bg-blue-300 w-fit p-2 border rounded-xl">Step- 1</h2>
                         <p>First of all, you can browse our website then find your work relable company . And after that click company details button. </p>
                         <div className="justify-end card-actions">
                           
                         </div>
                       </div>
                 </div>
                  <div className="card w-96 bg-base-100 card-md shadow-sm border border-sky-400">
                       <div className="card-body">
                         <h2 className="card-title bg-blue-300 w-fit p-2 border rounded-xl">Step- 2</h2>
                         <p>When you get  company details page then you can see, whichjob is Available for this company now . </p>
                         <div className="justify-end card-actions">
                         
                         </div>
                       </div>
                 </div>
                  <div className="card w-96 bg-base-100 card-md shadow-sm border border-sky-400">
                       <div className="card-body">
                         <h2 className="card-title bg-blue-300 w-fit p-2 border rounded-xl">Step- 3</h2>
                         <p>Then you choose your skillfull work and click job details button then apply for this job on there website.</p>
                         <div className="justify-end card-actions">
                          
                         </div>
                       </div>
                 </div>
                  <div className="card w-96 bg-base-100 card-md shadow-sm border border-sky-400">
                       <div className="card-body">
                         <h2 className="card-title bg-blue-300 w-fit p-2 border rounded-xl">Step- 4</h2>
                         <p>Now, your task is done . if you call this job interview.Then we will mail you on your gmail account . Thank you !</p>
                         <div className="justify-end card-actions">
                          
                         </div>
                       </div>
                 </div>


            </div> 
        </div>
             
             
       </div>
    );
};

export default WebSiteWork;