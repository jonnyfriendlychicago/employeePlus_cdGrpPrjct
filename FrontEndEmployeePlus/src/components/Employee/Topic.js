import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import topicService from '../../services/TopicService';
import jokeService from '../../services/JokeService';

const Topic = ( props ) => {

    let { id } = useParams();

    const [ topic, setTopic ] = useState(null);
    const [ newJokeText, setNewJokeText ] = useState("");
    const [ addingJoke, setAddingJoke ] = useState(false);
    const [ jokeBeingDeleted, setJokeBeingDeleted ] = useState(null);

    useEffect(() => {
        setTopic(
        topicService.get(id)
            .then( resp => setTopic(resp))
            .catch( err => console.log(err))
        )
        /* this needs to be build out for workers

            */
    }, []);

    const addJoke = () => {

        setAddingJoke(true);
        jokeService.create({
            topic_id: topic.id,
            text: newJokeText
        })
        .then( newTopic => {

            setTopic({
                ...topic, 
                jokes: [
                    newTopic, 
                    ...topic.jokes
                ]
            });

            setNewJokeText("");
        })
        .catch( err => console.log(err))
        .finally( resp => setAddingJoke(false))
    }

    const deleteJoke = ( jokeId ) => {

        if ( ! window.confirm("Are you sure you want to delete this joke?") ) return;
        
        setJokeBeingDeleted(jokeId);

        jokeService.destroy(jokeId)
            .finally( resp => 
                setTopic({
                    ...topic, 
                    jokes: topic.jokes.filter( joke => joke.id !== jokeId )
                }))
    }

    return (
        <>
            <div className='row'>
                {
                    topic === null ?
                        <div className='col-12 text-center'>
                            Loading...
                        </div>
                        :
                        <>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>Title:</h5>
                                { topic.title || "none" }
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>Players:</h5>
                                { topic.players || "none" }
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>Setting:</h5>
                                { topic.setting || "none" }
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>Plot:</h5>
                                { topic.plot || "none" }
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>Conflict:</h5>
                                { topic.coflict || "none" }
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <h5>Theme:</h5>
                                { topic.theme || "none"}
                            </div>
                            <div className='col-12 col-md-6'>
                                <h5>Narrative Arc:</h5>
                                { topic.narrative_arc || "none" }
                            </div>
                        </>
                }
            </div>

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
                    topic === null ?
                        <></>
                        :
                        topic.jokes.length === 0 ?
                            <div className='col-12 text-center'>
                                No jokes
                            </div>
                            :
                            <>
                                {
                                    topic.jokes.map( joke =>
                                            <div className='col-12 col-md-6 joke' key={`topic_joke_${joke.id}`}>
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
                }
            </div>
        </>
    )
}

export default Topic;