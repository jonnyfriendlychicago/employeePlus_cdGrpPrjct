import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import workerService from '../../services/WorkerService';
// import jokeService from '../../services/JokeService';

const Topic = ( props ) => {

    let { id } = useParams();

    const [ worker, setWorker] = useState(null);
    // const [ newJokeText, setNewJokeText ] = useState("");
    // const [ addingJoke, setAddingJoke ] = useState(false);
    // const [ jokeBeingDeleted, setJokeBeingDeleted ] = useState(null);


    //get worker info id
    useEffect(() => {
        setWorker(
        workerService.get(id)
            .then( resp => setWorker(resp))
            .catch( err => console.log(err))
        )
    }, []);


    // const addJoke = () => {

    //     setAddingJoke(true);
    //     jokeService.create({
    //         worker_id: worker.id,
    //         text: newJokeText
    //     })
    //     .then( newWorker => {

    //         setTopic({
    //             ...worker, 
    //             jokes: [
    //                 newWorker, 
    //                 ...worker.jokes
    //             ]
    //         });

    //         setNewJokeText("");
    //     })
    //     .catch( err => console.log(err))
    //     .finally( resp => setAddingJoke(false))
    // }

    // const deleteJoke = ( jokeId ) => {

    //     if ( ! window.confirm("Are you sure you want to delete this joke?") ) return;
        
    //     setJokeBeingDeleted(jokeId);

    //     jokeService.destroy(jokeId)
    //         .finally( resp => 
    //             setTopic({
    //                 ...worker, 
    //                 jokes: worker.jokes.filter( joke => joke.id !== jokeId )
    //             }))
    // }

    return (
        <>
            <div className='row'>
                {
                    worker === null ?
                        <div className='col-12 text-center'>
                            Loading...
                        </div>
                        :
                        <>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>First Name:</h5>
                                { worker.firstName|| "none" }
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>Last Name:</h5>
                                { worker.lastName || "none" }
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>hireDate:</h5>
                                { worker.hireDate || "none" }
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>jobTitle:</h5>
                                { worker.jobTitle || "none" }
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>workerDescription:</h5>
                                { worker.employmentType || "none" }
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>employmentType:</h5>
                                { worker.employmentType || "none"}
                            </div>
                            {/* <div className='col-12 col-md-6'>
                                <h5>Narrative Arc:</h5>
                                { worker.narrative_arc || "none" }
                            </div> */}
                        </>
                }
            </div>
{/* 
            <fieldset className='row mt-3' disabled={addingJoke}>
                <div className='col-12'>
                    <h5>Add Joke:</h5>
                </div>
                <div className='col-6'>
                    <input 
                        type="text"
                        className='form-control'
                        value={newJokeText}
                        onChange={(e) => setNewJokeText(e.target.value)}
                        />
                </div>
                <div className='col-6'>
                    <button
                        className='btn btn-success'
                        disabled={newJokeText.length === 0}
                        onClick={addJoke}
                    >add</button>
                </div>
            </fieldset>

            <div className='row mt-3'>
                {   
                    worker === null ?
                        <></>
                        :
                        worker.jokes.length === 0 ?
                            <div className='col-12 text-center'>
                                No jokes
                            </div>
                            :
                            <>
                                {
                                    worker.jokes.map( joke =>
                                            <div className='col-12 col-md-6 joke' key={`worker_joke_${joke.id}`}>
                                                <fieldset className='row' disabled={joke.id === jokeBeingDeleted}>
                                                    <div className='col-12 col-md-10'>
                                                        {
                                                            joke.text
                                                        }
                                                    </div>
                                                    <div className='col-12 col-md-2 text-right'>
                                                        <button
                                                            className='btn btn-sm btn-danger'
                                                            onClick={() => deleteJoke(joke.id)}
                                                        >X</button>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        )
                                }
                            </>
                } */}
            {/* </div> */}
        </>
    )
}

export default Topic;