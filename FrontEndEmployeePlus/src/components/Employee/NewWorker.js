import React, { useState, useContext } from 'react';
import topicService from '../../services/TopicService';
import { AppContext } from '../../store/AppContext';
import { useNavigate } from "react-router-dom";

const NewWorker = ( props ) => {

    
    const navigate = useNavigate();

    const { topics, setTopics } = useContext(AppContext);

    const [ worker, setWorker ] = useState({
        firstName: '',
        lastName: '',
        hireDate: '',

    });

    const [ saving, setSaving ] = useState(false);

    const canSave = worker.firstName !== ""

    const saveTopic = () => {
        setSaving(true);

        topicService.create(worker)
            .then( resp => {
                setTopics([resp, ...topics]);
            })
            .catch( err => console.log(err) )
            .finally( resp => {
            navigate('/WorkerList')
                
            })
    }

    return (
        <fieldset className='row' disabled={saving}>
            <div className='col-12 col-md-6 mb-2'>
                <h5>First Name: </h5>
                
                <input
                    className='form-control'
                    value={worker.firstName}
                    onChange={(e) => setWorker({...worker, firstName: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6 mb-2'>
                <h5>Players:</h5>
                <input
                    className='form-control'
                    value={worker.lastName}
                    onChange={(e) => setWorker({...worker, lastName: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6 mb-2'>
                <h5>Hire date:</h5>
                <textarea
                    className='form-control'
                    value={worker.hireDate}
                    onChange={(e) => setWorker({...worker, hireDate: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6 mb-2'>
                <h5>Plot:</h5>
                <textarea
                    className='form-control'
                    value={topic.plot}
                    onChange={(e) => setTopic({...topic, plot: e.target.value})}
                />
            </div>
            {/* <div className='col-12 col-md-6 mb-2'>
                <h5>Conflict:</h5>
                <textarea
                    className='form-control'
                    value={topic.conflict}
                    onChange={(e) => setTopic({...topic, conflict: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6 mb-2'>
                <h5>Theme:</h5>
                <textarea
                    className='form-control'
                    value={topic.theme}
                    onChange={(e) => setTopic({...topic, theme: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6'>
                <h5>Narrative Arc:</h5>
                <textarea
                    className='form-control'
                    value={topic.narrative_arc}
                    onChange={(e) => setTopic({...topic, narrative_arc: e.target.value})}
                />
            </div> */}
            <div className='col-12 text-center mt-2'>
                <button
                    className='btn btn-success'
                    disabled={ !canSave }
                    onClick={saveTopic}
                    >Save</button>
            </div>
        </fieldset>
    )
}

export default NewWorker;