import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, company, deadline } = useLoaderData();

  return (
    <div className="my-10 border p-4">
      <div>
        <p className="text-3xl text-center my-4">Jobs Details</p>
      </div>
      <p>Title: {title}</p>
      <p>Company: {company}</p>
      <p>Deadline: {deadline}</p>
      <div className="mt-4">
        <Link to={`/jobApply/${_id}`}>
          <button className="btn btn-info">Apply</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
