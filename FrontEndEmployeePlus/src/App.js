import './App.css';
import { useContext } from 'react';
import { Routes, Route} from "react-router-dom";
import { AppContext } from './store/AppContext';
import Login from './components/Login';
import Registration from './components/Registration';
import Header from './components/Header';
import Home from './components/Home';
import NewWorker from './components/Employee/NewWorker';
import WorkerList from './components/Employee/WorkerList';
import Worker from './components/Employee/Worker';
import UpdateWorker from './components/Employee/UpdateWorker';
// import NavBar from './components/NavBar';

function App() {

  const { user, logout } = useContext(AppContext);

  const Logout = ( props ) => 
    <>
      {logout()}
    </>
  console.log("user logout", user)
  return (
    <div className='container-fluid'>
      <Header />
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
                {/* <Route path="/nav" element={<NavBar />}/> */}
                <Route path="/" element={<Home />}/>
                <Route path="/logout" element={<Logout />}/>
                <Route path="/Employee/new" element={<NewWorker />}/>
                <Route path="/update/:id" element={<UpdateWorker />}/>
                <Route path="/emp/:id" element={<Worker />}/>
                <Route path="/all" element={<WorkerList/>}/>

            </>
        } 
        </Routes>
    </div>
  );
}

export default App;
