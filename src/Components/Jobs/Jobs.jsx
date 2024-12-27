import React, { useEffect, useState } from 'react';
import Job from './job';

const Jobs = () => {
    const [value,setValue] = useState(4)
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetch('https://next-level-two-ashen.vercel.app/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[]) 
    return (
        <div className='max-w-6xl mx-auto mt-20'>
         <h2 className='text-center font-bold text-4xl border border-b-indigo-500 shadow-lg text-indigo-500 py-3 rounded-xl'>JOBS</h2>
         <p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Ratione ipsum adipisci exercitationem consequuntur error nulla recusandae assumenda, tempora optio! Nisi!</p>
         <div className='mt-10 grid grid-cols-2 gap-10'>
         {
               jobs.slice(0,value).map(job=><Job key={job._id} job={job}></Job>)
            } 
         </div>
        <div className='mt-5 flex justify-center'>
        <button className='btn btn-primary' onClick={()=>setValue(jobs.length)}>View All</button>
          
            
            {/* {
                jobs.length === value?<button className='btn btn-primary' onClick={()=>setValue(jobs.length)}>View All</button>:<button className='btn btn-primary' onClick={()=>setValue(4)}>Show Four</button>
            } */}
        </div>
        </div>
    );
};

export default Jobs;