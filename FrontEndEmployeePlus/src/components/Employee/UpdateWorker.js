// import React, { useEffect, useState } from 'react'
// import workerService from '../../services/WorkerService';
// import {useNavigate, useParams} from "react-router-dom";


// const UpdateWorker = () => {

//     const { id } =useParams ();
//     const navigate = useNavigate();
//     const [ worker, setWorker ] = useState({
//         firstName: '',
//         lastName: '',
//         hireDate: '',
//         jobTitle: '',
//         workerDescription: '',
//         employmentType: '',
//         workerDivisionId: '',
//     });

//     useEffect(() => {console.log("update trouble")
//         setWorker(
            
//             workerService.getByID(id)
//                 .then( resp =>{
//                     setWorker(resp.data.firstName);
//                     setWorker(resp.data.lastName);
//                     setWorker(resp.data.hireDate);
//                     setWorker(resp.data.jobTitle);
//                     setWorker(resp.data.workerDescription);
//                     setWorker(resp.data.employmentType);
//                     setWorker(resp.data.workerDivisionId);
//                 })
//                 .catch( (err) => {
//                     console.log(err.response.data);
//                 })
//             )
//     }, [id]);

//     const handleSubmit = () => {
        
//         workerService.update(id), {
//             firstName: worker.firstName,
//             lastName: worker.lastName,
//             hireDate: worker.hireDate,
//             jobTitle: worker.jobTitle,
//             workerDescription: worker.workerDescription,
//             employmentType: worker.employmentType,
//             workerDivisionId: worker.workerDivisionId,
//         }
//         .then((resp) => {
//             console.log(resp.data);
//             navigate('/');
//         })
//         .catch(err=>{
//             console.log("update", err.response.data)
//         })
        
//     };
// return(
//         <div>
//             <form onSubmit={handleSubmit}>
//             <div class="row">
//                     <div class="col-sm">
//                             <label>First Name</label>
//                             <input type="text" value={worker.firstName} onChange={(e) => setWorker({...worker, firstName: e.target.value})} /> 
                            
//                         </div>
//                         <div>
//                             <label>Last Name</label>
//                             <input className='form-control' value={worker.lastName}
//                             onChange={(e) => setWorker({...worker, lastName: e.target.value})}/>
//                         </div>
//                         <div>
//                             <label>hireDate</label>
//                             <input type="text" value={worker.hireDate} onChange={(e) => setWorker({...worker, hireDate: e.target.value})}/>

//                         </div>
//                 </div>
//                 <div class="col-sm">
//                     <div>
//                         <label>Job Title</label>
//                         <input
//                                 className='form-control' value={worker.jobTitle}
//                                 onChange={(e) => setWorker({...worker, jobTitle: e.target.value})} />
//                     </div>
//                     <div>
//                         <label>worker Descriptions:</label>
//                         <textarea
//                             className='form-control' value={worker.workerDescription}
//                             onChange={(e) => setWorker({...worker, workerDescription: e.target.value})} />
//                     </div>
//                     <div>
//                         <label>Employee (Fulltime, Part-time, Contract)</label>
//                         <input type="text" className='form-control' value={worker.employmentType}
//                             onChange={(e) => setWorker({...worker, employmentType: e.target.value})} />
//                     </div>
//                 </div>
//                 <button class="btn btn-primary">Edit Worker</button>
//             </form>
//         </div>
//     )

// };

// export default UpdateWorker;