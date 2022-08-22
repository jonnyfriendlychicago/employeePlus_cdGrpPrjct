import './App.css';
import { useContext } from 'react';
import { Routes, Route} from "react-router-dom";
import { AppContext } from './store/AppContext';
import Login from './components/Login';
import Registration from './components/Registration';
import Navigation from './components/Navigation';
import Home from './components/Home';
// import MyTopic from './components/Employee/MyTopic';
// import Topic from './components/Employee/Topic';

import NewWorker from './components/Employee/NewWorker';
import WorkerList from './components/Employee/WorkerList';
// import Worker from './components/Employee/Worker';

function App() {

  const { user, logout } = useContext(AppContext);

  const Logout = ( props ) => 
    <>
      {logout()}
    </>
  console.log("user logout", user)
  return (
    <div className='container-fluid'>
      <Navigation />
      <Routes>
      {
        user === undefined ?
          <></>
          : user === null ?
          <>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Registration />}/>
          <Route path="/login" element={<Login />}/>
          </>
            :
            <>
              {/* //redirect routes */}
                {/* <Route path="/register" element={<Registration />}/>
                <Route path="/login" element={<Login />}/> */}
                <Route path="/" element={<Home />}/>
                <Route path="/logout" element={<Logout />}/>
                {/*  new worker  */}
                <Route path="/Employee/new" element={<NewWorker />}/>
                {/* worker by id */}
                {/* <Route path="/worker/:id" element={<Worker />}/> */}
                <Route path="/WorkerList" element={<WorkerList/>}/>
                
              
              
            </>
        } 
        </Routes>
    </div>
  );
}

export default App;
