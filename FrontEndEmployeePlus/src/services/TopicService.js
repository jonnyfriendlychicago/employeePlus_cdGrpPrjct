// import MainService from './MainService';
import TABService from './TABService';
// import MainService from './MainService';

// class MainService extends MainService{
class TopicService extends TABService {
 //this will be my models
    // model = 'worker';
    model = 'topic';

    // getMyWorkers = () => this._get(`${this.model}/`)
    getMyTopics = () => 
        this._get(
            `${this.model}/`
        )

}

//new instance of it 
// export default new MainService();
export default new TopicService();