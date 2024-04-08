import {  useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {saveJobApplication} from "../../Utility/LocalStroage"
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt );
    console.log(job);

    const hadnleapplyjob = () =>{
        saveJobApplication(id)
        toast("job applied");
    }
    
    return (
        <div>
          
            <div className="grid grid-cols-4">
                <div className="border md:col-span-3">
                      <h2 className="text-4xl">Details Comming Here  </h2>
                      <h2>Job Details of : {job.job_title}</h2>
                      <p>{job.company_name}</p>
                </div>
                <div className="border ">
                     <h3 className="text-2xl">side things </h3>
                     <button onClick={hadnleapplyjob} className="btn btn-primary w-full">Apply Now </button>
                </div>
             


            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;