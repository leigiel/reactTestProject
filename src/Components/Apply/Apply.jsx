import React, { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../LocalStorage/LocalStorage";
import { useLoaderData } from "react-router-dom";
import AppliedJobs from "./AppliedJobs";

const Apply = () => {
  const values = useLoaderData();
  const [localData, setLocalData] = useState([]);
  useEffect(() => {
    const data = getDataFromLocalStorage();
    const emptyArray = [];
    for (const da of data) {
      const filterData = values.filter((value) => value._id === da);
      emptyArray.push(filterData);
    }
    setLocalData(emptyArray);
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center mt-20 font-bold text-4xl border border-b-indigo-500 shadow-lg text-white py-3 rounded-xl bg-gradient-to-r from-indigo-500">
        Applied Jobs
      </h2>
      <div>
        {localData.map((local) => (
          <AppliedJobs key={local._id} local={local}></AppliedJobs>
        ))}
      </div>
     
    </div>
  );
};

export default Apply;
