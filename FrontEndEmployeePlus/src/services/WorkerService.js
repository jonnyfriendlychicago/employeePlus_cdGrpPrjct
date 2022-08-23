
import TABService from './TABService';



class WorkerService extends TABService {

    model = 'worker';

    newWorkers = (worker) => 
        this._post(
            `${this.model}/add`,
            {
                firstName: worker.firstName,
                lastName: worker.lastName,
                hireDate: worker.hireDate,
                jobTitle: worker.jobTitle,
                workerDescription: worker.workerDescription,
                employmentType: worker.employmentType,
                workerDivisionId: worker.workerDivisionId,
            }
        )
    
    //get worker by id
    getById = (id) => 
        this._get(
            `${this.model}/${id}`
        )

    //update worker
    update = (worker) => 
    this._patch(
        `${this.model}/update`,
        {
            firstName: worker.firstName,
            lastName: worker.lastName,
            hireDate: worker.hireDate,
            jobTitle: worker.jobTitle,
            workerDescription: worker.workerDescription,
            employmentType: worker.employmentType,
            workerDivisionId: worker.workerDivisionId,
        }
    )
    //get all
    getMyWorkers = () => 
    this._get(
        `${this.model}/all`
    )
    
    //delete one
    deleteOne = () =>
    this.destroy = (id) =>(
    `${this.model}/delete/${id}`
    )

}


export default new WorkerService();