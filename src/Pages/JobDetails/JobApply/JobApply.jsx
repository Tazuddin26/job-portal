import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  //   console.log(id,user);

  const handleApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    // console.log(linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:4000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //sweet alert setup
      });
    navigate("/myApplication");
  };

  return (
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">Apply Jobs now!</h1>
      <form onSubmit={handleApplication} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">linkedin URL</span>
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Reaume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
