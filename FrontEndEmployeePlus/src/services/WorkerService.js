
import TABService from './TABService';



class WorkerService extends TABService {

    model = 'worker';

    newWorkers = (firstName, lastName, hireDate, jobTitle, workerDescription, employmentType, workerDivisionId) => 
    new Promise((resolve, reject) => {
        this._post(
            `${this.model}/add`,
            {
                firstName,lastName,
                hireDate,jobTitle,workerDescription,employmentType,
                workerDivisionId
            }
        )
        .then( resp => resolve(resp))
        .catch( err => reject(err))
    })

    getMyWorkers = () => 
    this._get(
        `${this.model}/all`
    )


}


export default new WorkerService();