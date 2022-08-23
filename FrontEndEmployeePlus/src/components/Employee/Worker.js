import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import workerService from '../../services/WorkerService';
import { AppContext } from "../../store/AppContext";

const Worker = ( props ) => {

    let { id } = useParams();

    const [ worker, setWorker] = useState({});
    const { logout } = useContext(AppContext);
    const navigate = useNavigate();



    //get worker info id
    useEffect(() => {
        setWorker(
        workerService.getById(id)
            .then( resp => setWorker(resp))
            .catch( err => console.log(err.response.data))
        )
    }, []);

    //logout
    const onLogout = (e) => {
        e.preventDefault();
            logout()
            navigate("/" )
    }
    return (
        <div>
            <button 
                className="btn btn-sm btn-danger" onClick={onLogout}>Logout</button>
            <div className='row'>
                <h1>Worker Info</h1>
                {worker._id}
                <div className='col-12 col-md-6 mb-2'>
                    <h5>First Name:</h5>
                    { worker.firstName}
                </div>
                <div className='col-12 col-md-6 mb-2'>
                    <h5>Last Name:</h5>
                    { worker.lastName}
                </div>
                <div className='col-12 col-md-6 mb-2'>
                    <h5>Hire Date:</h5>
                    { worker.hireDate}
                </div>
                <div className='col-12 col-md-6 mb-2'>
                    <h5>Job Title:</h5>
                    { worker.jobTitle }
                </div>
                <div className='col-12 col-md-6 mb-2'>
                    <h5>Worker Description:</h5>
                    { worker.employmentType }
                </div>
                <div className='col-12 col-md-6 mb-2'>
                    <h5>Employment Type:</h5>
                    { worker.employmentType}
                </div>
                <div className='col-12 col-md-6 mb-2'>
                    <h5>Division Type:</h5>
                    { worker.workerDivisionId}
                </div>
            </div>
            <button><Link to={`/`} class="btn btn-warning">Home</Link></button>
            </div>
    )
}

export default Worker;