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
            //    jobs.slice(0,value).map(job=><Job key={job._id} job={job}></Job>)

            jobs.length?jobs.slice(0,value).map(job=><Job key={job._id} job={job}></Job>):<div className="grid grid-cols-3 gap-96">
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>

          </div>
            } 
         </div>
        <div className='mt-5 flex justify-center'>
      
          
            {
                value === 4?<button className='btn btn-primary' onClick={()=>setValue(jobs.length)}>View All</button>:<button className='btn btn-primary' onClick={()=>setValue(4)}>Show Four</button>
            }
        </div>
        </div>
    );
};

export default Jobs;