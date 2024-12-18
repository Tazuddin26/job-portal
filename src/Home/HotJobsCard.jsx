import React from "react";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 shadow-xl border">
      <div className="flex gap-3 m-2 items-center">
        <figure>
          <img src={company_logo} alt="Shoes" className="w-14" />
        </figure>
        <div className="">
          <h4>{company}</h4>
          <p>{location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">New</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill,idx) => (
            <p key={idx} className="border rounded-md text-center px-2">{skill}</p>
          ))}
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex">
            Salary: $ {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
