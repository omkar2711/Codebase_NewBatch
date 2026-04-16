import React, {useState , useEffect, useMemo, useCallback, useRef} from 'react'
import './App.css';
import JobListing from './components/JobListing';
import fetchJobs from './apis/api';

const App = () => {



  //useState
  const [jobs, setJobs] = useState([]);
  const [query , setQuery] = useState('');
  const [country, setCountry] = useState('');
  const [count , setCount] = useState(0);

  const ref = useRef(initialValue);

  //useEffect
  useEffect(()=>{
    console.log("useEffect called");
    // setCount(count + 1); //avoid changing state inside useffect

    // const interval = setInterval(()=>{
    //   console.log("Timer running...")
    // }, 1000);

    return () => {
      //cleanup
      // clearInterval(interval);
    }
  },[])


  //useMemo
  const expensiveCalculation = () => {
    let sum = 0;
    for(let i = 0;i<10000;i++){
      sum += i;
    }
  }

  const memoizedValue = useMemo(()=>{
    return expensiveCalculation();
  },[]);

  //useCallback
  const handleClick = useCallback(() => {
    console.log("Clicked....");
  },[count]);

  
  

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
          <p>Count : {count}</p>
          <button onClick={handleClick}>Click</button>
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
