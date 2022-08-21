/*
    Extend this class to create service for each entity
*/

import { config } from '../config'; 
import axios from './TABAxios';

class TABService {

    model = null; 
    //_is private 
    _get = (path) => 
        new Promise((resolve, reject) => {
            axios.get(`${config.API_URL}/${path}`)
                .then ( resp => {
                    resolve(resp.data);
                })
                .catch( err => reject(err))
        })

    _post = (path, content, headers = {}) => 
        new Promise((resolve, reject) => {
            axios.post(`${config.API_URL}/${path}`, content, headers)
                .then( resp => {
                    resolve(resp.data);
                })
                .catch( err => reject(err))
        })

    _patch = (path, content, headers = {}) => 
        new Promise((resolve, reject) => {
            axios.patch(`${config.API_URL}/${path}`, content, headers)
                .then( resp => {
                    resolve(resp.data)
                })
                .catch( err => reject(err));
        })

    _delete = (path) => 
        axios.delete(`${config.API_URL}/${path}`)
    
    //pubic methods 
    create = (entity) => 
        this._post(
            `${this.model}/add`,
            entity
        )

    destroy = (id) => 
        this._delete(
            `${this.model}/delete/${id}`
        )

    get = (id) => 
        this._get(
            `${this.model}/${id}`
        )

    get_all = () => 
        this._get(
            `${this.model}`
        )

    update = (entity) => 
        this._patch(
            `${this.model}/update`,
            entity
        )
}

export default TABService;