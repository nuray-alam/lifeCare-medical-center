import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const { user, setUser, setIsLoading, signInUsingGoogle, createNewUser, updateUserProfileName ,signInUsingEmail} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home'; //jodi direct aikhane login page a ashe

    const handleGoogleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    //handle name change event
    const handleNameChange = event => {
        setName(event.target.value);
        console.log(name);
    }
    //handle email change event
    const handleEmailChange = (event) => {

        setEmail(event.target.value);
        console.log(email)
    }
    //handle password change event
    const handlePasswordChange = event => {
        setPassword(event.target.value);
        console.log(password)
    }

    const toggleLogin = event => {
        setIsLogin(event.target.checked);
    }

    //creating new user account
    const registerNewUser = () => {

        createNewUser(email, password)
            .then((userCredential) => {
                // Signed in 
                setUser(userCredential.user)
                updateUserProfileName(name)
                    .then(() => {
                        history.push(redirect_url)
                    })
                    .finally(() => setIsLoading(false))
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isLogin) {
            registerNewUser();
        }
        else{
            signInUsingEmail(email,password)
            .then((userCredential) => {
                // Signed in 
                setUser(userCredential.user)
                history.push(redirect_url)
                // ...
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(()=> setIsLoading(false))
        }

    }

    return (
        <div className="w-50 mx-auto my-5">
            <form onSubmit={handleSubmit}>
                {!isLogin &&
                    <div>
                        <label htmlFor="name">Name</label>
                        <div className="">
                            <input
                                type="text"
                                onChange={handleNameChange}
                                className="form-control"
                                id="name"
                                placeholder="Enter name"
                                required
                            />
                        </div>
                    </div>
                }
                <div>
                    <label htmlFor="email">Email</label>
                    <div className="">
                        <input
                            type="email"
                            onChange={handleEmailChange}
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email">Password</label>
                    <div className="">
                        <input
                            type="password"
                            onChange={handlePasswordChange}
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                </div>
                <div className="form-check mt-3">
                    <input
                        onChange={toggleLogin}
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                        Already Registered?
                    </label>
                </div>

                <button type="submit" className="btn btn-primary mt-3">{isLogin ? "Login" : "Submit"}</button>
            </form>

            <button onClick={handleGoogleLogin} className="my-5">Sign in with Google</button>


        </div>
    );
};

export default Login;