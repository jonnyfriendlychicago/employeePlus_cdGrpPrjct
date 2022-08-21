import React, { useState, useEffect, useContext } from 'react';
import topicService from '../../services/TopicService';
import { AppContext } from '../../store/AppContext';
import { useNavigate } from "react-router-dom";

const NewTopic = ( props ) => {

    let nav = useNavigate();

    const { topics, setTopics } = useContext(AppContext);

    const [ topic, setTopic ] = useState({
        title: '',
        players: '',
        setting: '',
        plot: '',
        conflict: '',
        theme: '',
        narrative_arc: ''
    });

    const [ saving, setSaving ] = useState(false);

    const canSave = topic.title !== ""

    const saveTopic = () => {
        setSaving(true);

        topicService.create(topic)
            .then( resp => {
                setTopics([resp, ...topics]);
            })
            .catch( err => console.log(err) )
            .finally( resp => {
                nav('/my-topics')
            })
    }

    return (
        <fieldset className='row' disabled={saving}>
            <div className='col-12 col-md-6 mb-2'>
                <h5>Title: <span className='required'>required</span></h5>
                
                <input
                    className='form-control'
                    value={topic.title}
                    onChange={(e) => setTopic({...topic, title: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6 mb-2'>
                <h5>Players:</h5>
                <input
                    className='form-control'
                    value={topic.players}
                    onChange={(e) => setTopic({...topic, players: e.target.value})}
                />
            </div>
            <div className='col-12 col-md-6 mb-2'>
                <h5>Setting:</h5>
                <textarea
                    className='form-control'
                    value={topic.setting}
                    onChange={(e) => setTopic({...topic, setting: e.target.value})}
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
            <div className='col-12 col-md-6 mb-2'>
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
            </div>
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

export default NewTopic;