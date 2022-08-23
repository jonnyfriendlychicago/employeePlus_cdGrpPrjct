import React,  { useEffect, useState } from 'react';
import { Link} from 'react-router-dom'; 
import workerService from '../../services/WorkerService';


const WorkerList = ( )=> {

    const [ worker, setWorker] = useState([]);

    useEffect(() => {
        setWorker(
            workerService.getByWorkers()
            .then((resp) => {
                console.log(resp.data);
                setWorker(resp.data);
            }))
            .catch((err) => console.log(err));
        }, []);

    const deleteWorker = (workerId) => {
                workerService.deleteOne(workerId)
                .then((resp) => {
                    const newWorkers = worker.filter((worker) => worker._id !== workerId);
                setWorker(newWorkers);
                })
                .catch((err) => console.log(err));
        };

return(
    <div>
        <div class="container mt-3">
        <h2 className="oblique">Worker List</h2>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Division</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {worker.map((worker) => (
                <tr key={worker._id}>
                    <th>{worker.lastName}, {worker.firstName}</th>
                    <th>{worker.workerDivisionId}</th>
                    <th>
                        <button  class="btn btn-danger" onClick={() => deleteWorker(worker._id)}>Remove</button>
                    </th>
                </tr>    
                ))}
            </tbody>
        </table>
        </div>
    </div>
)


//display table with routes for edit , delete , details

}

export default WorkerList;