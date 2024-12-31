import React, { useEffect, useState } from "react";
import {
  deleteDataFromLocalStorage,
  getDataFromLocalStorage,
} from "../../LocalStorage/LocalStorage";
import { useLoaderData } from "react-router-dom";
import AppliedJobs from "./AppliedJobs";
import { ToastContainer, toast } from "react-toastify";

const Apply = () => {
  const values = useLoaderData();
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    const data = getDataFromLocalStorage();
    const emptyArray = [];
    for (const da of data) {
      const filterData = values.find((value) => value._id === da);
      if (filterData) {
        emptyArray.push(filterData);
      }
    }
    setLocalData(emptyArray);
  }, []);
  const handleDelete = (id) => {
    const data = localData.filter((local) => local._id !== id);
    if (data) {
      toast("Deleted Successfully");
      setLocalData(data);
    }

    deleteDataFromLocalStorage(id);
  };
  const handleSort=(e)=>{
 
      const filterData = localData.filter(data=>data.location === "Dhaka")
      
      if(e.target.value === "Dhaka"){
        setLocalData(filterData)
      }
  }
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center mt-20 font-bold text-4xl border border-b-indigo-500 shadow-lg text-white py-3 rounded-xl bg-gradient-to-r from-indigo-500">
        Applied Jobs
      </h2>
      <div className="mt-10">
        <select className="select select-primary w-full max-w-xs" onChange={handleSort}>
          <option disabled selected>
            Select any location
          </option>
          <option>Dhaka</option>
          <option>Chittagong</option>
          <option>Gazipur</option>
          <option>Rajsahi</option>
        </select>
      </div>
      <div>
        {localData.map((local) => (
          <AppliedJobs
            key={local._id}
            local={local}
            handleDelete={handleDelete}
          ></AppliedJobs>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Apply;
