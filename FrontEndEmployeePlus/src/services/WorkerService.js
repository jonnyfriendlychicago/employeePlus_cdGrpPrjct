
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

    

    getMyWorkers = () => 
    this._get(
        `${this.model}/all`
    )


}


export default new WorkerService();