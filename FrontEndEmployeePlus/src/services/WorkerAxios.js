import axios from "axios"

const Worker_API_URL ='http://localhost:8080/worker/add';

class WorkerList{
    //create one
    createEmployee(employee){
        return axios.post(Worker_API_URL, employee)
    }
    
}

export default new WorkerList();