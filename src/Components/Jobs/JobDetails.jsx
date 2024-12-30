import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../../LocalStorage/LocalStorage";

const JobDetails = () => {
  const values = useLoaderData();
  const {
    _id,
    job_title,
    description,
    companyName,
    deadline,
    duty_hours,
    experience,
    jobSummary,
    postDate,
    location,
    salary,
    skills,
  } = values;
  console.log(values);
  const handleSubmit = () => {
    const data = getDataFromLocalStorage()
    const exists =data.find(da=>da == _id)
    if(!exists){
      setDataToLocalStorage(_id);
      toast("Applied Successfully");
    }
   else{
    toast.error('Already Exists')
   }
  };
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center mt-20 font-bold text-4xl border border-b-indigo-500 shadow-lg text-white py-3 rounded-xl bg-gradient-to-r from-indigo-500">
        Job Details
      </h2>

      <div className="grid grid-cols-3 mt-20 gap-10">
        <div className="col-span-2 border-2 border-blue300 p-10 rounded-xl">
          <h1 className="font-bold text-2xl">Job Title</h1>
          <p className="text-xl mt-2">{job_title}</p>
          <hr className="border border-black mt3" />
          <p className="text-xl mt-5 font-bold">Job Summary</p>
          <p className="text-xl mt-2">{jobSummary}</p>
          <hr className="border border-black mt3" />
          <p className="text-xl mt-5 font-bold">Description</p>
          <p className="text-xl mt-2">{description}</p>
          <hr className="border border-black mt3" />
        </div>
        <div className="border-2 border-blue300 p-10 rounded-xl">
          <h1 className="font-bold text-2xl">Comapany Name</h1>
          <p className="text-xl font-semibold mt-3">{companyName}</p>
          <p className="font-bold text-2xl mt-2">Skills</p>
          <p className="text-xl font-semibold mt-3">{skills}</p>
          <p className="font-bold text-2xl mt-2">Experience</p>
          <p className="text-xl font-semibold mt-3">{experience} years</p>
          <div className="flex gap-10">
            <div>
              <p className="font-bold text-2xl mt-2">Location</p>
              <p className="text-xl font-semibold mt-3">{location}</p>
            </div>
            <div>
              <p className="font-bold text-2xl mt-2">Salary</p>
              <p className="text-xl font-semibold mt-3">{salary}</p>
            </div>
          </div>
          <p className="font-bold text-2xl mt-2">Duty hours</p>
          <p className="text-xl font-semibold mt-3">{duty_hours}</p>
          <p className="font-bold text-2xl mt-2">Deadline</p>
          <p className="text-xl font-semibold mt-3">{deadline}</p>
          <p className="font-bold text-2xl mt-2">Post Date</p>
          <p className="text-xl font-semibold mt-3">{postDate}</p>
          <button
            className="btn bg-indigo-500 mt-5 px-10"
            onClick={handleSubmit}
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
