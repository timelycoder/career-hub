import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];

      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
    }
  }, []);
  return (
    <div>
      <h1 className="text-2xl">applied jobs by me :{appliedJobs.length}</h1>
    </div>
  );
};

export default AppliedJobs;
