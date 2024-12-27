import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
      {data.job_title}
        </div>
    );
};

export default JobDetails;