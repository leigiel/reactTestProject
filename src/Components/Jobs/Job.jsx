import React from "react";
import { Link } from "react-router-dom";
import { MdAccessTime } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
const Job = ({ job }) => {
  console.log(job);
  const { job_title, image, companyName, duty_hours, salary, location, _id } = job;
  return (
    <div className="border rounder-xl">
      <div className="p-5">
        <img className="h-[200px]" src={image} alt="" />
        <p className="text-xl font-bold">{job_title}</p>
        <p className="text-lg font-bold">{companyName}</p>
        <p className="text-lg flex items-center gap-1 font-semibold"><MdAccessTime />{duty_hours}</p>
        <div className="flex gap-4 items-center ">
        <p className="text-lg flex items-center gap-1 font-semibold"><CiDollar />{salary}</p>
        <p className="text-lg font-semibold flex items-center"><CiLocationOn />{location}</p>
        </div>
       <Link to={`/jobs/${_id}`}><button className="btn btn-primary mt-3">Jobs Details</button></Link>
      </div>
    </div>
  );
};

export default Job;
