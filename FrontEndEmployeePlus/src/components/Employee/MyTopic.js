// import React, {  useContext } from 'react';
// //useState, useEffect,
// import { Link } from 'react-router-dom';
// import { AppContext } from '../../store/AppContext';

// const MyTopics = ( props ) => {

//     const { user, topics } = useContext(AppContext);

//     const TopicsList = ( props ) => 
//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>Topic</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     topics.map( topic =>
//                         <tr key={`topic_${topic.id}`}>
//                             <td>
//                                 <Link
//                                     to={`/topic/${topic.id}`}
//                                 >{topic.title}</Link>
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
//                     topics === null ?
//                         <></>
//                         :
//                         <TopicsList />
//                 }
//             </div>
//             <div className='col-12 text-center'>
//                 <Link
//                     className='btn btn-success'
//                     to="/topic/new"
//                 >New Topic</Link>
//             </div>
//         </div>
//     )
// }

// export default MyTopics;