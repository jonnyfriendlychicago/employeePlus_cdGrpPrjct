import React, { useState } from 'react';
import { useNavigate, Link} from "react-router-dom";
import userService from '../services/UserService';
// import { AppContext } from '../store/AppContext';

const Registration = ( props) => {

    // const { setUser } = useContext(AppContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");
    const navigate = useNavigate();
    // const [UserCheck, setUserCheck] = useState(false);

    const signup = () => {
        //below is to disable someone from loging in 
        // setUserCheck(true);

        userService.signup(email, password, confirm_password)
            .then( resp => { console.log(resp)
                navigate("/login" )
            })
            .catch( err => {
                window.alert("Invalid Sign up  try again");
            })
            
            // .finally( resp => setUserCheck(false) )
    }
        
    
    return (    
        <div >
            <h5>Employee Plus</h5>
            <h4> Register Below</h4>
            <form>
                {/* <fieldset disabled={ UserCheck }> */}
                    <div>
                        Email:
                        <input type="text" id="email" value={email} onChange={ (e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        Password:
                        <input type="password" id="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        confirm password:
                        <input type="password" id="password" value={confirm_password} onChange={ (e) => setConfirm_password(e.target.value)} />
                    </div>
                        <input type="button" value="sign up" onClick={ (e) => signup(e)} />
                {/* </fieldset> */}
            </form>
            <Link to="/login">Login </Link>
        </div>
    )
}

export default Registration;
