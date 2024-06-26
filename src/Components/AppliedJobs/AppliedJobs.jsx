
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStroedApplication } from '../../Utility/LocalStroage';
const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedjobs, setappliedjobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleJobFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedjobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedjobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedjobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }








    // useEffect(() =>{
    //     const stroedJobIds = getStroedApplication();
    //     if(jobs.length > 0){
    //         // const jobApplied = jobs.filter(job => stroedJobIds.includes(job.id))

    //         const jobApplied = [];
    //         for(const id of stroedJobIds){
    //             const job = jobs.find(job => job.id === id)
    //             if(job){
    //                 jobApplied.push(job)
    //             }
    //         }
    //         setappliedjobs(jobApplied);
    //         // console.log(jobs, stroedJobIds , jobApplied)
    //     }
    // } , [jobs])

    useEffect(() => {
        const stroedJobIds = getStroedApplication();
        if (stroedJobIds && Array.isArray(stroedJobIds) && stroedJobIds.length > 0) {
            const jobApplied = [];
            for (const id of stroedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobApplied.push(job)
                }
            }
            setDisplayJobs(jobApplied)
            setappliedjobs(jobApplied);
        } else {
            // Handle case when no job applications are stored
            setappliedjobs([]);
        }

    }, [jobs]);

    return (
        <div>
            <h2 className='text-2xl '>Jobs I applied: {appliedjobs.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobFilter('all')}><a>All </a></li>
                    <li onClick={() => handleJobFilter('remote')}><a>Remote </a></li>
                    <li onClick={() => handleJobFilter('onsite')}><a>Onsite </a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name} : {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;