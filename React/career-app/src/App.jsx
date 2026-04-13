import React, {useState} from 'react'
import './App.css';
import JobListing from './components/JobListing';
import fetchJobs from './apis/api';

const App = () => {

  const [jobs, setJobs] = useState([]);
  const [query , setQuery] = useState('');
  const [country, setCountry] = useState('');

  const handleSearch = async () => {
    try{
      const data = await fetchJobs(query, country);
      setJobs(data?.data ?? []);
      // console.log(data);
    }
    catch(err){
      console.log(err)
    }
  }

  // console.log(query);
  // console.log(country);


  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__content">
          <span className="eyebrow">Career App</span>
          <h1>Discover real jobs with a cleaner, faster search flow.</h1>
          <p>
            Search openings by keyword and country, then explore current listings in a modern board layout.
          </p>
        </div>

        <div className="search-panel">
          <label className="field">
            <span>Job title or keyword</span>
            <input type='text' onChange={(e)=>{setQuery(e.target.value)}} placeholder='e.g. Frontend Developer'/>
          </label>

          <label className="field">
            <span>Country</span>
            <input type='text'onChange={(e)=>{setCountry(e.target.value)}} placeholder='e.g. India' />
          </label>

          <button className="search-button" onClick={handleSearch}>Search Jobs</button>
        </div>
      </header>

      <section className="results-section">
        {jobs.length > 0 ? <JobListing jobs={jobs}/> : <p className="empty-state">No Jobs Found</p>}
      </section>

    </div>
  )
}

export default App
