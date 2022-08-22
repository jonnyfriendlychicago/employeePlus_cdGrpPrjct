import React, { useState, createContext, useEffect } from 'react';
import userService from '../services/UserService';
import workerService from '../services/WorkerService';
//cross out
// import topicService from '../services/WorkerService';

const AppContext = createContext();

function AppProvider({ children }) {

    /* state items */
    const [ user, setUser ] = useState(undefined);
    const [ workers, setWorkers ] = useState(null);

    // check for current user

    useEffect(() => {
        console.log("help aa")
        if ( window.localStorage.getItem('access_token') !== null ) {
            userService.getCurrentUser()
                    .then( resp => setUser(resp))
                    .catch( err => setUser(null))
        } else {
            setUser(null);
        }
    }, [])

    // load items needed once the user is logged in
    useEffect(() => {
        if ( user )
            workerService.getMyWorkers(user.id)
                .then( resp => setWorkers(resp) )
                .catch( err => console.log(err) )

    }, [user])

    /* make logout available anywhere */
    const logout = () => {

        window.localStorage.removeItem('access_token')
        userService.logout()
            .finally( resp => setUser(null))
    }

    return (
        <AppContext.Provider value= {{ // add any attributes or methods you want to make accessible
            user,
            setUser,
            workers,
            setWorkers,
            logout
        }}>
            { children }
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext };