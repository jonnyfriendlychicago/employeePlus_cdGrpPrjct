// import React, { useContext } from 'react';
// //useState, useEffect,
// import { Link } from 'react-router-dom';
// import { AppContext } from '../../store/AppContext';

// const MyTopics = ( props ) => {

//     const { user, Workers } = useContext(AppContext);
//     const [employees, setEmployees] = useState([])
//     useEffect(() => {

//         getAllEmployees();
        
//     }, [])
    
//     const getAllEmployees = () =>{
//         EmployeeService.getAllEmployees().then((response)=> {
//             setEmployees(response.data)
//             console.log(response.data);
//         }).catch(error =>{
//             console.log(error);
//         })
//     }

//     const WorkersList = ( props ) => 
//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>Workers</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     Workers.map( 
//                         worker =>
//                         <tr key={worker.id}>
//                             <td>
//                                 <Link
//                                     to={`/worker/${worker.id}`}
//                                 >{worker.firstName}</Link>
//                             </td>
//                             <td></td>
//                         </tr>
//                         )
//                 }
//             </tbody>
//         </table>

//     return (
//         <div className='row'>
//             <div className='col-12'>
//                 {
//                     Workers === null ?
//                         <></>
//                         :
//                         <WorkersList />
//                 }
//             </div>
//             <div className='col-12 text-center'>
//                 <Link
//                     className='btn btn-success'
//                     to="/worker/add"
//                 >Add Worker</Link>
//             </div>
//         </div>
//     )
// }

// export default MyTopics;