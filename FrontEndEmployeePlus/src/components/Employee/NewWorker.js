import React, { useState, useContext} from 'react';
import workerService from '../../services/WorkerService';
import { AppContext } from '../../store/AppContext';
import { useNavigate } from "react-router-dom";

const NewWorker = ( props ) => {

    const { setUser } = useContext(AppContext);
    const navigate = useNavigate();
    
    const [ worker, setWorker ] = useState({
        firstName: '',
        lastName: '',
        hireDate: '',
        jobTitle: '',
        workerDescription: '',
        employmentType: '',
        workerDivisionId: '',
    });



    const newWorkers = () => {
        console.log(worker);
        workerService.newWorkers(worker)
            .then( resp => { console.log(resp)
                setUser(resp.user);
                navigate("/WorkerList" )
            })
            .catch( err => console.log(err) )
            
    }

    return (
        <form onSubmit={newWorkers}>
            <div className='col-12 col-md-6 mb-2'>
                <h5>First Name: </h5>
                
                <input className='form-control' value={worker.firstName}
                onChange={(e) => setWorker({...worker, firstName: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6 mb-2'>
                <h5>last name:</h5>
                <input className='form-control' value={worker.lastName}
                    onChange={(e) => setWorker({...worker, lastName: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6 mb-2'>
                <h5>Hire date:</h5>
                <input
                    className='form-control' value={worker.hireDate}
                    onChange={(e) => setWorker({...worker, hireDate: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6 mb-2'>
                <h5>Job Title:</h5>
                <input
                    className='form-control' value={worker.jobTitle}
                    onChange={(e) => setWorker({...worker, jobTitle: e.target.value})}
                />
            </div>

            <div className='col-12 col-md-6 mb-2'>
                <h5>worker Descriptions:</h5>
                <textarea
                    className='form-control' value={worker.workerDescription}
                    onChange={(e) => setWorker({...worker, workerDescription: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6 mb-2'>
                <h5>Employee (Fulltime, Part-time, Contract)</h5>
                <input
                    className='form-control' value={worker.employmentType}
                    onChange={(e) => setWorker({...worker, employmentType: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6 mb-2'>
                <label>Division :</label><br/>
                <select   name="workerDivisionId" value={worker.workerDivisionId} onChange={(e) =>  setWorker({...worker, workerDivisionId: e.target.value}) } >
                            <option>Select below</option>
                            <option value= "1">Sales</option>
                            <option value="2">Human Resources</option>
                            <option value="3">Administration</option>
                            <option value="4">Operations</option>
                            <option value="5">Executive Management</option>
                        </select>
            </div>
            <div type="submit" className='col-12 text-center mt-2'>
            <input type="button" value="sign up" onClick={ (e) => newWorkers(e)} />
            </div>
        </form>
    )
}

export default NewWorker;






