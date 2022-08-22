import React, { useState, useContext } from 'react';
import userService from '../services/UserService';
import { useNavigate, Link} from "react-router-dom";
import { AppContext } from '../store/AppContext';

const Login = ( props ) => {

    const { setUser } = useContext(AppContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [UserCheck, setUserCheck] = useState(false);

    const navigate = useNavigate();

    const login = () => {
        
        setUserCheck(true);

        userService.login(email, password)
            .then( resp => { console.log(resp)
     //reloads on the website the user dose not have to log back in if token is local storage            
                window.localStorage.setItem('access_token', resp.auth_token);
    //saves user
                setUser(resp.user);
                navigate("/ " )
            })
            .catch( err => {
                window.alert("Invalid Login try again");
            })
            .finally( resp => setUserCheck(false) )
    }
    

    return (    
        <div >
            <h5>Employee Plus</h5>
            <Link to="/register"> Sign up</Link>
            <form>
                <fieldset disabled={ UserCheck }>
                    <div>
                        <input type="text" id="email" value={email} onChange={ e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" id="password" value={password} onChange={ e => setPassword(e.target.value)} />
                    </div>
                    <input type="button" value="Log In" onClick={login} />
                </fieldset>
            </form>


        </div>
    )
}

export default Login;