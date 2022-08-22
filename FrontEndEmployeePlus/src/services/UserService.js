import TABService from './TABService';
// import CrudService from './CrudService';

class UserService extends TABService {

    model = 'user';

    login = (email, password) => 
        new Promise((resolve, reject) => {
            this._post(
                `${this.model}/login`,
                {
                    email,
                    password
                }
            )
            .then( resp => resolve(resp))
            .catch( err => reject(err))
        })
    
    signup = (email, password, confirm_password) => 
    new Promise((resolve, reject) => {
        this._post(
            `${this.model}/register`,
            {
                email,
                password, 
                confirm_password,
                
            }
        )
        .then( resp => resolve(resp))
        .catch( err => reject(err))
    })
    logout = () => 
        this._get(
            `${this.model}/logout`
        )
    
    getCurrentUser = () => 
        this._get(
            `${this.model}/current-user`
        )
    
}

export default new UserService();