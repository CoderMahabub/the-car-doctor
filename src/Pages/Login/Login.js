import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h1>Please LogIn</h1>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google SignIn</button>
        </div>
    );
};

export default Login;