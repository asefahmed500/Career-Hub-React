import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs , setjobs] = useState([])

    const [datalength , setdatalength] = useState(4)
   
     useEffect( () =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setjobs(data));
     } , [])


    return (
        <div>
            <div className="text-center ">
                <h2 className="text-3xl font-bold">
                        FeaturedJobs : {jobs.length}
                </h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,datalength).map(job =><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={datalength === jobs.length ? 'hidden ' : ''}>
                <button 
                onClick={() => setdatalength(jobs.length)}
                className="btn btn-primary">Show All jobs </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;