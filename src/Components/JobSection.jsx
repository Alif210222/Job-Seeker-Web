import React from 'react';


const JobSection = ({company}) => {
        // console.log(data)
      
        //  console.log(company)


    return (

        <div className='text-center '>
        
         {/* company cart */}
            <div className="card  bg-[#faeec6] card-md shadow-sm">
                 <div className="card-body">
                    <h2 className="card-title">{company.name}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                 <div className="justify-end card-actions">
                     <button className="btn btn-primary">Buy Now</button>
                </div>
           </div>
         </div>

             
        </div>
    );
};

export default JobSection;