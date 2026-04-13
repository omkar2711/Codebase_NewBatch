import React from 'react'
import './JobListing.css'

const JobListing = ({jobs}) => {
  return (
    <div className="job-grid">
      {jobs.map((job) => (
        <article className="job-card" key={job.job_id}>
          <div className="job-card__top">
            <p className="job-card__label">Role</p>
            <h2>{job.job_title}</h2>
          </div>

          <p className="job-card__company">{job.employer_name}</p>

          <div className="job-card__footer">
            <a href={job.job_apply_link} target='_blank' rel='noreferrer'>Apply now</a>
          </div>
        </article>
      ))}
    </div>
  )
}

export default JobListing
