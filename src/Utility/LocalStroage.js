const getStroedApplication = () =>{
    const stroedJobApplication = localStorage.getItem('job-applications');
    if(stroedJobApplication){
        return  JSON.parse(stroedJobApplication)
    }
}

// const saveJobApplication = id =>{

   
    
    
//     const stroedJobApplication = getStroedApplication();
    
//     const exists = stroedJobApplication.find(jobId => jobId === id);
//     if(!exists){
//         stroedJobApplication.push(id);
//         localStorage.setItem('job-applications', JSON.stringify(stroedJobApplication))

//     }

// }

const saveJobApplication = id => {
    const stroedJobApplication = getStroedApplication() || []; // Initialize to an empty array if there are no stored job applications
    const exists = stroedJobApplication.find(jobId => jobId === id);

    if (!exists) {
        const updatedJobApplication = [...stroedJobApplication, id]; // Create a new array with the new job ID added
        localStorage.setItem('job-applications', JSON.stringify(updatedJobApplication.map(Number)));
    }
}



export {getStroedApplication,saveJobApplication}